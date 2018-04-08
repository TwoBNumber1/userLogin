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
    <title>index - 中国知网文献数据分析 </title>
    <link href="<%=path %>/css/tipso.min.css" rel="stylesheet">
    <link href="<%=path %>/css/demo/reset.css" rel="stylesheet">
        <link href="<%=path %>/css/demo/htmleaf-demo.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="<%=path %>/css/plugins/toastr/toastr.min.css" rel="stylesheet">
    <link href="<%=path %>/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=path %>/css/font-awesome.min.css?v=4.4.0" rel="stylesheet">
    <link href="<%=path %>/css/style.min.css?v=4.0.0" rel="stylesheet">
    <link rel="stylesheet" href="<%=path %>/css/styles.css">
    <link rel="stylesheet" href="<%=path %>/css/queries.css">

	<link href='<%=path %>/css/horsey/jquery-ui.css' rel='stylesheet' type='text/css' />

</head>
    <link href=" <%=path %>/css/plugins/sweetalert/sweetalert.css" rel="stylesheet">
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
<style type="text/css">
	td{vertical-align:middle }
	#loading{
		width:40%;
		margin:auto;
		text-align:center;
	}

</style>
</head>
  <body>
  
  	<header class="cd-main-header animate-search">
		<div class="cd-logo"><a href="#0">
				<h2 class="logo-text"><i class="fa fa-area-chart"></i>数据可视化分析</h2>
				</a></div>

		<nav class="cd-main-nav-wrapper">
			<a href="#search" class="cd-search-trigger cd-text-replace">Search</a>
			
			<ul class="cd-main-nav">
				<li><a href="#0">Products</a></li>
				<li><a href="#0">Store</a></li>
				<li><a href="#0">Blog</a></li>
				<li><a href="#0">Contact</a></li>
			</ul> <!-- .cd-main-nav -->
		</nav> <!-- .cd-main-nav-wrapper -->

		<a href="#0" class="cd-nav-trigger cd-text-replace">Menu<span></span></a>
	</header>
  
		<!-- <header class="clearfix cd-main-header animate-search" style="
		    position:  fixed;
		    width: 100%;
		    z-index: 9999;">
		    <div class="logo col-md-3"><h2 class="logo-text"><i class="fa fa-area-chart"></i>数据可视化分析</h2></div>
		    <nav class="clearfix cd-main-nav-wrapper">
            <ul class="clearfix">
                <li><a href="#" class="active">首页</a></li>
                <li><a href="index3">历史查询</a></li>
                 <li><a href="page/ref">高被引数据</a></li>
                <li><a href="#" class="last">关于我们</a></li>
            </ul>
            <a href="#search" class="cd-search-trigger cd-text-replace">Search</a>
        </nav>
        <div class="pullcontainer">
        <a href="#" id="pull"><i class="fa fa-bars fa-2x"></i></a>
        </div>     
		</header> -->
			<div id="search" class="cd-main-search">
		<form>
			<input type="search" placeholder="Search...">

			<div class="cd-select">
				<span>in</span>
				<select name="select-category">
					<option value="all-categories">all Categories</option>
					<option value="category1">Category 1</option>
					<option value="category2">Category 2</option>
					<option value="category3">Category 3</option>
				</select>
				<span class="selected-value">all Categories</span>
			</div>
		</form>

		<div class="cd-search-suggestions">
			<div class="news">
				<h3>News</h3>
				<ul>
					<li>
						<h4><a class="cd-nowrap" href="#0">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</a></h4>
						<time datetime="2016-01-12">Feb 03, 2016</time>
					</li>

					<li>
						<h4><a class="cd-nowrap" href="#0">Incidunt voluptatem adipisci voluptates fugit beatae culpa eum, distinctio, assumenda est ad</a></h4>
						<time datetime="2016-01-12">Jan 28, 2016</time>
					</li>

					<li>
	
						<h4><a class="cd-nowrap" href="#0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, esse.</a></h4>
						<time datetime="2016-01-12">Jan 12, 2016</time>
					</li>
				</ul>
			</div> <!-- .news -->

			<div class="quick-links">
				<h3>Quick Links</h3>
				<ul>
					<li><a href="#0">Find a store</a></li>
					<li><a href="#0">Accessories</a></li>
					<li><a href="#0">Warranty info</a></li>
					<li><a href="#0">Support</a></li>
					<li><a href="#0">Contact us</a></li>
				</ul>
			</div> <!-- .quick-links -->
		</div> <!-- .cd-search-suggestions -->

		<a href="#0" class="close cd-text-replace">Close Form</a>
	</div> <!-- .cd-main-search -->
		
		

		<div style="padding-top:40px"></div>
    <div class="banner">
    <ul>
          <li style="background-image: url('<%=path %>/img/02.jpg');">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-3">
                <div class="hero-title">
                  	输入想搜索的文献关键词
                </div>
              <input class="hero-content" name="topSearch" id ="topSearch" value="" 
              autocomplete="off" 
              style="width:500px"/>
              <a href="#" class="hero-btn" >SEARCH IT!</a>
              </div>
            </div>
          </div>
        </li>
     
    </ul>
</div>
    <div class="container">
    	<div class="arrow"></div>
    </div>
    
    <div  style="width:100%;height:85px"></div>
      <div class="container" style="width:92%">
    
      <!-- 院校分布  -->
	  <div class="col-md-12">
	  	<div  id="school_distribute" style="height:600px;"></div>
		
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
</body>
  	<script src="<%=path %>/js/jquery-1.10.2.min.js"></script>
    <script src="<%=path %>/js/plugins/layer/layer.js"></script>
	
    <script src="<%=path %>/js/bootstrap.min.js"></script>
    <script src="<%=path %>/js/scripts.js"></script>
    <script src="<%=path %>/js/unslider.min.js"></script>
    <script src="<%=path %>/js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="<%=path %>/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
    <script src="<%=path %>/js/hplus.min.js?v=4.0.0"></script>
    <script src="<%=path %>/js/contabs.min.js"></script>
    <script src="<%=path %>/js/plugins/pace/pace.min.js"></script>
    <%-- <script src="<%=path %>/js/plugins/toastr/toastr.min.js"></script> --%>
    <script src="<%=path %>/js/echarts/echarts.js"></script>
    <script src="<%=path %>/js/echarts/bmap.min.js"></script>
     <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=cudRWYxjcLLBjz37p40zRRTn4124YeQw&callback=initialize"></script>
  
    
    <!-- tipso -->
    <script src="<%=path %>/js/plugins/tooltip/tipso.min.js"></script>
    <!-- dataTables -->
    <script src="<%=path %>/js/plugins/dataTables/jquery.dataTables.min.js"></script>
   	<!-- Sweet alert -->
    <script src="<%=path %>/js/plugins/sweetalert/sweetalert.min.js"></script>
    <script src="<%=path %>/js/horsey/jquery-ui.min.js"></script>
    <!-- 处理逻辑 -->
    <script src="<%=path %>/js/index/get_school_distribute.js"></script>
    <script src="<%=path %>/js/index/index_operate.js"></script>
     <script src="<%=path %>/js/data/util.js"></script>
     <script src="<%=path %>/js/plugins/main.js"></script>
       <script src="<%=path %>/js/plugins/modernizr.js"></script>
	<script type="text/javascript"> var ctx = "<%=path%>";
    </script>
</html>