$(function(){
	//绑定tooltip
	$("th").each(function(){
		//console.log($(this).attr("data-tipso"));
		if (typeof($(this).attr("data-tipso")) != 'undefined' ){
			$(this).tipso({
				useTitle: false,
				position: 'top',
				width:"200px",
				background:"#63c6ae",
				color:"#ffffff"
			})
		}
	})
	getReferData("AUTH","#tab-auth");
})


$("#ref-tab a").click(function(e){
	//切换选项卡
	e.preventDefault();
	var flag = $(this).parent().attr("class");
	if( typeof(flag) != "undefined" && flag.indexOf("active") != -1 ){
		return;
	}
	var href = $(this).attr("href");
	debugger;
	$(this).tab("show");
	if( $(href).find("table").find("tbody").length > 0 ) return;
	getReferData(href.split('-')[1].toUpperCase(),href);
});

function getReferData(type,href){
	$.ajax({
		type:"GET",
		url:ctx+"/data/getRef?type="+type,
		success:function(ret){
			debugger;
			ret = jQuery.parseJSON(ret);
			if(ret.status === 0 && ret.data != null){
				var str = ret.data.ret;
				console.log("获取被引数据");
				var table = $(href).find("table");
		
				table.prepend(str);
				//table.prepend('<tfoot style="align:center">更多...</tfoot>');
				table.DataTable({
					//规定排序列
					paging:false,
					searching:false,
					info:false,
					//order:[[7,"desc"]],
					columnDefs:[{
						targets:'nosort',
						orderable:false
					}]
				});
			
			}else{
				//错误信息 ret.info会有。
				alert(href+"获取失败："+ret.info);
			}
		},
		error:function(){
			//错误信息
		}
	});
}

