$(function(){
	//搜索框监听
	debugger;
	//关键词柱状图获取
	keyword = getUrlParam('keyword');
	groupName = getUrlParam('groupName');
	getCaculateData(keyword,groupName);
	getMatrixData(keyword,groupName);
	//获取数据
});

var keyword = "";
var groupName = "";

function getMatrixData(keyword,groupName){
	$.ajax({
		type:'POST',
		url: ctx+'/data/caculate',
		dataType: 'json',
		data:{"keyword":keyword,
			"groupName":groupName,
			"urlName":"GroupMatrix.ashx"
		},
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
				//%u 解码
				var str = unescape(ret.data.ret);
				loadMatrix(str);
			}
		},
		error:function(){
			
		}
	});
}


function getCaculateData(keyword,groupName){
	$.ajax({
		type:'POST',
		url: ctx+'/data/caculate',
		dataType: 'json',
		async:false,
		data:{"keyword":keyword,
			"groupName":groupName,
			"urlName":"GroupTrend.aspx"
		},
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
				//%u 解码
				var str = unescape(ret.data.ret);
				loadWordCount(str);
				loadWordCloud(str);
			}
		},
		error:function(){
			
		}
	});
}



