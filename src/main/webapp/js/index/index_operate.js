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

var array;




$("#topSearch").bind("keyup",function(){
	 
		$.ajax({
		url:ctx+"/search/prefix?prefix="+$("#topSearch").val().trim(),
		type:'GET',
		success:function(ret){
			array = ret.substring(1,ret.length-1).split(",");
			debugger;
			$("#topSearch").autocomplete({
				source:array
			})
		}
	})
})


	
	
	



