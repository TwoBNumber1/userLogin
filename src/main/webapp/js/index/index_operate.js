
/*
 * a标签绑定跳转
 * */
$("a[class='hero-btn']").on("click",function(){
	search();
	var keyword = $("#topSearch").val().trim();
	window.location.href="data/getData?keyword="+keyword; 
});

/**
 * 监听键盘输出
 * @returns
 */
$("#topSearch").bind("keyup",function(){
	 //关键词提示
		$.ajax({
			url:ctx+"/search/prefix?prefix="+$("#topSearch").val().trim(),
			type:'GET',
			success:function(ret){
				var array = ret.substring(1,ret.length-1).split(",");
				debugger;
				$("#topSearch").autocomplete({
					source:array
				})
			}
		});
})



	
	
	



