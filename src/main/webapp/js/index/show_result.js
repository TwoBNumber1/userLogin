
var publishChart = echarts.init(document.getElementById('publishCount'),"wonderland");
publishChart.showLoading();

var wordChart = echarts.init(document.getElementById('wordCount'),"wonderland");
wordChart.showLoading();



var cache = {};
var keyword = "";

$(function(){
	//绑定
	$("#attention_table").tipso({
		   	useTitle: false,
	        position: 'right',
	        width:"120px",
	        background:"#63c6ae",
	        color:"#ffffff"
	});

	$(".tab_a_class").tipso({
	 	useTitle: false,
	    position: 'left',
	    width:"120px",
	    background:"#63c6ae",
	    color:"#ffffff"
	})
	keyword = getUrlParam('keyword');
	$("#search").val(keyword);
	getIndexData(keyword,'GetAttention','Academic');
	setTimeout('getWordCount();',1000)
	debugger;
	setTimeout('getAttentionArticle();',2500);
	setTimeout('getSubject();',4000);
	setTimeout('getOrgan();',6000);
});


var all_flag = {};
/**
 * 搜索框绑定事件
 * @returns 老子不返回
 */
$("#searchBtn").on("click",function(){
	all_flag = {};
	console.log("本次搜索关键词"+$("#search").val());
	keyword = $("#search").val();
	publishChart.showLoading();
	getIndexData(keyword,'GetAttention','Academic');
	wordChart.showLoading();
	getAttentionArticle();
	getWordCount();
	getSubject();
	getOrgan();
});


$("#all-tab a").click(function(e){
	debugger;
	e.preventDefault();
	if( deal_with_undefined($(this).parent().attr("class")).indexOf("active") != -1 ){
		return;
	}
	var href = $(this).attr('href');
	$(this).tab('show');
	if( href === "#caculate-data" ){
		getCaculateData(keyword,"关键词");
		setTimeout('getMatrixData("'+keyword+'","关键词")',3000);
	}else if( href === "#source-distribute"){
		getResourceType(keyword,"资源类型")
	}
});

/**
 * 指数分析选项卡切换--（部分操作） 并显示
 * @param e
 * @returns
 */
$("#count-tab a").click(function(e){
	//切换选项卡
	e.preventDefault();
	if( $(this).parent().attr("class").indexOf("active") != -1 ){
		return;
	}
	var href = $(this).attr("href");
	$(this).tab("show");
	
	//显示数据结果
	debugger;
	if( !all_flag.userflag ||  typeof(all_flag.userflag) == 'undefined' ){
		if( href === '#user-content' ){
			var userChart = echarts.init(document.getElementById('userCount'),"wonderland");
			userChart.showLoading();
			getUserData(userChart);
			all_flag.userflag = true;//图表已加载
		}
	}else if( !all_flag.citedflag ||  typeof(all_flag.citedflag) == 'undefined' ){
		
		if( href === '#cited-content' ){
			var citedChart = echarts.init(document.getElementById('citedCount'),"wonderland");
			citedChart.showLoading();
			getCitedData(citedChart);
			all_flag.citedflag = true;//图表已加载
		}
	}else if( !all_flag.mediaflag ||  typeof(all_flag.mediaflag) == 'undefined' ){
		
		if( href === '#media-content' ){
			var mediaChart = echarts.init(document.getElementById('mediaCount'),"wonderland");
			mediaChart.showLoading();
			getMediaData(mediaChart);
			all_flag.mediaflag = true;//图表已加载
		}
	}else{
		return;
	}
})



