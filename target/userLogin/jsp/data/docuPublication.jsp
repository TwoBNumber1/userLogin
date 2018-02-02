<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

    <title>Analysis - </title>

    <meta name="keywords" content="H+后台主题,后台bootstrap框架,会员中心主题,后台HTML,响应式后台">
    <meta name="description" content="H+是一个完全响应式，基于Bootstrap3最新版本开发的扁平化主题，她采用了主流的左右两栏式布局，使用了Html5+CSS3等现代技术">
 	 <!-- Data Tables -->
    <link href="<%=path %>/css/plugins/dataTables/dataTables.bootstrap.css" rel="stylesheet">
 	<link href="<%=path %>/css/plugins/toastr/toastr.min.css" rel="stylesheet">
	<link href=" <%=path %>/css/plugins/sweetalert/sweetalert.css" rel="stylesheet">
    <link rel="shortcut icon" href="<%=path %>/img/favicon.ico"> 
    <link href="<%=path %>/css/bootstrap.min.css?v=3.3.5" rel="stylesheet">
    <link href="<%=path %>/css/font-awesome.min.css?v=4.4.0" rel="stylesheet">
    <link href="<%=path %>/css/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="<%=path %>/css/animate.min.css" rel="stylesheet">
    <link href="<%=path %>/css/style.min.css?v=4.0.0" rel="stylesheet">
    <base target="_blank">

	<title>文献发表量</title>
 
</head>
<body>
	<div class="row">
		<div class="col-sm-8" id="publishCount" style="height:450px;border:1px solid #ccc;padding:10px;"></div>
		<div class="col-sm-4">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <span class="label label-primary pull-right">今天</span>
                        <h5>访客</h5>
                    </div>
                    <div class="ibox-content">
                        <h1 class="no-margins">22 285,400</h1>
                        <div class="stat-percent font-bold text-navy">20% <i class="fa fa-level-up"></i>
                        </div>
                        <small>新订单</small>
                    </div>
                </div>
            </div>
	</div>
	
	<div class="row">
		<div class="col-sm-8">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>基本 <small>分类，查找</small></h5>
                        <div class="ibox-tools">
                            <a class="collapse-link">
                                <i class="fa fa-chevron-up"></i>
                            </a>
                            <a class="dropdown-toggle" data-toggle="dropdown" href="table_data_tables.html#">
                                <i class="fa fa-wrench"></i>
                            </a>
                            <ul class="dropdown-menu dropdown-user">
                                <li><a href="table_data_tables.html#">选项1</a>
                                </li>
                                <li><a href="table_data_tables.html#">选项2</a>
                                </li>
                            </ul>
                            <a class="close-link">
                                <i class="fa fa-times"></i>
                            </a>
                        </div>
                    </div>
                    <div class="ibox-content">

                        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper form-inline" role="grid"><div class="row"><div class="col-sm-6"><div class="dataTables_length" id="DataTables_Table_0_length"><label>每页 <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" class="form-control input-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> 条记录</label></div></div><div class="col-sm-6"><div id="DataTables_Table_0_filter" class="dataTables_filter"><label>查找：<input type="search" class="form-control input-sm" aria-controls="DataTables_Table_0"></label></div></div></div><table class="table table-striped table-bordered table-hover dataTables-example dataTable" id="DataTables_Table_0" aria-describedby="DataTables_Table_0_info">
                            <thead>
                                <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-sort="ascending" aria-label="渲染引擎：激活排序列升序" style="width: 179px;">渲染引擎</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="浏览器：激活排序列升序" style="width: 318px;">浏览器</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="平台：激活排序列升序" style="width: 293px;">平台</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="引擎版本：激活排序列升序" style="width: 125px;">引擎版本</th><th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" aria-label="CSS等级：激活排序列升序" style="width: 128px;">CSS等级</th></tr>
                            </thead>
                            <tbody>
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                            <tr class="gradeA odd">
                                    <td class="sorting_1">Gecko</td>
                                    <td class=" ">Firefox 1.0</td>
                                    <td class=" ">Win 98+ / OSX.2+</td>
                                    <td class="center ">1.7</td>
                                    <td class="center ">A</td>
                                </tr><tr class="gradeA even">
                                    <td class="sorting_1">Gecko</td>
                                    <td class=" ">Firefox 1.5</td>
                                    <td class=" ">Win 98+ / OSX.2+</td>
                                    <td class="center ">1.8</td>
                                    <td class="center ">A</td>
                                </tr><tr class="gradeA odd">
                                    <td class="sorting_1">Gecko</td>
                                    <td class=" ">Firefox 2.0</td>
                                    <td class=" ">Win 98+ / OSX.2+</td>
                                    <td class="center ">1.8</td>
                                    <td class="center ">A</td>
                                </tr><tr class="gradeA even">
                                    <td class="sorting_1">Gecko</td>
                                    <td class=" ">Firefox 3.0</td>
                                    <td class=" ">Win 2k+ / OSX.3+</td>
                                    <td class="center ">1.9</td>
                                    <td class="center ">A</td>
                                </tr><tr class="gradeA odd">
                                    <td class="sorting_1">Gecko</td>
                                    <td class=" ">Camino 1.0</td>
                                    <td class=" ">OSX.2+</td>
                                    <td class="center ">1.8</td>
                                    <td class="center ">A</td>
                                </tr><tr class="gradeA even">
                                    <td class="sorting_1">Gecko</td>
                                    <td class=" ">Camino 1.5</td>
                                    <td class=" ">OSX.3+</td>
                                    <td class="center ">1.8</td>
                                    <td class="center ">A</td>
                                </tr><tr class="gradeA odd">
                                    <td class="sorting_1">Gecko</td>
                                    <td class=" ">Netscape 7.2</td>
                                    <td class=" ">Win 95+ / Mac OS 8.6-9.2</td>
                                    <td class="center ">1.7</td>
                                    <td class="center ">A</td>
                                </tr><tr class="gradeA even">
                                    <td class="sorting_1">Gecko</td>
                                    <td class=" ">Netscape Browser 8</td>
                                    <td class=" ">Win 98SE+</td>
                                    <td class="center ">1.7</td>
                                    <td class="center ">A</td>
                                </tr><tr class="gradeA odd">
                                    <td class="sorting_1">Gecko</td>
                                    <td class=" ">Netscape Navigator 9</td>
                                    <td class=" ">Win 98+ / OSX.2+</td>
                                    <td class="center ">1.8</td>
                                    <td class="center ">A</td>
                                </tr><tr class="gradeA even">
                                    <td class="sorting_1">Gecko</td>
                                    <td class=" ">Mozilla 1.0</td>
                                    <td class=" ">Win 95+ / OSX.1+</td>
                                    <td class="center ">1</td>
                                    <td class="center ">A</td>
                                </tr></tbody>
                            <tfoot>
                                <tr><th rowspan="1" colspan="1">渲染引擎</th><th rowspan="1" colspan="1">浏览器</th><th rowspan="1" colspan="1">平台</th><th rowspan="1" colspan="1">引擎版本</th><th rowspan="1" colspan="1">CSS等级</th></tr>
                            </tfoot>
                        </table><div class="row"><div class="col-sm-6"><div class="dataTables_info" id="DataTables_Table_0_info" role="alert" aria-live="polite" aria-relevant="all">显示 1 到 10 项，共 57 项</div></div><div class="col-sm-6"><div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate"><ul class="pagination"><li class="paginate_button previous disabled" aria-controls="DataTables_Table_0" tabindex="0" id="DataTables_Table_0_previous"><a href="#">上一页</a></li><li class="paginate_button active" aria-controls="DataTables_Table_0" tabindex="0"><a href="#">1</a></li><li class="paginate_button " aria-controls="DataTables_Table_0" tabindex="0"><a href="#">2</a></li><li class="paginate_button " aria-controls="DataTables_Table_0" tabindex="0"><a href="#">3</a></li><li class="paginate_button " aria-controls="DataTables_Table_0" tabindex="0"><a href="#">4</a></li><li class="paginate_button " aria-controls="DataTables_Table_0" tabindex="0"><a href="#">5</a></li><li class="paginate_button " aria-controls="DataTables_Table_0" tabindex="0"><a href="#">6</a></li><li class="paginate_button next" aria-controls="DataTables_Table_0" tabindex="0" id="DataTables_Table_0_next"><a href="#">下一页</a></li></ul></div></div></div></div>

                    </div>
                </div>
            </div>
	   	<div class="col-sm-4" id="wordCount" style="height:450px;border:1px solid #ccc;padding:10px;"></div>
	</div>
 
  
</body>
    <script src="<%=path %>/js/jquery.min.js?v=2.1.4"></script>
    <script src="<%=path %>/js/jquery-ui-1.10.4.min.js"></script>
    <script src="<%=path %>/js/bootstrap.min.js?v=3.3.5"></script>
    <script src="<%=path %>/js/content.min.js?v=1.0.0"></script>
    <script src="<%=path %>/js/plugins/iCheck/icheck.min.js"></script>
    <script src="<%=path %>/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
    <script src="<%=path %>/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
    <script src="<%=path %>/js/plugins/flot/jquery.flot.js"></script>
    <script src="<%=path %>/js/plugins/flot/jquery.flot.tooltip.min.js"></script>
    <script src="<%=path %>/js/plugins/flot/jquery.flot.resize.js"></script>
    <script src="<%=path %>/js/echarts/echarts.js"></script>
    <script src="<%=path %>/js/echarts/vintage.js"></script>
    <script src="<%=path %>/js/echarts/wonderland.js"></script>
    <script src="<%=path %>/js/data/getIndexData.js"></script>
     <script src="<%=path %>/js/data/show_echarts.js"></script>
    <script src="<%=path %>/js/plugins/sweetalert/sweetalert.min.js"></script>
        <script src="<%=path %>/js/plugins/dataTables/jquery.dataTables.js"></script>
    <script src="<%=path %>/js/plugins/dataTables/dataTables.bootstrap.js"></script>
    <script>
        $(document).ready(function(){var d1=[[1262304000000,6],[1264982400000,3057],[1267401600000,20434],[1270080000000,31982],[1272672000000,26602],[1275350400000,27826],[1277942400000,24302],[1280620800000,24237],[1283299200000,21004],[1285891200000,12144],[1288569600000,10577],[1291161600000,10295]];var d2=[[1262304000000,5],[1264982400000,200],[1267401600000,1605],[1270080000000,6129],[1272672000000,11643],[1275350400000,19055],[1277942400000,30062],[1280620800000,39197],[1283299200000,37000],[1285891200000,27000],[1288569600000,21000],[1291161600000,17000]];var data1=[{label:"Data 1",data:d1,color:"#17a084"},{label:"Data 2",data:d2,color:"#127e68"}];$.plot($("#flot-chart1"),data1,{xaxis:{tickDecimals:0},series:{lines:{show:true,fill:true,fillColor:{colors:[{opacity:1},{opacity:1}]},},points:{width:0.1,show:false},},grid:{show:false,borderWidth:0},legend:{show:false,}});var data2=[{label:"Data 1",data:d1,color:"#19a0a1"}];$.plot($("#flot-chart2"),data2,{xaxis:{tickDecimals:0},series:{lines:{show:true,fill:true,fillColor:{colors:[{opacity:1},{opacity:1}]},},points:{width:0.1,show:false},},grid:{show:false,borderWidth:0},legend:{show:false,}});var data3=[{label:"Data 1",data:d1,color:"#fbbe7b"},{label:"Data 2",data:d2,color:"#f8ac59"}];$.plot($("#flot-chart3"),data3,{xaxis:{tickDecimals:0},series:{lines:{show:true,fill:true,fillColor:{colors:[{opacity:1},{opacity:1}]},},points:{width:0.1,show:false},},grid:{show:false,borderWidth:0},legend:{show:false,}});$(".i-checks").iCheck({checkboxClass:"icheckbox_square-green",radioClass:"iradio_square-green",});$(".todo-list").sortable({placeholder:"sort-highlight",handle:".handle",forcePlaceholderSize:true,zIndex:999999}).disableSelection();var mapData={"US":498,"SA":200,"CA":1300,"DE":220,"FR":540,"CN":120,"AU":760,"BR":550,"IN":200,"GB":120,"RU":2000};$("#world-map").vectorMap({map:"world_mill_en",backgroundColor:"transparent",regionStyle:{initial:{fill:"#e4e4e4","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":0}},series:{regions:[{values:mapData,scale:["#1ab394","#22d6b1"],normalizeFunction:"polynomial"}]},})});
    </script>
       <script src="<%=path %>/js/plugins/toastr/toastr.min.js"></script>
    <script type="text/javascript"> var ctx = "<%=path%>";</script>
    <script type="text/javascript" src="http://tajs.qq.com/stats?sId=9051096" charset="UTF-8"></script>
	<script type="text/javascript">
   
    
    
	</script>
</html>