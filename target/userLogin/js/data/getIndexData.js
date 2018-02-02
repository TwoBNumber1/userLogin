$(function(){
	//搜索框监听

	getIndexData(getUrlParam('keyword'),getUrlParam('type'),getUrlParam('numType'))
	//获取数据
	//获取发表量
	getPublishNumber();
	//相关词
	getRelationalWord();
	//文献信息
	getPaperInfo();

});

/*根据name获取当前Url中的参数*/
function getUrlParam(name){

	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数

	if (r!=null) return decodeURI(r[2]); return null; //返回参数值
} 


function getIndexData(keyword,type,numType){
	$.ajax({
		type:'GET',
		url: ctx+'/data/getIndexData',
		dataType: 'json',
		data:{"topSearch":keyword,
			"resultType":type,
			"numType":numType
		},
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
				loadPublishEcharts(ret.data);
				getWordCount();
			}
		},
		error:function(){
			
		}
	});
	
}




/*获取关键词数据*/
function getWordCount(){
	$.ajax({
		type:'GET',
		url: ctx+'/data/getIndexData',
		dataType: 'json',
		data:{"topSearch":keyword,
			"resultType":"GetTotalRelevanceWordsForCht",
			"numType":""
		},
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
				//加载关键词条形图
				loadWordEcharts(ret.data);
			}
		}
	});
}

function getPublishNumber(){
	
}

function getRelationalWord(){
	
}

function getPaperInfo(){
	
}