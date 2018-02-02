<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://"
            + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    

    <title>Anaylsis - 注册</title>
    <meta name="keywords" content="Anaylsis - Register">
    <meta name="description" content="Anaylsis - Register">

    <link rel="shortcut icon" href="<%=path%>/img/favicon.ico">
     <link href="<%=path%>/css/bootstrap.min.css?v=3.3.5" rel="stylesheet">
    <link href="<%=path%>/css/font-awesome.min.css?v=4.4.0" rel="stylesheet">
    <link href="<%=path%>/css/plugins/iCheck/custom.css" rel="stylesheet">
    <link href="<%=path%>/css/animate.min.css" rel="stylesheet">
    <link href="<%=path%>/css/style.min.css?v=4.0.0" rel="stylesheet"><base target="_blank">
    <script>if(window.top !== window.self){ window.top.location = window.location;}</script>

</head>

<body class="gray-bg">

    <div class="middle-box text-center loginscreen   animated fadeInDown">
        <div class="col-sm-16">
            <div>

                <h1 class="logo-name">H+</h1>

            </div>
            <h3>欢迎注册 H+</h3>
            <p>创建一个H+新账户</p>
             <form class="m-t" role="form" action="login.html">
                 <div class="form-group">
                    <input type="text" name="username" class="form-control" placeholder="请输入用户名" required="">
                </div>
                <div class="form-group">
                    <input type="password" id="password" name="password" class="form-control" placeholder="请输入密码" required="">
                	<span id="tip"></span>
                </div>
                <div class="form-group">
                    <input type="password" id="repassword" name="repassword" class="form-control" placeholder="请再次输入密码" required="">
               		<span id="tip"></span>
                </div>
                <div class="form-group text-left">
                    <div class="checkbox i-checks">
                        <label class="no-padding">
                            <input type="checkbox"><i></i> 我同意注册协议</label>
                    </div>
                </div>
                <button id="registerButton" type="submit" class="btn btn-primary block full-width m-b">注 册</button>
                <p class="text-muted text-center"><small>已经有账户了？</small><a href="login">点此登录</a>
                </p>
                 
            </form> 
        </div>
    </div>
    <script src="<%=path%>/js/jquery.min.js?v=2.1.4"></script>
    <script src="<%=path%>/js/bootstrap.min.js?v=3.3.5"></script>
    <script src="<%=path%>/js/plugins/iCheck/icheck.min.js"></script>
    <script src="<%=path%>/js/content.min.js?v=1.0.0"></script>
    <script src="<%=path%>/js/plugins/validate/jquery.validate.min.js"></script>
    <script src="<%=path%>/js/plugins/validate/messages_zh.min.js"></script>
    <script src="<%=path%>/js/demo/form-validate-demo.min.js"></script>
    <script>
        $(document).ready(function(){$(".i-checks").iCheck({checkboxClass:"icheckbox_square-green",radioClass:"iradio_square-green",})});

    <script type="text/javascript" src="http://tajs.qq.com/stats?sId=9051096" charset="UTF-8"></script>
</body>

</html>