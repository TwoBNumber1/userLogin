/**
 * 获取媒体关注度数据
 * @param mediaChart 加载数据的图表组件
 * @returns
 */
function getMediaData(mediaChart){
	debugger;
	$.ajax({
		type:'GET',
		url: ctx+'/data/getIndexData',
		dataType: 'json',
		async:true,
		data:{"topSearch":keyword,
			"resultType":"GetAttention",
			"numType":"Media"
		},
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
				loadMediaChart(ret.data,mediaChart);
				//getWordCount();
			}else{
				mediaChart.hideLoading();
				toastr.error("Failed!"+ret.info);
			}
		}
	});
}
/**
 * 获取学术传播度数据
 * @param citedChart 加载数据的图表组件
 * @returns
 */
function getCitedData(citedChart){
	debugger;
	$.ajax({
		type:'GET',
		url: ctx+'/data/getIndexData',
		dataType: 'json',
		async:true,
		data:{"topSearch":keyword,
			"resultType":"GetAttention",
			"numType":"Cited"
		},
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
				loadCitedChart(ret.data,citedChart);
				//getWordCount();
			}else{
				citedChart.hideLoading();
				toastr.error("Failed!"+ret.info);
			}
		}
	});
}

/**
 * 获取用户关注度数据
 * @param userChart 加载数据的图表
 * @returns
 */
function getUserData(userChart){
	debugger;
	$.ajax({
		type:'GET',
		url: ctx+'/data/getIndexData',
		dataType: 'json',
		async:true,
		data:{"topSearch":keyword,
			"resultType":"GetAttention",
			"numType":"User"
		},
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
				loadUserChart(ret.data,userChart);
				//getWordCount();
			}else{
				userChart.hideLoading();
				toastr.error("Failed!"+ret.info);
			}
		}
	});
}

/*
 * 获取关键词数据
 */
function getWordCount(){
	
	if( cache.keyword === keyword ){
		loadWordEcharts(cht.data);
	}else{
		$.ajax({
			type:'GET',
			url: ctx+'/data/getIndexData',
			dataType: 'json',
			
			data:{"topSearch":keyword,
				"resultType":"GetTotalRelevanceWordsForCht",
				"numType":""
			},
			async:true,
			success: function(ret){
				debugger;
				if(ret.status === 0 && ret.data != null){
					//加载关键词条形图
					cache.keyword = keyword;
					cache.data = ret.data;
					loadWordEcharts(ret.data);
				}else{
					wordChart.hideLoading();
					toastr.error("FAILED：" + ret.info);
				}
			}
		});
	}
}

/**
 * 获取受关注文献数据( html <table>形式返回 )
 * @returns
 */
function getAttentionArticle(){
	$.ajax({
		type:'GET',
		url: ctx+'/data/getIndexData',
		dataType: 'json',
		async:true,
		data:{"topSearch":keyword,
			"resultType":"GetAttentionArticle",
			"numType":Math.ceil(Math.random()*10)
		},
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
				//	\ 在字符串和正则表达式中都是特殊字符， 
				//	\\ 在字符串中实际表示 字符 \ , 
				//	这样的东西到了正则表达式解析的时候就是正则表达式的特殊字符 \ 了，正则表达式会报错
				//	要写成 \\\\ 或者 /\\/ 到了字符串里才是 \\的效果
				var str = replaceAll(ret.data.ret,'\\\\',"");
				var content = str.substr(1,str.length-2);
				debugger;
				$("#attention_table").empty().append(content);
				var table = $("#attention_table").find("table");
				//修改a标签
				 var href = "http://kns.cnki.net";
				 table.find('tr').each(function(){
					 var a = $(this).children("td:first").find('a');
					var fa = a.attr('href');
					a.attr("href",href+fa);
					a.attr("data-toggle",'tooltip');
					a.attr("title","点击跳转到知网文献详情页");
				 });
			/*	var th = table.find("tr:first");
				table.remove("tr:first");
				table.prepend("<thead>"+th.html()+"</thead>");*/
				table.addClass("table table-striped table-bordered table-hover dataTables-example dataTable");
				
				//格式化表格
				
				
				//getWordCount();
			}else{
				$("#attention_table").empty().html("<h2>暂无数据</h2>");
				toastr.error("Failed!");
			}
		}
	});
}

/**
 * 获取文献量数据
 * @param keyword 
 * @param type
 * @param numType
 * @returns
 */
function getIndexData(keyword,type,numType){
	
	$.ajax({
		type:'GET',
		url: ctx+'/data/getIndexData',
		dataType: 'json',
		async:true,
		data:{"topSearch":keyword,
			"resultType":type,
			"numType":numType
		},
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
				loadPublishEcharts(ret.data);
				//getWordCount();
			}else{
				publishChart.hideLoading();
				toastr.warning("Failed!");
			}
		}
	});
}