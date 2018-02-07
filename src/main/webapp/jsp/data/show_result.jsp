<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">  
    <title>Infusion WP Theme</title>
    <!-- Bootstrap -->
    
    <link href="<%=path %>/css/plugins/toastr/toastr.min.css" rel="stylesheet">
    <link href="<%=path %>/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=path %>/css/tipso.min.css" rel="stylesheet">
    <link href="<%=path %>/css/font-awesome.min.css?v=4.4.0" rel="stylesheet">
    <link rel="stylesheet" href="<%=path %>/css/styles.css">
    <link rel="stylesheet" href="<%=path %>/css/queries.css">
    <link href=" <%=path %>/css/plugins/sweetalert/sweetalert.css" rel="stylesheet">
<!--     <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet"> -->
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- H+部分 -->
   <%--  <link href="<%=path %>/css/bootstrap.min.css?v=3.3.5" rel="stylesheet"> --%>
    <link href="<%=path %>/css/font-awesome.min.css?v=4.4.0" rel="stylesheet">
    <link href="<%=path %>/css/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="<%=path %>/css/animate.min.css" rel="stylesheet">
    <link href="<%=path %>/css/style.min.css?v=4.0.0" rel="stylesheet">
    
<style type="text/css">
	.tab_a_class{
	    height: 50px;
	 text-align:  center;
	 line-height: 30px;
	 font-size: 18;
	  
	}
	
	body{
	 	backgroud-color:#f8f9f9
	}
</style>
</head>
 <body>
	<header class="clearfix" style="
    position:  fixed;
    width: 100%;
    z-index: 9999;">
	    <div class="logo col-md-3">
	    	<h2 class="logo-text">
	 			<i class="fa fa-area-chart"></i>数据可视化分析
	 		</h2>
	    </div>
	    <nav class="clearfix">
            <ul class="clearfix">
                <li><a href="#" class="frist">首页</a></li>
                <li><a href="index3">历史查询</a></li>
                <li><a href="#" class="last">关于我们</a></li>
            </ul>
        </nav>
        <div class="pullcontainer">
        	<a href="#" id="pull"><i class="fa fa-bars fa-2x"></i></a>
        </div>     
	</header>
	<div style="padding-top:65px"></div>
	<div class="text-inter" style="border-top:solid 1px #e3e3e3">
		<div class="container">
			<div class="row">
				<div class="col-md-2"></div>
				<div class="col-md-8">
					
					<div class="input-group">
		               <input type="text" placeholder="输入文献关键词" id="search" name="search" class="form-control input-lg">
		               <div class="input-group-btn">
		                   <button id="searchBtn" class="btn btn-lg btn-primary" type="button">
		                       搜索
		                   </button>
		               </div>
		            </div>
				</div>
			</div>
		</div>
	</div>
	<!-- 导航菜单  begin -->
	<div class="text-inter">
		<div class="container">
			<div class="row">
				<ul id="all-tab" class="nav nav-tabs">
				  <li class="active"><a  data-toggle="tab" href="#index-data">指数分析</a></li>
				  <li><a href="#caculate-data">计量可视化</a></li>
				  <li><a href="#source-distribute">资源分布</a></li>
				  <li><a href="#">VB.Net</a></li>
				  <li><a href="#">Java</a></li>
				  <li><a href="#">PHP</a></li>
				</ul>
<!-- 导航菜单 end   -->			
			<div class="tab-content">
					<div id="index-data" class="tab-pane active">
						<div class="panel-body">
							<!-- 指数分析选项卡 begin -->
							<div class="tabs-container" style="
							    padding-left: 15px;
							    margin: auto;
							    width: 1150px;
							    background-color: #F5F5F5;">
								
						       <div class="tabs-left">
						       	<!-- 选项卡菜单 begin -->
						           <ul id="count-tab" class="nav nav-tabs">
						               <li class="active"><a  class="tab_a_class" href="#publish-content"  
							               data-tipso="篇名包含此关键词的文献发文量趋势"
							               aria-expanded="false">学术关注度</a>
						               </li>
						               <li class=""><a class="tab_a_class" href="#user-content" 
							               data-tipso="篇名包含此关键词的文献下载量趋势"
							               aria-expanded="true">用户关注度</a>
						               </li>
						                 <li class=""><a class="tab_a_class" href="#cited-content" 
							                 data-tipso="篇名包含此关键词的文献被引量趋势"
							                 aria-expanded="true">学术传播度</a>
						               </li>
						                 <li class=""><a class="tab_a_class" href="#media-content" 
						                  data-tipso="篇名包含此关键词的报纸文献发文量趋势"
						                 aria-expanded="true">媒体关注度</a>
						               </li>
						           </ul>
						        <!-- 选项卡菜单  end -->
						        <!-- 选项卡面板 begin-->
						           <div id="count-content"class="tab-content">
						               <div id="publish-content" class="tab-pane active">
						                   <div class="panel-body">
						                   	<div class="" id="publishCount" style="height:550px;"></div>
						                   </div>
						               </div>
						               <div id="user-content" class="tab-pane">
						                   <div class="panel-body">
						                   	<div class="" id="userCount" style="height:550px;"></div>
						                   </div>
						               </div>
						                    <div id="cited-content" class="tab-pane">
						                   <div class="panel-body">
						                   	<div class="" id="citedCount" style="height:550px;"></div>
						                   </div>
						               </div>
						               <div id="media-content" class="tab-pane">
						                   <div class="panel-body">
						                   	<div class="" id="mediaCount" style="height:550px;"></div>
						                   </div>
						               </div>
						           </div>
						        <!-- 选项卡面板 end  -->
						       </div>
						   	</div>
						    <!-- 关键词共现条形图 关注文献表格 -->
						    <div class="text-inter">
									    <div class="container">
										      <div class="row">
											        <div class="col-md-3" id="wordCount" style="height:450px;border:1px solid #ccc;padding:20px"></div>  
										      		<div class="col-md-9" id="attention_table" 
										      		data-tipso="研究者关注的热点文献"
										      		style="
										      			height:450px;
										      			border:1px solid #ccc;
										      			padding:0 0 0 0;
										      			overflow:auto">
										      		</div>  
										      </div>
								   		</div>
								   		<div class="container">
								   		   	<div class="row">
											        <div class="col-md-6" id="orgCount" style="height:450px;border:1px solid #ccc;padding:20px"></div>  
										      		<div class="col-md-6" id="subjectCount" 
										      		style="
										      			height:450px;
										      			border:1px solid #ccc;
										      			padding:0 0 0 0;
										      			overflow:auto">
										      		</div>  
										      </div>
								   		</div>
						    </div>
						    <!-- 指数分析选项卡 end -->
					    </div>
					</div>
					<div id="caculate-data" class="tab-pane">
						<div class="panel-body">
						<div class="text-inter">
							<div class="container">
									<div class="row">
										<div class="col-sm-8" id="wordAllCount" style="height:400px;border:1px solid #ccc;padding:10px;"></div>
										<div class="col-sm-4" id="wordCloud" style="height:400px;border:1px solid #ccc;padding:10px;"></div>
									</div>
								</div>
							</div>
							<div class="text-inter">
								<div class="container">
									<div class="row">
										<div class="col-sm-12" id="matrix" style="height:600px;border:1px solid #ccc;padding:10px;"></div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					<div id="source-distribute" class="tab-pane">
						<div class="panel-body">
						<div class="text-inter">
							<div class="container">
									<div class="row">
										<div class="col-sm-8" id="wordAllCount" style="height:400px;border:1px solid #ccc;padding:10px;"></div>
										<div class="col-sm-4" id="wordCloud" style="height:400px;border:1px solid #ccc;padding:10px;"></div>
									</div>
								</div>
							</div>
							<div class="text-inter">
								<div class="container">
									<div class="row">
										<div class="col-sm-12" id="matrix" style="height:600px;border:1px solid #ccc;padding:10px;"></div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					
				
				
				</div>
			</div>
		
	    </div>
    </div>
   
 
    <div class="shadow"></div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <h2>INFUSION</h2>
          </div>
          <div class="col-md-5">
            <p>Nam mi enim, auctor non ultricies a, fringilla eu risus. Praesent vitae lorem et elit tincidunt accumsan suscipit eu libero. Maecenas diam est, venenatis vitae dui in, vestibulum mollis arcu. Donec eu nibh tincidunt, dapibus sem eu, aliquam dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum consectetur commodo eros, vitae laoreet lectus aliq</p>
          </div>
          <div class="col-md-3">
            <p>aliquam dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum consectetur commodo eros, vitae laoreet lectus aliq</p>
          </div>
          <div class="col-md-2">
            <ul class="footer-links">
              <li><a href="#">List One</a></li>
              <li><a href="#">Page Two</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Work</a></li>
              <li><a href="#">Contact Me</a></li>
            </ul>
          </div>
        </div>
      </div>  
    </footer>
    <script src="<%=path %>/js/echarts/echarts-wordcloud.min.js"></script>
    <script src="<%=path %>/js/jquery-1.8.3.min.js"></script>
    <script src="<%=path %>/js/bootstrap.min.js"></script>
    <script src="<%=path %>/js/scripts.js"></script>
    <script src="<%=path %>/js/unslider.min.js"></script>
    <script src="<%=path %>/js/echarts/echarts.js"></script>
    <script src="<%=path %>/js/echarts/macarons.js"></script>
    <script src="<%=path %>/js/echarts/wonderland.js"></script>
    <script src="<%=path %>/js/plugins/dataTables/jquery.dataTables.min.js"></script>
    <script src="<%=path %>/js/data/util.js"></script>
    <script src="<%=path %>/js/plugins/toastr/toastr.min.js"></script>
    <script src="<%=path %>/js/index/show_result.js"></script>
    <script src="<%=path %>/js/index/get_index_data.js"></script>
    <script src="<%=path %>/js/index/load_echarts.js"></script>
    <script src="<%=path %>/js/index/get_caculate_data.js"></script>
    <script src="<%=path %>/js/index/load_index_subject.js"></script>
    <script src="<%=path %>/js/plugins/tooltip/tipso.min.js"></script>
   	<!-- Sweet alert -->
    <script src="<%=path %>/js/plugins/sweetalert/sweetalert.min.js"></script>
    <script type="text/javascript">
    </script>
	<script type="text/javascript"> var ctx = "<%=path%>";
    </script>

</body>
    
</html>