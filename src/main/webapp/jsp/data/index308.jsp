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
    <link href="<%=path %>/css/font-awesome.min.css?v=4.4.0" rel="stylesheet">
    <link rel="stylesheet" href="<%=path %>/css/styles.css">
    <link rel="stylesheet" href="<%=path %>/css/queries.css">
    <link href=" <%=path %>/css/plugins/sweetalert/sweetalert.css" rel="stylesheet">
    <link href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
		<header class="clearfix">
		    <div class="logo col-md-3"><h2 class="logo-text"><i class="fa fa-area-chart"></i>数据可视化分析</h2></div>
		    <nav class="clearfix">
            <ul class="clearfix">
                <li><a href="#" class="active">首页</a></li>
                <li><a href="index3">历史查询</a></li>
                <!-- <li><a href="#">our business</a></li>
                <li><a href="#">how we help</a></li>
                <li><a href="#">take the tour</a></li> -->
                <li><a href="#" class="last">关于我们</a></li>
            </ul>
        </nav>
        <div class="pullcontainer">
        <a href="#" id="pull"><i class="fa fa-bars fa-2x"></i></a>
        </div>     
		</header>
    <div class="banner">
    <ul >
          <li style="background-image: url('<%=path %>/img/02.jpg');">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-offset-3">
                <div class="hero-title">
                  	输入想搜索的文献关键词
                </div>
              <input class="hero-content" name="topSearch" id ="topSearch" value="" style="width:500px"/>
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
    <div class="container carousel">
      <div class="row">

        <div class="col-md-3">
        <div class="ca-hover">
          <div class="carousel-img">
            <img src="<%=path %>/img/c01.jpg" alt="Carousel Img">
          </div>
          <div class="carousel-avatar av1">
          </div>
          <div class="carousel-content">
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.</p>
          </div>
        <div class="overlay"></div>
        </div>
        </div>

        <div class="col-md-3">
        <div class="ca-hover">
          <div class="carousel-img">
            <img src="<%=path %>/img/c02.jpg" alt="Carousel Img">
          </div>
          <div class="carousel-avatar av2">
          </div>
          <div class="carousel-content">
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.</p>
          </div>
          <div class="overlay"></div>
        </div>
        </div>

        <div class="col-md-3">
        <div class="ca-hover">
          <div class="carousel-img">
            <img src="<%=path %>/img/c03.jpg" alt="Carousel Img">
          </div>
          <div class="carousel-avatar av3">
          </div>
          <div class="carousel-content">
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.</p>
          </div>
          <div class="overlay"></div>
        </div>
        </div>

        <div class="col-md-3">
        <div class="ca-hover">
          <div class="carousel-img">
            <img src="<%=path %>/img/c04.jpg" alt="Carousel Img">
          </div>
          <div class="carousel-avatar av4">
          </div>
          <div class="carousel-content">
            <h3>Lorem ipsum dolor sit amet consectetur</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.</p>
          </div>
          <div class="overlay"></div>
        </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="controls">
          <ul>
            <li><span class="pagination active"></span></li>
            <li><span class="pagination"></span></li>
            <li><span class="pagination"></span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-inter">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa. Nullam condimentum mauris et rhoncus sagittis. Sed eu metus in diam tincidunt egestas non at odio. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          <div class="divider"></div>
          <a href="#" class="button solid-color">BUTTON</a>
          <a href="#" class="button extra-color">BUTTON</a>
        </div>
        <div class="col-md-6">
          <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa. Nullam condimentum mauris et rhoncus sagittis. Sed eu metus in diam tincidunt egestas non at odio.</p>
          <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean vitae lectus erat. Duis consequat laoreet velit. Mauris convallis, sapien sit amet scelerisque accumsan, felis urna aliquet nunc, viverra mollis odio tellus a nisl. Nulla lobortis lectus non rutrum viverra. Sed et molestie libero. Sed ut ultrices dui.</p>
        </div>  
      </div>
    </div>
    </div>
    <div class="h2-wrap">
      <div class="container">
        <div class="row">
        <div class="col-md-12">
          <h2 class="standard-block">LATEST ARTICLES</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid container-articles">
      <div class="row articles">
        <div class="col-md-2 article-img">
          <a href="#"><img src="<%=path %>/img/articles/01.jpg" alt=""></a>
          <div class="article-overlay"></div>
        </div>
        <div class="col-md-2 article-img">
          <a href="#"><img src="<%=path %>/img/articles/02.jpg" alt=""></a>
          <div class="article-overlay"></div>
        </div>
        <div class="col-md-2 article-img">
          <a href="#"><img src="<%=path %>/img/articles/03.jpg" alt=""></a>
          <div class="article-overlay"></div>
        </div>
        <div class="col-md-2 article-img">
          <a href="#"><img src="<%=path %>/img/articles/04.jpg" alt=""></a>
          <div class="article-overlay"></div>
        </div>
        <div class="col-md-2 article-img">
          <a href="#"><img src="<%=path %>/img/articles/05.jpg" alt=""></a>
          <div class="article-overlay"></div>
        </div>
        <div class="col-md-2 article-img">
          <a href="#"><img src="<%=path %>/img/articles/06.jpg" alt=""></a>
          <div class="article-overlay"></div>
        </div>
      </div>
      <div class="row articles">
        <div class="col-md-2 article-img">
          <a href="#"><img src="<%=path %>/img/articles/07.jpg" alt=""></a>
          <div class="article-overlay"></div>
        </div>
        <div class="col-md-2 article-img">
          <a href="#"><img src="<%=path %>/img/articles/08.jpg" alt=""></a>
          <div class="article-overlay"></div>
        </div>
        <div class="col-md-2 article-img">
          <a href="#"><img src="<%=path %>/img/articles/09.jpg" alt=""></a>
          <div class="article-overlay"></div>
        </div>
        <div class="col-md-2 article-img">
          <a href="#"><img src="<%=path %>/img/articles/10.jpg" alt=""></a>
          <div class="article-overlay"></div>
        </div>
        <div class="col-md-2 article-img">
          <a href="#"><img src="<%=path %>/img/articles/11.jpg" alt=""></a>
          <div class="article-overlay"></div>
        </div>
        <div class="col-md-2 article-img">
          <a href="#"><img src="<%=path %>/img/articles/12.jpg" alt=""></a>
          <div class="article-overlay"></div>
        </div>
      </div>
    </div>
    <div class="laptop-slider">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1 laptop-placeholder">
        <div class="slideshow">
        <figure class="show"><img alt="" src="<%=path %>/img/slider/slide-01.png" /></figure>
        <figure><img alt="" src="<%=path %>/img/slider/slide-02.png" /></figure>
        <figure><img alt="" src="<%=path %>/img/slider/slide-01.png" /></figure>
        <figure><img alt="" src="<%=path %>/img/slider/slide-02.png" /></figure>
        <span class="prev"><i class="fa fa-angle-left fa-4x"></i></span>
        <span class="next"><i class="fa fa-angle-right fa-4x"></i></span>
        </div>
        </div>
        <div> 
        </div>
      </div>
    </div>
    </div>
    <div class="quote-container">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
          <div class="col-md-10 col-md-offset-1">
            <div class="quote-slideshow">
              <figure class="show"><h2>Nam mi enim, auctor non ultricies a, fringilla eu risus. Praesent vitae lorem et elit tincidunt accumsan suscipit eu libero. </h2>
              <figcaption>
                Nam mi enim, auctor non ultricies.
              </figcaption>
              </figure>
              <figure><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.</h2>
              <figcaption>
                Nam mi enim, auctor.
              </figcaption>
              </figure>
            </div>
            </div>
            <span class="quote-prev circle"><i class="fa fa-angle-left fa-2x"></i></span>
            <span class="quote-next circle"><i class="fa fa-angle-right fa-2x"></i></span>
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
    <script src="<%=path %>/js/jquery-1.8.3.min.js"></script>
    <script src="<%=path %>/js/bootstrap.min.js"></script>
    <script src="<%=path %>/js/scripts.js"></script>
    <script src="<%=path %>/js/unslider.min.js"></script>
    

</body>
    <script src="<%=path %>/js/plugins/metisMenu/jquery.metisMenu.js"></script>
    <script src="<%=path %>/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>
    <script src="<%=path %>/js/plugins/layer/layer.js"></script>
    <script src="<%=path %>/js/hplus.min.js?v=4.0.0"></script>
    <script type="text/javascript" src="<%=path %>/js/contabs.min.js"></script>
    <script src="<%=path %>/js/plugins/pace/pace.min.js"></script>
    <script src="<%=path %>/js/data/main.operate.js"></script>
    <script src="<%=path %>/js/plugins/toastr/toastr.min.js"></script>
        <script src="<%=path %>/js/index/index_operate.js"></script>
   	<!-- Sweet alert -->
    <script src="<%=path %>/js/plugins/sweetalert/sweetalert.min.js"></script>
    <script type="text/javascript">
    </script>
<script type="text/javascript"> var ctx = "<%=path%>";
    </script>
</html>