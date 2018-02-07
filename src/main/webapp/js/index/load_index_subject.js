var subjectChart = echarts.init(document.getElementById('subjectCount'),"wonderland");
subjectChart.showLoading();

var orgChart = echarts.init(document.getElementById('orgCount'),"wonderland");
orgChart.showLoading();

function getSubject(){
	$.ajax({
		type:'GET',
		url: ctx+'/data/getIndexData',
		dataType: 'json',
		data:{"topSearch":keyword,
			"resultType":"GetSubject",
			"numType":""
		},
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
					loadSubject(ret.data);
			}
				
		}
	});
}

function getOrgan(){
	$.ajax({
		type:'GET',
		url: ctx+'/data/getIndexData',
		dataType: 'json',
		data:{"topSearch":keyword,
			"resultType":"GetInstitution",
			"numType":""
		},
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
					loadOrgan(ret.data);
			}
				
		}
	});
}

function loadOrgan(data){
	debugger;
	var obj = jQuery.parseJSON(data.ret);
	//X轴坐标值 
    var xs=[];
    //ys 
    var ys=[];    
    //grow
    if (obj != null && obj != undefined && obj != 'undefined') {
    		debugger;
	    	for(var i=0; i<obj.key.length; i++){
	    	/*	param.name = obj.show[i][0];
	    		param.value = obj.show[i][1];*/
	    		xs.push(obj.key[i]);
	    		ys.push(obj.cnt[i]);
	    	}
	    	
	    	orgChart.setOption({        //加载数据图表
        	   title: {
        	        text: '机构分布',
        	        subtext:'检索词<'+keyword+">在机构中的分布情况"
        	    },
        	   stillShowZeroSum:false,
        	   legend:{
        		   data:["发文数"],
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
        	            		 orgChart.showLoading();
        	            		 getOrgan();
        	            	 }
        	            },
        	            dataView: {readOnly: false},
        	            restore: {},
        	            saveAsImage: {}
        	        
        	        }
        	    },
        	
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
                   axisLabel: {  
	            	   interval:0,  
	            	   rotate:-20  
	            	}  
                   //boundaryGap:[]
               },
               yAxis:[{
                   type: 'value',
                   scale: true,
                   name: '文献量(篇)',
                   nameLocation:"center",
   	               nameGap:20,
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
               series: [{
                   // 根据名字对应到相应的系列
                   name: '发文数',
                   type: 'bar',
                   yAxisIndex:0,
                   data: ys,
                   barGap:'100%'
               }
               ]
           });
	    	orgChart.hideLoading();    //隐藏加载动画
    }else{
    	orgChart.hideLoading(); 
		toastr.warning("Failed!");
    	
    }
}

var sub_data = [];
var sub_code;
function loadSubject(data){
	debugger;
	var obj = jQuery.parseJSON(data.ret);
	//var code 
	subjectChart.hideLoading();
	sub_data = [];
	for( var i=0; i<obj.show.length; i++ ){
		var param = {};
		param.name = obj.show[i][0];
		param.value = obj.show[i][1];
	
		sub_data.push(param);
		//legend[i] = data[i].name;
 	}
	sub_code = obj.code;
	debugger;
	subjectChart.setOption({
	    title : {
	    	top:20,
	        text: '学科分布',
	        subtext: '篇名包含<'+keyword+'>的文献在不同学科中的分布',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	 /*   legend: {
	        x : 'center',
	        y : 'bottom',
	        data:legend
	    },*/
	    toolbox: {
	        show : true,
	        top:20,
	        feature : {
	        	 myTool1:{
 	            	show:true,
 	            	title:"更新数据",
 	            	 icon: 'path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891',
 	            	 onclick:function(){
 	            		 orgChart.showLoading();
 	            		 getSubject();
 	            	 }
 	            },
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {
	                show: true,
	                type: ['pie', 'funnel']
	            },
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    series : [
	    	   {
		            name:'学科分布',
		            type:'pie',
		            selectedMode: 'single',
		            selectedOffset: 20,
		            radius : [30, 110],
		            center : ['50%', '50%'],
		            roseType : 'area',
		            data:sub_data
		        }
	     ]
	});
	

}

subjectChart.on('click', function (params) {
    //点击被选中
    if( params.data.selected ){
    	//console.log(params);
    	var name = params.data.name;
    	//获取对应下标
    	for( var i=0; i<10; i++){
    		if( name === sub_data[i].name ) {
    			
    			console.log(sub_code[i]);
    			updateChart(sub_code[i],name);
    			break;
    		}
    	}
    	//刷新文献数据 关键词数据
    }
});


function updateChart(code,name){
	wordChart.showLoading();
	$.ajax({
		type:'GET',
		url: ctx+'/data/getIndexData',
		dataType: 'json',
		
		data:{"topSearch":keyword,
			"resultType":"GetTotalRelevanceWordsForCht",
			"numType":code
		},
		async:true,
		success: function(ret){
			debugger;
			if(ret.status === 0 && ret.data != null){
				//加载关键词条形图
				loadWordEcharts(ret.data,name);
			}else{
				wordChart.hideLoading();
				toastr.error("FAILED：" + ret.info);
			}
		}
	});
}