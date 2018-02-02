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
  <title>Home</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <link href="<%=path %>/css/style.297.css" rel="stylesheet" type="text/css"  media="all" />
  <link rel="stylesheet" href="<%=path %>/css/flexslider.css" type="text/css" media="screen" />
  <script src="<%=path %>/js/jquery-1.10.2.min.js" type="text/javascript"></script>
  <script defer src="<%=path %>/js/jquery.flexslider.js"></script>
 </head>
<body>
	<!----start-header----->
	 <div class="header">
	     <div class="wrap">
	      <div class="header-top">
			<!---start-top-nav---->
			<div class="top-nav">
					<div class="top-header">
						<div class="logo">
							<a href="index.html"><h1>Customer</h1></a>
						</div>
					</div>
				<nav class="nav clearfix">
					<a id="menu-toggle" class="anchor-link" href="#"><img src="<%=path %>/img/men-bars.png" alt="" /></a>
					<ul class="simple-toggle" id="menu">
			        	<li><a href="index.html">首页</a></li>
			        	
			        	<!-- logo -->
			        	 <li class="logo"><a href="index.html"><h1>Customer</h1></a></li>
			        	<!-- logo -->
			        	<li><a href="portfolio.html">历史查询</a></li>
			        	<li><a href="404.html">关于我们</a></li>
			        </ul>
				</nav>
				
				<script type="text/javascript">
					  $(document).ready(function() {
					
						$('#menu-toggle').click(function () {
					      $('#menu').toggleClass('open');
					      e.preventDefault();
					    });
					    
					});
				</script>
			</div>
			<!---End-top-nav---->
		</div>
		<div class="banner">
			<div class="banner-text">
				<h2><span>输入要搜索的文献关键字</span></h2>
				<span><input name="userName" type="text" class="textbox">
					<input type="submit" value="Submit"></span>
			</div>
			 <div class="flexslider">
				  <ul class="slides">
				    <li><img src="<%=path %>/img/slide1.jpg" alt="" /></li>
				    <li><img src="<%=path %>/img/slide2.jpg" alt="" /></li>
				    <li><img src="<%=path %>/img/slide3.jpg" alt="" /></li>
				   </ul>
				  <script type="text/javascript">
				    $(function(){
				      SyntaxHighlighter.all();
				    });
				    $(window).load(function(){
				      $('.flexslider').flexslider({
				        animation: "slide",
				        controlNav: false
				      });
				    });
				  </script>
				</div>

		</div>
	  </div>
	</div>
   <!----End-header----->
	       
		 <!---start-content---->
		 <div class="wrap">
		   <div class="content">	 	 
		       <div class="top-grids">
			 		<div class="section group">
						<div class="grid_1_of_3 images_1_of_3 top_grid">
							<div class="topgrid-desc">							 
							  <h3>Qullam luctus</h3>
						      <p>Aenean porta, tellus porttitor ugiat elementum, mi justo vehicula te, nec tristique leo dolor at odio. </p>
						      </div>
						      <img src="<%=path %>/img/grid-img1.jpg" alt="" />
						</div>
						 <div class="grid_1_of_3 images_1_of_3 top_grid">
							 <div class="topgrid-desc">							 
							  <h3>Lipsu mluctus</h3>
						      <p>Jenean porta, tellus porttitor ugiat elementum, mi justo vehicula te, nec tristique leo dolor at odio. </p>
						      </div>
							  <img src="<%=path %>/img/grid-img2.jpg" alt="" />
						 </div>
						<div class="grid_1_of_3 images_1_of_3 top_grid">
							 <div class="topgrid-desc">							 
							  <h3>Vivams laoreet</h3>
						      <p>Qonean porta, tellus porttitor ugiat elementum, mi justo vehicula te, nec tristique leo dolor at odio.</p>
						      </div>
						   <img src="<%=path %>/img/grid-img3.jpg" alt="" />
						</div>
					</div>
		 		</div>
		 		
		      <div class="content-middle">
		      <div class="content-middle-top">
		      	<h4>Integer vitae libero ac risus egestas placerat</h4>
		      </div>
		       <div class="content-middle-desc">
				<div class="section group">
				<div class="lsidebar span_3_of_1">
				    <img src="<%=path %>/img/grid-img.jpg" alt="" />
				 </div>	
				<div class="cont span_3_of_2">
				 	<h3>Joltricies pharetra magna</h3>
				 	<p>Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. </p>
				    <div class="more-info more-info2"><a href="#">More Info</a></div>
				  </div>
		        </div>
		       </div>
		      </div>
		      
		     <div class="content-bottom"> 
		      <div class="section group">
				<div class="cont span_2_of_3">
				 <div class="services-desc-block">
				 	<h3>Tricies pharetra magna</h3>
				 	<p>Eent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes. Nulla dui. Fusce feugiat malesuada odio. </p>
				    <div class="more-info"><a href="#">More Info</a></div>
				 </div>
				  <div class="services-desc-block">
				 	<h3>Cies retra odio</h3>
				 	<p>Vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes. Nulla dui. Fusce feugiat malesuada odio. </p>
				    <div class="more-info"><a href="#">More Info</a></div>
				 </div>
				</div>	
				<div class="rsidebar span_1_of_3">
				    <h3>Ciaretra lipsum</h3>
				    <div class="news-letter">
				        <form method="post" action="contact-post.html">
						    	<span><label>Your name</label></span>
						    	<span><input name="userName" type="text" class="textbox"></span>
						    	<span><label>Your email</label></span>
						    	<span><input name="userEmail" type="text" class="textbox"></span>
						    	<span><label>Your message</label></span>
						    	<span><textarea name="userMsg"> </textarea></span>
						   		<span><input type="submit" value="Submit" ></span>
					     </form>
				     </div>
				 </div>			
		       </div>
		      </div>  
			</div>
		  </div>		   			
		 <!---End-content---->
		 <!---start-footer---->
		  <div class="footer">
		    <div class="wrap">
			   	<div class="copy-right">
					<p>Copyright &copy; 2014.Company name All rights reserved.<a target="_blank" href="http://h2design.taobao.com/">æ°¢è®¾è®¡</a></p>
				</div>
			<div class="clear"> </div>
		</div>
	</div>
		 <!---End-footer---->
	
</body>
</html>

