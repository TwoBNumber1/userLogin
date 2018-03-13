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

$("#topSearch").bind("keyup",function(){
	debugger;
	 
	$.ajax({
		url:ctx+"/search/prefix?prefix="+$("#topSearch").val().trim(),
		type:'GET',
		success:function(ret){
			debugger;
			var array = ret.substring(1,ret.length).split(",");
			
		}
		
	})
})



