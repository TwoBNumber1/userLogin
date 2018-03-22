function loadDistributeMap(){
	var myChart = echarts.init(document.getElementById('school_distribute'));
	myChart.showLoading();
	var data = [
        {name: '中国地质大学(北京)', value: 31595},
        {name: '同济大学', value: 30168},
        {name: '中国矿业大学(北京)', value: 28302},
        {name: '中国地质大学(武汉)', value: 27584},
        {name: '中国矿业大学', value: 20771},
        {name: '华北电力大学', value: 20738},
        {name: '中国石油大学(华东)', value: 18063},
        {name: '西南石油大学', value: 15223},
        {name: '成都理工大学', value: 15016},
        {name: '中国石油大学(北京)', value: 15001},
        {name: '长安大学', value: 13700},
        {name: '清华大学', value: 13586},
        {name: '西北工业大学', value: 13030},
        {name: '北京科技大学', value: 12816},
        {name: '南京中医药大学', value: 12649},
        {name: '同济大学', value: 12348},
        {name: '中国农业大学', value: 12346},
        {name: '江南大学', value: 12194},
        {name: '北京航空航天大学', value: 11950},
        {name: '东南大学', value: 11936},
        {name: '华南理工大学', value: 11760},
        {name: '西安建筑科技大学', value: 11746},
        {name: '哈尔滨工业大学', value: 11644},
        {name: '华中科技大学', value: 11530},
        {name: '中国传媒大学', value: 11519},
        {name: '北京师范大学', value: 11506},
        {name: '西安电子科技大学', value: 11446},
        {name: '北京中医药大学', value: 11441},
        {name: '重庆大学', value: 11343},
        {name: '华东师范大学', value: 10895},
        {name: '山东中医药大学', value: 10874},
        {name: '东华大学', value: 10671},
        {name: '南京航空航天大学', value: 10303},
        {name: '中国地质大学(北京)', value: 10203},
        {name: '天津中医药大学', value: 10155},
        {name: '北京林业大学', value: 10086},
        {name: '长江大学', value: 9997},
        {name: '清华大学', value: 9946},
        {name: '武汉大学', value: 9932},
        {name: '北京体育大学', value: 9817}
   ];
   var geoCoordMap = {
		    '中国地质大学(北京)': [116.348923,39.991346],
	        '中国矿业大学(北京)': [116.261687,40.152646],
	        '中国地质大学(武汉)': [114.398086,30.530776],
	        '中国矿业大学':[117.204410,34.216319],
	        '华北电力大学':[116.333580,39.988014],
	        '中国石油大学(华东)':[118.543442,37.465363],
	        '西南石油大学':[104.183563,30.821791],
	        '成都理工大学':[104.147257,30.674912],
	        '中国石油大学(北京)':[116.247681,40.218418],
	        '长安大学':[108.959464,34.233499],
	        '清华大学':[116.326759,40.003304],
	        '西北工业大学':[108.904854,34.241802],
	        '北京科技大学':[116.359072,39.990221],
	        '南京中医药大学':[118.945416,32.101878],
	        '同济大学':[121.210861,31.288713],
	        '中国农业大学':[116.346695,39.991074],
	        '江南大学':[120.272359,31.475281],
	        '北京航空航天大学':[116.347313,39.981771],
	        '东南大学':[120.376091,31.482067],
	        '华南理工大学':[113.367149,23.110704],
	        '西安建筑科技大学':[108.966933,34.237085],
	        '哈尔滨工业大学':[126.632461,45.743237],
	        '华中科技大学':[114.434479,30.511049],
	        '中国传媒大学':[116.556587,39.912792],
	        '北京师范大学':[116.365772,39.961557],
	        '西安电子科技大学':[108.916752,34.230859],
	        '北京中医药大学':[116.428174,39.971334],
	        '重庆大学':[106.468822,29.564916],
	        '华东师范大学':[121.390923,31.230452],
	        '山东中医药大学':[116.801628,36.560726],
	        '东华大学':[121.210938,31.059938],
	        '南京航空航天大学':[118.820289,32.035021],
	        '天津中医药大学':[117.165622,39.116559],
	        '北京林业大学':[116.347459,40.005875],
	        '长江大学':[112.212776,30.334261],
	        '武汉大学':[114.365248,30.537860],
	        '北京体育大学':[116.318919,40.024420],
       '大庆':[125.03,46.58]
   };

   var convertData = function (data) {
       var res = [];
       for (var i = 0; i < data.length; i++) {
           var geoCoord = geoCoordMap[data[i].name];
           if (geoCoord) {
               res.push({
                   name: data[i].name,
                   value: geoCoord.concat(data[i].value)
               });
           }
       }
       return res;
   };

   option = {
       title: {
           text: '院校最高发文量及对应学科 - 百度地图',
           subtext: 'data from cnki.net',
           sublink: 'cnki.net',
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
               name: 'pm2.5',
               type: 'scatter',
               coordinateSystem: 'bmap',
               data: convertData(data),
               symbolSize: function (val) {
                   return val[2] / 1100;
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
                       color: 'rgb(99, 198, 174)'
                   }
               }
           },
           {
               name: 'Top 5',
               type: 'effectScatter',
               coordinateSystem: 'bmap',
               data: convertData(data.sort(function (a, b) {
                   return b.value - a.value;
               }).slice(0, 6)),
               symbolSize: function (val) {
                   return val[2] / 1100;
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
                       color:'rgb(99, 198, 174)',
                       shadowBlur: 10,
                       shadowColor: '#333'
                   }
               },
               zlevel: 1
           }
       ]
   };
   myChart.hideLoading();
   myChart.setOption(option);
	
}