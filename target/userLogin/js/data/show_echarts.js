
var publishChart = echarts.init(document.getElementById('publishCount'),"wonderland");
publishChart.showLoading(); 

var wordChart = echarts.init(document.getElementById('wordCount'),"wonderland");
wordChart.showLoading();
// 显示标题，图例和空的坐标轴
var keyword = getUrlParam("keyword");




function loadWordEcharts(data){
	debugger;
		var obj = jQuery.parseJSON(data.ret);
		var ys = []; 
		var xs = [];
		wordChart.hideLoading();
		for( var i=0; i<obj.key.length; i++){
			xs.push(obj.key[i]);
			ys.push(obj.cnt[i]);
		}
	
	wordChart.hideLoading();
	wordChart.setOption( {
	    title: {
	        text: '相关词',
	        subtext: '与<'+keyword+'>共现次数最多的关键词'
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['共现次数']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'value',
	        boundaryGap: [0, 0.01]
	    },
	    yAxis: {
	        type: 'category',
	        data:xs
	    },
	    series: [
	        {
	            name: '共现次数',
	            type: 'bar',
	            data: ys
	        }
	    ]
	});
}

function loadPublishEcharts(data){
    debugger;
    var obj = jQuery.parseJSON(data.ret);
    //X轴坐标值 
    var xs=[];
    //ys 
    var ys=[];    
    var ys2=[];

    if (obj != null && obj != undefined && obj != 'undefined') {
	    	for(var i=0; i<obj.key.length; i++){
	    		xs.push(obj.key[i][0]);
	        	ys.push(obj.key[i][1]);
	        }
	    	for( var i=0; i<obj.foreign.length; i++){
	    		
	    		ys2.push(obj.foreign[i][1]);
	    	}
	    	publishChart.hideLoading();    //隐藏加载动画
	    	publishChart.setOption({        //加载数据图表
        	   title: {
        	        text: '相关词文献发文量',
        	        subtext:'关键词：'+keyword
        	    },
        	   legend:{
        		   data:["中文发文量","外文发文量"]
        		   
        	   },
        	   dataZoom : {
        	        show : true,
        	        realtime : true,
        	        start : 85,
        	        end : 100
        	    },
        	    tooltip: {
        	        trigger: 'axis',
        	        axisPointer: {
        	            type: 'cross'
        	        }
        	    },
               xAxis: {
                   data: xs
               },
               yAxis:{
            	   
               },
               series: [{
                   // 根据名字对应到相应的系列
                   name: '中文发文量',
                   type: 'line',
                   data: ys
               },
               {
                   // 根据名字对应到相应的系列
                   name: '外文发文量',
                   type: 'line',
                   data: ys2
               },
               ]
           });
    }else{
    	myChart.hideLoading(); 
		toastr.warning("Failed!");
    	
    }
}


