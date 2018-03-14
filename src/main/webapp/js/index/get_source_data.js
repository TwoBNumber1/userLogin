
$("#button1").bind("click",function(){
	getResourceType($("#search").val().trim(),"资源类型");
	
})

$("#button2").bind("click",function(){
	getResearchLevel($("#search").val().trim(),"研究层次");
	
})
$("#button3").bind("click",function(){
	getSubDistribute($("#search").val().trim(),"学科");
	
})
$("#button4").bind("click",function(){
	getDocuSource($("#search").val().trim(),"文献来源");
})


var resourceChart;
var researchChart;
var subChart;
var sourceChart;

function getDocuSource(keyword,groupName){
	$.ajax({
		type:'POST',
		url: ctx+'/data/caculate',
		dataType: 'json',
		data:{"keyword":keyword,
			"groupName":groupName,
			"urlName":"GroupTrend.aspx"
		},
		success: function(ret){
			var str = unescape(ret.data.ret);
			deal_with_chart(sourceChart);
			sourceChart = echarts.init(document.getElementById('docu_source'),"wonderland");
			sourceChart.showLoading();
			loadSubDistribute(sourceChart,str)
			debugger;
		
		},
		error:function(){
		}
	});
}
function getSubDistribute(keyword,groupName){
	$.ajax({
		type:'POST',
		url: ctx+'/data/caculate',
		dataType: 'json',
		data:{"keyword":keyword,
			"groupName":groupName,
			"urlName":"GroupTrend.aspx"
		},
		success: function(ret){
			var str = unescape(ret.data.ret);
			deal_with_chart(subChart);
			subChart = echarts.init(document.getElementById('sub_distribute'),"wonderland");
			subChart.showLoading();
			loadSubDistribute(subChart,str)
			debugger;
		
		},
		error:function(){
		}
	});
}

function getResearchLevel(keyword,groupName){
	$.ajax({
		type:'POST',
		url: ctx+'/data/caculate',
		dataType: 'json',
		data:{"keyword":keyword,
			"groupName":groupName,
			"urlName":"GroupTrend.aspx"
		},
		success: function(ret){
			var str = unescape(ret.data.ret);
			deal_with_chart(researchChart);
			researchChart = echarts.init(document.getElementById('research_level'),"wonderland");
			researchChart.showLoading();
			loadResearchLevel(researchChart,str)
			debugger;
		
		},
		error:function(){
		}
	});
	
}
function getResourceType(keyword,groupName){
	$.ajax({
		type:'POST',
		url: ctx+'/data/caculate',
		dataType: 'json',
		data:{"keyword":keyword,
			"groupName":groupName,
			"urlName":"GroupTrend.aspx"
		},
		success: function(ret){
			var str = unescape(ret.data.ret);
			deal_with_chart(resourceChart);
			resourceChart = echarts.init(document.getElementById('resource_type'),"wonderland");
			resourceChart.showLoading();
			loadResourceType(resourceChart,str)
			debugger;
		
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
	for( var i=0; i<obj.length; i++ ){
		data.push({
			name:obj[i].name,
			value:obj[i].y
		})
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
		    legend: {
		        type: 'scroll',
		        orient: 'vertical',
		        right: 10,
		        top: 20,
		        bottom: 20,
		        data: data.legendData,

		        selected: data.selected
		    },
		    series : [
		        {
		            name: '文献数',
		            type: 'pie',
		            radius : '55%',
		            center: ['40%', '50%'],
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
	
	resourceChart.hideLoading();
}



function loadResearchLevel(researchChart,str){
	debugger;
	researchChart.showLoading();
	var obj = jQuery.parseJSON(str);
	var data = [];
	for( var i=0; i<obj.length; i++ ){
		data.push({
			name:obj[i].name,
			value:obj[i].y
		})
	}
	
	researchChart.setOption({
		  title : {
		        text: '研究层次',
		        x:'right'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        type: 'scroll',
		        orient: 'vertical',
		        right: 10,
		        top: 20,
		        bottom: 20,
		        data: data.legendData,

		        selected: data.selected
		    },
		    series : [
		        {
		            name: '文献数',
		            type: 'pie',
		            radius : '55%',
		            center: ['40%', '50%'],
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


function loadSubDistribute(subChart,str){
	debugger;
	subChart.showLoading();
	var obj = jQuery.parseJSON(str);
	var xs = [];
	var ys = []
	for( var i=0; i<obj.length; i++ ){
		xs.push(obj[i].name);
		ys.push(obj[i].y);
	}
	
	subChart.setOption({
		 title : {
		        text: '学科分布',
		        x:'left',
		        subtext:""
		    },
		    toolbox: {
    	        show: true,
    	        feature: {
    	            myTool1:{
    	            	show:true,
    	            	title:"更新数据",
    	            	 icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
    	            	 onclick:function(){
    	            		 subChart.showLoading();
    	            		 getSubDistribute($("#search").val().trim(),"学科");
    	            	 }
    	            },
    	            magicType: {
    	                type: ['line', 'stack', 'tiled']
    	            },
    	            dataView: {readOnly: false},
    	            restore: {},
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
	               nameGap:50,
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
			        barGap:"100%"
			    }]
	});
	
	subChart.hideLoading();
}

