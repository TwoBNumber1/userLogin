
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
	getWordCount();
	debugger;
	getAttentionArticle();
	
	
});


var all_flag = {};
/**
 * 搜索框绑定事件
 * @returns 老子不返回
 */
$("#searchBtn").on("click",function(){
	all_flag = {};
	
	alert($("#search").val());
	keyword = $("#search").val();
	publishChart.showLoading();
	getIndexData(keyword,'GetAttention','Academic');
	wordChart.showLoading();
	getAttentionArticle();
	getWordCount();
});

/*
$("#all-tab a").click(function(e){
	e.preventDefault();
	$(this).tab('show');
});*/

/**
 * 选项卡切换 并显示
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
		var userChart = echarts.init(document.getElementById('userCount'),"wonderland");
		userChart.showLoading();
		if( href === '#user-content' ){
			getUserData(userChart);
			all_flag.userflag = true;//图表已加载
		}
	}else if( !all_flag.citedflag ||  typeof(all_flag.citedflag) == 'undefined' ){
		var citedChart = echarts.init(document.getElementById('citedCount'),"wonderland");
		citedChart.showLoading();
		if( href === '#cited-content' ){
			getCitedData(citedChart);
			all_flag.citedflag = true;//图表已加载
		}
	}else if( !all_flag.mediaflag ||  typeof(all_flag.mediaflag) == 'undefined' ){
		var mediaChart = echarts.init(document.getElementById('mediaCount'),"wonderland");
		mediaChart.showLoading();
		if( href === '#media-content' ){
			getMediaData(mediaChart);
			all_flag.mediaflag = true;//图表已加载
		}
	}else{
		return;
	}
	
})


