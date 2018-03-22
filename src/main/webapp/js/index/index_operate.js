
/*
 * a标签绑定跳转
 * */
$("a[class='hero-btn']").on("click",function(){
	//search();
	var keyword = $("#topSearch").val().trim();
	if ( str_is_null(keyword) ){
		layer.msg('输入关键词再进行搜索。', {icon: 3});
		return;
	} 
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
$("#topSearch").bind("keyup",function(event){
	//回车执行跳转
	if( event.keyCode == "13" ){
		$("a[class='hero-btn']").click();
		return;
	}
	//输入字符执行搜索
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
	console.log("输入框操作共耗时："+(new Date().getTime()-timeStamp)+"ms");
})


	
	
