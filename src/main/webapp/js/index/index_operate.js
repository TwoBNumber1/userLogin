
/*
 * a标签绑定跳转
 * */
$("a[class='hero-btn']").on("click",function(){
	search();
	var keyword = $("#topSearch").val().trim();
	window.location.href="data/getData?keyword="+keyword;
	$.ajax({
		url:ctx+"/search/push?keyword="+$("#topSearch").val().trim(),
		type:'GET',
		success:function(ret){
			var obj = jQuery.parseJSON(ret);
			if(obj.status == 0 ){
				console.log(obj.info + " "+ keyword );
			}
		}
	});
});

/**
 * 监听键盘输出
 * @returns
 */
$("#topSearch").bind("keyup",function(){
		var timeStamp = new Date().getTime();
		
		
		$("#topSearch").autocomplete({
			minLength:0,
			source:function(request,response){
				$.ajax({
					url:ctx+"/search/prefix?prefix="+$("#topSearch").val().trim(),
					type:"GET",
					success:function( data ){
						var array = [];
						
						if(data.length == 2)
							array.push("No results..");
						else
							array = jQuery.parseJSON(data);
						response( $.map( array ,function( item ){
							debugger;
							return {
								value:item.content
							}
						}));//response
					}//success
				});//ajax
			}
		});
		console.log("操作共耗时："+(new Date().getTime()-timeStamp)+"ms");
	 /*//关键词提示
		$.ajax({
			url:ctx+"/search/prefix?prefix="+$("#topSearch").val().trim(),
			type:'GET',
			success:function(ret){
				debugger;
				if(ret === 2){
					
				}
				var array = ret.substring(1,ret.length-1).split(",");
				debugger;
				$("#topSearch").autocomplete({
					source:array.slice(0,5)
				})
				console.log("操作共耗时："+(new Date().getTime()-timeStamp)+"ms");
			}
		});*/
})



	
	
	



