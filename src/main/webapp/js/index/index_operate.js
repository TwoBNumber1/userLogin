$(function(){
	
});

/*
 * a标签绑定跳转
 * */
$("a[class='hero-btn']").on("click",function(){
	search();
	var keyword = $("#topSearch").val().trim();
	window.location.href="getData?keyword="+keyword; 
});

