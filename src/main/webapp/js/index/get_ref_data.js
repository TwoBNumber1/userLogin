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
	if( $(this).parent().attr("class").indexOf("active") != -1 ){
		return;
	}
	var href = $(this).attr("href");
	debugger;
	$(this).tab("show");
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
				
				if( typeof(table.find("tbody")) === 'undefined' ){
					table.prepend(str);
					//table.prepend('<tfoot style="align:center">更多...</tfoot>');
					table.DataTable({
						//规定排序列
						paging:false,
						searching:false,
						info:false,
						//order:[[7,"desc"]],
						columnDefs:[{
							targets:[0,1],
							ordering:false
						}]
					});
				}else{
					table.find("tbody").empty();
					table.prepend(str);
				}
			}else{
				//错误信息 ret.info会有。
				
			}
		},
		error:function(){
			//错误信息
		}
	});
}

