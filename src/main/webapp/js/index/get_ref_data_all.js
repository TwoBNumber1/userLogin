/**
 * 获取更多高被引页面
 * 
 */
var ref_loading = {};

$(document).ready(function(){
	//初始化按钮
	set_search_btn();
});
//监听滚动条是否已经到达底部
$(window).scroll(debounce(function(){
		debugger;
			//实际要调用的方法
			var currentPanel;
			$(".tab-pane").each(function(e){
				//active属性表明为当前显示的面板  找到当前所显示的面板
				if( $(this).attr("class").indexOf("active") != -1 ){
					currentPanel = $(this);
					//跳出循环
					return false;
				}
			});
			//第一次加载
			var href = currentPanel.attr("id");
			
			//调用后台接口
			getMoreRefer(href.split('-')[1].toUpperCase(),
					ref_loading[href+"-pIdx"],
					href);
			hideLoading();
		
	},3000));


/**
 * 防抖动
 * @param fn 实际要执行的函数
 * @param delay 延迟时间
 * @returns
 */
function debounce(fn,delay){
	debugger;
	var window = $(this);
	var clientHeight = window.height();
	var contentHeight = $(document).height();
	var scrollTop = window.scrollTop();
	if( scrollTop/(contentHeight-clientHeight) <= 0.90 ){
		return;
	}
	//超过90马上出loading图层
	//但请求要等停止操作再发
	console.log("标记加载 加载完成前不再执行相同操作.");
	showLoading();
	//找到当前操作所在的面板层
	var currentPanel;
	$(".tab-pane").each(function(e){
		//active属性表明为当前显示的面板  找到当前所显示的面板
		if( $(this).attr("class").indexOf("active") != -1 ){
			currentPanel = $(this);
			//跳出循环
			return false;
		}
	});
	debugger;
	//第一次加载
	var href = currentPanel.attr("id");
	if( typeof(ref_loading[href]) == 'undefined'){
		//标记成未加载
		ref_loading[href] = 0;
		//初始化页码 标记第一页
		ref_loading[href+"-pIdx"] = 1;
	}
	// 当前面板的表格正在响应之前的加载事件 未完成
	if( ref_loading[href] === 1 ){
		//退出当前方法
		return;
	}

	//调用接口前标记面板加载中
	ref_loading[href] = 1;

	//定时器 用来setTImeout
	var timer;
	//返回一个函数，这个函数会在一个时间区间结束后的delay毫秒时执行fn函数
	return function(){
		//保存函数调用时的上下文和参数 传递给fn
		var context = this;
		var args = arguments;
		//每次该返回函数被调用，清空一次定时器 以免被调用
		clearTimeout(timer);
		//当返回的函数被最后一次调用后 即用户停止了某一个连续的操作
		timer = setTimeout(function(){
			fn.apply(context,args)
		},delay)
	}
}

function getMoreRefer(type,page,href){
	
	//没有必要去重新获取当前面板 
	//也许用户触发事件后切换了标签页 返回内容会插入到非对应的面板里
	
	$.ajax({
		type:"GET",
		url:ctx+"/data/getMoreRef?type="+type+"&page="+page,
		success:function(ret){
			debugger;
			//检查是否是一个DataTable实例
			if( $.fn.DataTable.isDataTable( "table" )){
				//先销毁 将实例对象还原到普通的DOM对象
				DataTable.destroy();
			}
			
			ret = jQuery.parseJSON(ret);
			if(ret.status === 0 && ret.data != null){
				var str = ret.data.ret;
				console.log("获取被引数据");
				var table = $("#"+href).find("table");
				//此时还原的已经是一个普通dom对象，直接追加。
				table.find("tbody").prepend(str);
				//页码+1
				ref_loading[href+"-pIdx"] += 1;
				//标记加载完成
				ref_loading[href] = 0;
				hideLoading();
				//追加完成后再初始化DataTable对象
				DataTable = table.DataTable({
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
				//标记加载失败
				ref_loading[href] = 0;
				layer.msg(href+"获取失败："+ret.info+" 正在重新加载..");
				getMoreRefer(type,page,href);
			}
		},
		error:function(){
			//错误信息
			alert("获取高被引表格 咋的出错了呢。"+ret.info);
		}
	});
}




