function loadUserChart(data,userChart){
	debugger;
	var obj = jQuery.parseJSON(data.ret);
	//X轴坐标值 
    var xs=[];
    //ys 
    var ys=[];    
    //grow
    var growY = [];

    if (obj != null && obj != undefined && obj != 'undefined') {

	    	growY.push(0);
	    	xs.push(obj.key[0][0]);
    		ys.push(obj.key[0][1]);
	    	for(var i=1; i<obj.key.length; i++){
	    		xs.push(obj.key[i][0]);
	    		ys.push(obj.key[i][1]);
	    		growY.push( year_to_year(obj.key[i][1],obj.key[i-1][1]) );
	    	}
	    	
	    	userChart.setOption({        //加载数据图表
        	   title: {
        	        text: '相关词文献下载量',
        	        subtext:'篇名包含<'+keyword+">的文献下载量趋势统计"
        	    },
        	   stillShowZeroSum:false,
        	   legend:{
        		   data:["用户下载量","下载量同比增长率"],
        		   formatter: function (name) {
        		        return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
        		    },
        		    tooltip: {
        		        show: true
        		    }
        	   },
        	   toolbox: {
        	        show: true,
        	        feature: {
        	            myTool1:{
        	            	show:true,
        	            	title:"更新数据",
        	            	 icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
        	            	 onclick:function(){
        	            		 publishChart.showLoading();
        	            		 getIndexData(keyword,'GetAttention','Academic');
        	            	 }
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
        	        start : obj.key.length>20?100-Percentage(20,obj.key.length):0,
        	        end : 100
        		   },
        	    {
        	    	type:"inside",
        	    	start :  obj.key.length>20?100-Percentage(20,obj.key.length):0,
           	        end : 100
        	    }
        	   ],
        	    tooltip: {
        	        trigger: 'axis',
        	        axisPointer: {
        	            type: 'shadow'
        	        }/*,
        	        formatter:"{b}年</br>" +
        	        		"{a0}:{c0}篇</br>{a1}:{c1}篇</br>{a2}:{c2}%</br>{a3}:{c3}%"*/
        	    },
               xAxis: {
            	   type:"category",
                   data: xs,
                   //boundaryGap:[]
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
   	         
   	             /*  boundaryGap:true*/
                 
               },{
            	   type: 'value',
                   scale: true,
                   position:"right",
                   name: '增长率(%)',
                   nameLocation:"center",
   	               nameGap:60,
	   	           axisLabel: {
	   	                formatter: '{value} %'
	   	            }
               }],
               series: [{
                   // 根据名字对应到相应的系列
                   name: '用户下载量',
                   type: 'bar',
                   yAxisIndex:0,
                   data: ys
               },
               {
            	   name:'下载量同比增长率',
            	   type:'line',
            	   yAxisIndex:1,
            	   data:growY
               }
               ]
           });
	    	userChart.hideLoading();    //隐藏加载动画
    }else{
    	userChart.hideLoading(); 
		toastr.warning("Failed!");
    	
    }
}

function loadWordEcharts(data,name){
	debugger;
	var info = "";
	if( name != ""){
		info = "学科-> "+name;
	}
	var obj = jQuery.parseJSON(data.ret);
	var ys = [];
	var xs = [];
	wordChart.hideLoading();
	for( var i=0; i<obj.key.length; i++){
		xs.push(obj.key[i]);
		var item = {};
		item.name = obj.key[i];
		item.value = obj.cnt[i]
		ys.push(item);
	}
	
	wordChart.hideLoading();
	wordChart.setOption( {
	    title: {
	        text: '相关词 Top 5 \n'+info,
	        subtext:'与<'+keyword+'>共现次数最多的关键词 top 5'
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter:'共现次数<br/>{b}:{c} ({d}%)'
	        
	    },
	    legend: {
	    	orient: 'horizontal',
	    	x:"center",
	    	bottom:"1",
	        data: xs
	    },

	    series: [
	        {
	        	radius: ['50%', '70%'],
	    	    avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '30',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	           
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            name: '共现次数',
	            type: 'pie',
	            data: ys
	        }
	    ]
	});
}





/**
 * 加载发文量图表
 * @param data 数据
 * @returns
 */
function loadPublishEcharts(data){
	debugger;
	var obj = jQuery.parseJSON(data.ret);
	//X轴坐标值 
    var xs=[];
    //ys 
    var ys=[];    
    var ys2=[];
    
    //grow
    var growY = [];
    var growY2 = [];

    

    if (obj != null && obj != undefined && obj != 'undefined') {
	    	
    		growY2.push( [ obj.foreign[0][0]+"" , 0 ]);
	    	for( var i=1; i<obj.foreign.length; i++){
	    		xs.push( obj.foreign[i][0] );
	    		var y = [];
	    		y.push( obj.foreign[i][0]+"" );
	    		y.push( obj.foreign[i][1] );
	    		ys2.push(y);
	    		var item = [];
	    		item.push( obj.foreign[i][0]+"" );
	    		item.push( year_to_year(obj.foreign[i][1],obj.foreign[i-1][1]) );
	    		growY2.push( item );
	    	}
	    	growY.push ( [ obj.key[0][0]+"" , 0 ] );
	    	for(var i=1; i<obj.key.length; i++){
	    		var y = [];
	    		y.push( obj.key[i][0]+"" );
	    		y.push( obj.key[i][1] );
	    		ys.push(y);
	    		var item = [];
	    		item.push( obj.key[i][0]+"" );
	    		item.push( year_to_year(obj.key[i][1],obj.key[i-1][1]) );
	    		growY.push( item );
	    	}
	    	
	    	/*for(var i=0; i<obj.key.length; i++){
	        	ys.push(obj.key[i][1]);
	        	if(i != 0){
	        		growY.push( year_to_year(ys[i],ys[i-1]) );
	        	}
	        }*/
	    	
	    	publishChart.setOption({        //加载数据图表
        	   title: {
        	        text: '相关词文献发文量',
        	        subtext:'篇名包含<'+keyword+">的文献发文量趋势统计"
        	    },
        	    stillShowZeroSum:false,
        	   legend:{
        		   data:["中文发文量","外文发文量","中文发文同比增长率","外文发文同比增长率"],
        		   formatter: function (name) {
        		        return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
        		    },
        		    tooltip: {
        		        show: true
        		    }
        		   
        	   },
        	   toolbox: {
        	        show: true,
        	        feature: {
        	            myTool1:{
        	            	show:true,
        	            	title:"更新数据",
        	            	 icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
        	            	 onclick:function(){
        	            		 publishChart.showLoading();
        	            		 getIndexData(keyword,'GetAttention','Academic');
        	            	 }
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
        	        start : 100-Percentage(16,obj.foreign.length),
        	        end : 100
        		   },
        	    {
        	    	type:"inside",
        	    	start : 100-Percentage(16,obj.foreign.length),
           	        end : 100
        	    }
        	   ],
        	    tooltip: {
        	        trigger: 'axis',
        	        axisPointer: {
        	            type: 'shadow'
        	        }/*,
        	        formatter:"{b}年</br>" +
        	        		"{a0}:{c0}篇</br>{a1}:{c1}篇</br>{a2}:{c2}%</br>{a3}:{c3}%"*/
        	    },
               xAxis: {
            	   type:"category",
                   data: xs,
                   //boundaryGap:[]
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
   	         
   	              /* boundaryGap:true*/
                 
               },{
            	   type: 'value',
                   scale: true,
                   position:"right",
                   name: '增长率(%)',
                   nameLocation:"center",
   	               nameGap:55,
	   	           axisLabel: {
	   	                formatter: '{value} %'
	   	            }
               }],
               series: [{
                   // 根据名字对应到相应的系列
                   name: '中文发文量',
                   type: 'bar',
                   yAxisIndex:0,
                   data: ys
               },
               {
                   // 根据名字对应到相应的系列
                   name: '外文发文量',
                   type: 'bar',
                   yAxisIndex:0,
                   data: ys2
               },
               {
            	   name:'中文发文同比增长率',
            	   type:'line',
            	   yAxisIndex:1,
            	   data:growY
               },
               {
            	   name:'外文发文同比增长率',
            	   type:'line',
            	   yAxisIndex:1,
            	   data:growY2
               }
               ]
           });
	    	publishChart.hideLoading();    //隐藏加载动画
    }else{
    	publishChart.hideLoading(); 
		toastr.warning("Failed!");
    	
    }
}
function loadMediaChart(data,mediaChart){
	debugger;
	var obj = jQuery.parseJSON(data.ret);
	//X轴坐标值 
    var xs=[];
    //ys 
    var ys=[];    
    //grow
    var growY = [];

    if (obj != null && obj != undefined && obj != 'undefined') {

	    	growY.push(0);
	    	xs.push(obj.key[0][0]);
    		ys.push(obj.key[0][1]);
	    	for(var i=1; i<obj.key.length; i++){
	    		xs.push(obj.key[i][0]);
	    		ys.push(obj.key[i][1]);
	    		growY.push( year_to_year(obj.key[i][1],obj.key[i-1][1]) );
	    	}
	    	
	    	mediaChart.setOption({        //加载数据图表
        	   title: {
        	        text: '相关词媒体发文量',
        	        subtext:'篇名包含<'+keyword+">的媒体发文量趋势统计"
        	    },
        	   stillShowZeroSum:false,
        	   legend:{
        		   data:["媒体发文量","媒体发文量同比增长率"],
        		   formatter: function (name) {
        		        return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
        		    },
        		    tooltip: {
        		        show: true
        		    }
        	   },
        	   toolbox: {
        	        show: true,
        	        feature: {
        	            myTool1:{
        	            	show:true,
        	            	title:"更新数据",
        	            	 icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
        	            	 onclick:function(){
        	            		 mediaChart.showLoading();
        	            		 getMediaData(mediaChart);
        	            	 }
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
        	        start : obj.key.length>20?100-Percentage(20,obj.key.length):0,
        	        end : 100
        		   },
        	    {
        	    	type:"inside",
        	    	start :  obj.key.length>20?100-Percentage(20,obj.key.length):0,
           	        end : 100
        	    }
        	   ],
        	    tooltip: {
        	        trigger: 'axis',
        	        axisPointer: {
        	            type: 'shadow'
        	        }/*,
        	        formatter:"{b}年</br>" +
        	        		"{a0}:{c0}篇</br>{a1}:{c1}篇</br>{a2}:{c2}%</br>{a3}:{c3}%"*/
        	    },
               xAxis: {
            	   type:"category",
                   data: xs,
                   //boundaryGap:[]
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
   	         
   	              /* boundaryGap:true*/
                 
               },{
            	   type: 'value',
                   scale: true,
                   position:"right",
                   name: '增长率(%)',
                   nameLocation:"center",
   	               nameGap:60,
	   	           axisLabel: {
	   	                formatter: '{value} %'
	   	            }
               }],
               series: [{
                   // 根据名字对应到相应的系列
                   name: '媒体发文量',
                   type: 'bar',
                   yAxisIndex:0,
                   data: ys
               },
               {
            	   name:'媒体发文量同比增长率',
            	   type:'line',
            	   yAxisIndex:1,
            	   data:growY
               }
               ]
           });
	    	mediaChart.hideLoading();    //隐藏加载动画
    }else{
    	mediaChart.hideLoading(); 
		toastr.warning("Failed!");
    	
    }
}
function loadCitedChart(data,citedChart){
	debugger;
	var obj = jQuery.parseJSON(data.ret);
	//X轴坐标值 
    var xs=[];
    //ys 
    var ys=[];    
    //grow
    var growY = [];

    if (obj != null && obj != undefined && obj != 'undefined') {

	    	growY.push(0);
	    	xs.push(obj.key[0][0]);
    		ys.push(obj.key[0][1]);
	    	for(var i=1; i<obj.key.length; i++){
	    		xs.push(obj.key[i][0]);
	    		ys.push(obj.key[i][1]);
	    		growY.push( year_to_year(obj.key[i][1],obj.key[i-1][1]) );
	    	}
	    	
	    	citedChart.setOption({        //加载数据图表
        	   title: {
        	        text: '相关词文献被引量',
        	        subtext:'篇名包含<'+keyword+">的文献被引量趋势统计"
        	    },
        	   stillShowZeroSum:false,
        	   legend:{
        		   data:["文献被引量","被引量同比增长率"],
        		   formatter: function (name) {
        		        return echarts.format.truncateText(name, 100, '14px Microsoft Yahei', '…');
        		    },
        		    tooltip: {
        		        show: true
        		    }
        	   },
        	   toolbox: {
        	        show: true,
        	        feature: {
        	            myTool1:{
        	            	show:true,
        	            	title:"更新数据",
        	            	 icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
        	            	 onclick:function(){
        	            		 citedChart.showLoading();
        	            		 getCitedData(citedChart);
        	            	 }
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
        	        start : obj.key.length>20?100-Percentage(20,obj.key.length):0,
        	        end : 100
        		   },
        	    {
        	    	type:"inside",
        	    	start :  obj.key.length>20?100-Percentage(20,obj.key.length):0,
           	        end : 100
        	    }
        	   ],
        	    tooltip: {
        	        trigger: 'axis',
        	        axisPointer: {
        	            type: 'shadow'
        	        }/*,
        	        formatter:"{b}年</br>" +
        	        		"{a0}:{c0}篇</br>{a1}:{c1}篇</br>{a2}:{c2}%</br>{a3}:{c3}%"*/
        	    },
               xAxis: {
            	   type:"category",
                   data: xs,
                   //boundaryGap:[]
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
   	         
   	              /* boundaryGap:true*/
                 
               },{
            	   type: 'value',
                   scale: true,
                   position:"right",
                   name: '增长率(%)',
                   nameLocation:"center",
   	               nameGap:60,
	   	           axisLabel: {
	   	                formatter: '{value} %'
	   	            }
               }],
               series: [{
                   // 根据名字对应到相应的系列
                   name: '文献被引量',
                   type: 'bar',
                   yAxisIndex:0,
                   data: ys
               },
               {
            	   name:'被引量同比增长率',
            	   type:'line',
            	   yAxisIndex:1,
            	   data:growY
               }
               ]
           });
	    	citedChart.hideLoading();    //隐藏加载动画
    }else{
    	citedChart.hideLoading(); 
		toastr.warning("Failed!");
    }
}