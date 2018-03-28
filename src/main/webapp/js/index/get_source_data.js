
var resourceChart;
var researchChart;
var subChart;
var sourceChart;
var source_flag = 0;
function initSourcePage(){
	getResourceType(keyword,"资源类型");
	getDocuSource(keyword,"文献来源");
	getSubDistribute(keyword,"学科");
	getResearchLevel(keyword,"研究层次");
	getOrganData(keyword,"机构");
	getFundData(keyword,"基金");
}

function getDocuSource(keyword,groupName){
	//清空chart
	deal_with_chart(sourceChart);
	sourceChart = echarts.init(document.getElementById('docu_source'),"wonderland");
	sourceChart.showLoading();
	$.ajax({
		type:'POST',
		url: ctx+'/data/caculate',
		dataType: 'json',
		data:{"keyword":keyword,
			"groupName":groupName,
			"urlName":"GroupTrend.aspx"
		},
		success: function(ret){
			if(ret.status == 0){
				var  str = unescape(ret.data.ret);
				loadSubDistribute("文献来源",sourceChart,str);
				source_flag = 1;
				debugger;
			}else{
				console.log(ret.info);
				layer.msg(ret.info+"文献来源",{icon:3});
				sourceChart.hideLoading();
			}
		
		},
		error:function(){
		}
	});
}
function getSubDistribute(keyword,groupName){
	deal_with_chart(subChart);
	subChart = echarts.init(document.getElementById('sub_distribute'),"wonderland");
	subChart.showLoading();
	$.ajax({
		type:'POST',
		url: ctx+'/data/caculate',
		dataType: 'json',
		data:{"keyword":keyword,
			"groupName":groupName,
			"urlName":"GroupTrend.aspx"
		},
		success: function(ret){
			if( ret.status == 0 ){
				var str = unescape(ret.data.ret);
				loadSubDistribute("学科",subChart,str)
				debugger;
			}else{
				console.log("学科分布"+ret.info);
				layer.msg("学科分布"+ret.info,{icon:3});
				subChart.hideLoading();
			}
		},
		error:function(){
			console.log("学科分布"+ret.info);
		}
	});
}

function getResearchLevel(keyword,groupName){
	deal_with_chart(researchChart);
	researchChart = echarts.init(document.getElementById('research_level'),"wonderland");
	researchChart.showLoading();
	$.ajax({
		type:'POST',
		url: ctx+'/data/caculate',
		dataType: 'json',
		data:{"keyword":keyword,
			"groupName":groupName,
			"urlName":"GroupTrend.aspx"
		},
		success: function(ret){
			if(ret.status == 0){
				var str = unescape(ret.data.ret);
				loadResearchLevel(researchChart,str)
				debugger;
			}else{
				layer.msg("研究层次"+ret.info,{icon:3});
			}
		},
		error:function(){
			layer.msg("研究层次"+ret.info,{icon:3});
			researchChart.hideLoading();
		}
	});
	
}
function getResourceType(keyword,groupName){
	deal_with_chart(resourceChart);
	resourceChart = echarts.init(document.getElementById('resource_type'),"wonderland");
	resourceChart.showLoading();
	$.ajax({
		type:'POST',
		url: ctx+'/data/caculate',
		dataType: 'json',
		data:{"keyword":keyword,
			"groupName":groupName,
			"urlName":"GroupTrend.aspx"
		},
		success: function(ret){
			if(ret.status == 0){
				var str = unescape(ret.data.ret);
				loadResourceType(resourceChart,str)
				debugger;
			}else{
				layer.msg("来源类型"+ret.info);
				resourceChart.hideLoading();
			}
		},
		error:function(){
		}
	});
}

function loadResourceType(resourceChart,str){
	debugger;
	resourceChart.showLoading();
	var obj = jQuery.parseJSON(str);
	var data = [];
	var xs = [];
	for( var i=0; i<obj.length; i++ ){
		xs.push(obj[i].name);
		data.push({
			name:obj[i].name,
			value:obj[i].y
		});
	}
	resourceChart.setOption({
		  title : {
		        text: '资源类型',
		        x:'left'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    toolbox:{
    	    	show:true,
    	    	feature:{
	    	    	magicType:{
	    	    		type:["line","bar"]
	    	    	},
	    	    	dataView:{readOnly:false},
	    	    	restore:{},
	    	    	saveAsImage:{}
    	    	}
    	    },
		    legend: {
	    	    tooltip: {
	    	        show: true
	    	    },
		    	show:true,
		        type: 'plain',
		        orient: 'horizontal',
		        data:xs,
		        //x:'bottom',
		        bottom:"25"
		    },
		    labelLine:{
		    	show:true,
		    	length:"10"
		    },
		    series : [
		        {
		            name: '文献数',
		            type: 'pie',
		            selectedMode:"multiple",
		            selectedOffset:10,
		            //数组形式第一项内半径 第二项外半径
		            radius : '40%',
		            center:["50%","50%"],
		            data: data,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur:10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
	});
	resourceChart.hideLoading();
}



function loadResearchLevel(researchChart,str){
	debugger;
	var obj = jQuery.parseJSON(str);
	var data = [];
	var xs = [];
	for( var i=0; i<obj.length; i++ ){
		xs.push(obj[i].name);
		data.push({
			name:obj[i].name,
			value:obj[i].y
		})
	}
	
	researchChart.setOption({
		  title : {
		        text: '研究层次',
		        x:'left'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		    	tooltip:{
		    		show:true
		    	},
	    	 formatter: function (name) {//避免图例过长
	                return echarts.format.truncateText(name, 100, '14px Microsoft Yahei'
	         	           , '…');
	    	    },
		        type: 'scroll',
		        orient: 'horizontal',
		        //x:'bottom',
		        bottom:"25",
		        data: xs,
		        selected: xs
		    },
		/*    labelLine:{
		    	show:true,
		    	length:15
		    },*/
		    series : [
		        {
		            name: '文献数',
		            type: 'pie',
		            radius : '40%',
		            center:["50%","50%"],
		            avoidLabelOverlap: true,
		            selectedMode:"multiple",
		            selectedOffset:"10",
		            data: data,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
	});
	researchChart.hideLoading();
}


function loadSubDistribute(discribe,chart,str){
	debugger;
	var obj = jQuery.parseJSON(str);
	var xs = [];
	var ys = [];
	for( var i=0; i<obj.length; i++ ){
		xs.push(obj[i].name);
		ys.push(obj[i].y);
	}
	
	chart.setOption({
		 title : {
		        text: discribe,
		        x:'left',
		        subtext:'关键词<'+keyword+'>的'+discribe
		    },
		    grid:{
		    	bottom:80
		    },
		    toolbox: {
    	        show: true,
    	        feature: {
    	            myTool1:{
    	            	show:true,
    	            	title:"更新数据",
    	            	 icon: 'path://M50.104,88.326c-7.857,0-15.78-2.388-22.601-7.349c-8.302-6.039-13.746-14.941-15.33-25.067 c-1.582-10.115,0.879-20.24,6.929-28.51C30.803,11.406,53.225,6.948,70.148,17.252c1.626,0.989,2.142,3.11,1.151,4.737 c-0.99,1.626-3.11,2.143-4.737,1.151c-13.889-8.454-32.292-4.796-41.896,8.33c-4.96,6.781-6.978,15.082-5.681,23.374 c1.299,8.303,5.764,15.604,12.574,20.557c14.053,10.224,33.828,7.143,44.081-6.872c3.094-4.229,5.094-9.188,5.783-14.341 c0.252-1.888,1.983-3.209,3.874-2.96c1.888,0.252,3.213,1.987,2.96,3.874c-0.842,6.291-3.28,12.342-7.053,17.498 C73.69,82.873,61.973,88.326,50.104,88.326z',
    	            	 onclick:function(){
    	            		 chart.showLoading();
    	            		 keyword = $("#search").val().trim();
    	            		 if(discribe.indexOf("学科") != -1)
    	            			 getSubDistribute(keyword,discribe);
    	            		 else
    	            			 getDocuSource(keyword,discribe);
    	            	 }
    	            },
    	            magicType: {
    	                type: ['line']
    	            },
    	            restore: {},
    	            dataView: {readOnly: false},
    	            saveAsImage: {}
    	        }
    	    },
		    dataZoom : [
     		   {
     	        show : true,
     	        realtime : true,
     	        start :0,
     	        end : Percentage(9,obj.length)
     		   },
	     	   {
	     	    	type:"inside",
	     	    	start : 0,
	        	        end : Percentage(9,obj.length)
	     	   }
     	   ],
     	  xAxis: {
     		  type:"category",
              data: xs,
              axisLabel: {  
	           	   interval:0,  
	           	   rotate:-20  
           	} 
          },
          yAxis:[{
              type: 'value',
              scale: true,
              name: '文献量(篇)',
              nameLocation:"center",
	               nameGap:35,
	               min: 0.000000001, //如果使用0，会出现你之前的情况，必须大于0的，使用0.000000001无限接近0
	               axisLabel: {
	            	   formatter: function(value, index) {
		  	                 if (index === 0) { //因为最小值不是0，重新转化为0
		  	                     value = Math.floor(value);
		  	                 }
		  	                 return value;
	            	   }
	               },
          }],
         
     	    tooltip: {
     	        trigger: 'axis',
     	        axisPointer: {
     	            type: 'shadow'
     	        }
     	    },
			    series: [{
			        name: "文献数",
			        type: 'bar',
			        data:ys,
			        barCategoryGap:"40%"
			    }]
	});
	chart.hideLoading();
}

