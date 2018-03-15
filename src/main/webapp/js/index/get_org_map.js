

$("#buttonOrg").bind("click",function(){
	debugger;
	getOrganData($("#search").val().trim(),"机构");
	
})

$("#buttonMap").bind("click",function(){
	debugger;
	getOrgMap();
	
	
});


var organChart;
function getOrganData(keyword,groupName){

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
				deal_with_chart(organChart);
				organChart = echarts.init(document.getElementById('org_bar'),"wonderland");
				organChart.showLoading();
				loadOrganChart(organChart,str)
				debugger;
			
			},
			error:function(){
			}
		});
	}
	

var orgMap;
function loadOrganChart(organChart,str){
	organChart.showLoading();
	var obj = jQuery.parseJSON(str);
	orgMap = obj.slice(0,21);
	var xs = [];
	var ys = []
	for( var i=0; i<obj.length; i++ ){
		xs.push(obj[i].name);
		ys.push(obj[i].y);
	}
	
	organChart.setOption({
		 title : {
		        text: '机构分布',
		        x:'left',
		        subtext:"机构的文献发表量分布"
		    },
		    toolbox: {
    	        show: true,
    	        feature: {
    	            myTool1:{
    	            	show:true,
    	            	title:"更新数据",
    	            	 icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
    	            	 onclick:function(){
    	            		 orgChart.showLoading();
    	            		 getOrganData($("#search").val().trim(),"机构");
    	            	 }
    	            },
    	            magicType: {
    	                type: ['line']
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
			        barGap:"80%"
			    }]
	});
	organChart.hideLoading();
}



function getOrgMap(){
	

	var address = [];
	for( var i=0; i<orgMap.length; i++ ){
		address.push(orgMap[i].name)
	}
	var geoCoordMap;
	
	debugger;
	$.ajax({
		type:"GET",
		url:ctx+"/map/location?address="+address.toString(),
		success:function(ret){
			debugger;
			geoCoordMap = jQuery.parseJSON(ret);
			loadOrganMap(geoCoordMap);
		}
	});
}


function loadOrganMap(geoCoordMap){
	debugger;
	 var convertData = function (orgMap) {
		 debugger;
	       var res = [];
	       var count = 0;
	       var length = orgMap.length;
	       while(count<length){
	           var geoCoord = geoCoordMap[orgMap[count].name].split(",");
	           if (geoCoord) {
	               res.push({
	                   name: orgMap[count].name,
	                   value: geoCoord.concat(orgMap[count].y)
	               });
	           }
	           count++;
	       }
	       return res;
	   };

	   debugger;
	   option = {
	       title: {
	           text: '发文机构分布',
	           subtext: 'data from cnki.net',
	           sublink: 'kns.cnki.net',
	           left: 'center'
	       },
	       tooltip : {
	           trigger: 'item'
	       },
	       bmap: {
	           center: [104.114129, 37.550339],
	           zoom: 5,
	           roam: true,
	           mapStyle: {
	               styleJson: [{
	                   'featureType': 'water',
	                   'elementType': 'all',
	                   'stylers': {
	                       'color': '#d1d1d1'
	                   }
	               }, {
	                   'featureType': 'land',
	                   'elementType': 'all',
	                   'stylers': {
	                       'color': '#f3f3f3'
	                   }
	               }, {
	                   'featureType': 'railway',
	                   'elementType': 'all',
	                   'stylers': {
	                       'visibility': 'off'
	                   }
	               }, {
	                   'featureType': 'highway',
	                   'elementType': 'all',
	                   'stylers': {
	                       'color': '#fdfdfd'
	                   }
	               }, {
	                   'featureType': 'highway',
	                   'elementType': 'labels',
	                   'stylers': {
	                       'visibility': 'off'
	                   }
	               }, {
	                   'featureType': 'arterial',
	                   'elementType': 'geometry',
	                   'stylers': {
	                       'color': '#fefefe'
	                   }
	               }, {
	                   'featureType': 'arterial',
	                   'elementType': 'geometry.fill',
	                   'stylers': {
	                       'color': '#fefefe'
	                   }
	               }, {
	                   'featureType': 'poi',
	                   'elementType': 'all',
	                   'stylers': {
	                       'visibility': 'off'
	                   }
	               }, {
	                   'featureType': 'green',
	                   'elementType': 'all',
	                   'stylers': {
	                       'visibility': 'off'
	                   }
	               }, {
	                   'featureType': 'subway',
	                   'elementType': 'all',
	                   'stylers': {
	                       'visibility': 'off'
	                   }
	               }, {
	                   'featureType': 'manmade',
	                   'elementType': 'all',
	                   'stylers': {
	                       'color': '#d1d1d1'
	                   }
	               }, {
	                   'featureType': 'local',
	                   'elementType': 'all',
	                   'stylers': {
	                       'color': '#d1d1d1'
	                   }
	               }, {
	                   'featureType': 'arterial',
	                   'elementType': 'labels',
	                   'stylers': {
	                       'visibility': 'off'
	                   }
	               }, {
	                   'featureType': 'boundary',
	                   'elementType': 'all',
	                   'stylers': {
	                       'color': '#fefefe'
	                   }
	               }, {
	                   'featureType': 'building',
	                   'elementType': 'all',
	                   'stylers': {
	                       'color': '#d1d1d1'
	                   }
	               }, {
	                   'featureType': 'label',
	                   'elementType': 'labels.text.fill',
	                   'stylers': {
	                       'color': '#999999'
	                   }
	               }]
	           }
	       },
	       series : [
	           {
	               name: '坐标及文献数量',
	               type: 'scatter',
	               coordinateSystem: 'bmap',
	               data: convertData(orgMap),
	               symbolSize: function (val) {
	            	   switch(val%10){
	            	   
	            	   }
	                   return val[2] / 100;
	               },
	               label: {
	                   normal: {
	                       formatter: '{b}',
	                       position: 'right',
	                       show: false
	                   },
	                   emphasis: {
	                       show: true
	                   }
	               },
	               itemStyle: {
	                   normal: {
	                       color: 'purple'
	                   }
	               }
	           },
	           {
	               name: 'Top 5',
	               type: 'effectScatter',
	               coordinateSystem: 'bmap',
	               data: convertData(orgMap.slice(0, 6)),
	               symbolSize: function (val) {
	                   return val[2] / 100;
	               },
	               showEffectOn: 'render',
	               rippleEffect: {
	                   brushType: 'stroke'
	               },
	               hoverAnimation: true,
	               label: {
	                   normal: {
	                       formatter: '{b}',
	                       position: 'right',
	                       show: true
	                   }
	               },
	               itemStyle: {
	                   normal: {
	                       color: 'purple',
	                       shadowBlur: 10,
	                       shadowColor: '#333'
	                   }
	               },
	               zlevel: 1
	           }
	       ]
	   };
	   var myChart = echarts.init(document.getElementById('org_distribute'));
	   $("#buttonMap").css("display","none");
	   myChart.setOption(option);
		
}