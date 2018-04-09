function getSum(a){
	
	return eval(a.join("+"));
}

/*根据name获取当前Url中的参数*/
function getUrlParam(name){

	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数

	if (r!=null) return decodeURI(r[2]); return null; //返回参数值
} 

/*返回百分比 以便设置适当的x轴显示个数*/
function Percentage(num, total) {
    return (Math.round(num / total * 10000) / 100.00 );// 小数点后两位百分比
}

/**
 * 计算同比增长率
 * @param now 当前统计周期
 * @param pre 上一个统计周期
 * @returns 百分比数值
 */
function year_to_year(now,pre){
	return (  Math.round( (now / pre -1) * 10000 ) / 100.00 );
}

/**
 * 字符串全文替换
 * @param key 被替换的字符串
 * @param value 替换的字符串
 * @returns
 */
function replaceAll(str,key,value){
	return str.replace( new RegExp(key,'g'),value );
}

/**
 * 处理值可能为undefined 的对象
 * @param obj
 * @returns
 */
function deal_with_undefined(obj){
	return typeof(obj) == 'undefined'?'':obj;
}

/**
 * 检测图表是否需要清空
 * @param chart
 */
function deal_with_chart(chart){
	
	if (chart != null && chart != "" && chart != undefined) {  
        chart.dispose();  
    }  
}

function str_is_null(str){
	return str == ''? true:str == null?true: typeof(str) == 'undefined'?true:false;
	
}

function set_search_btn(){
  var $search = $('.search'), $input = $('.search-input'), $close = $('.search-close'), $svg = $('.search-svg'), $path = $('.search-svg__path')[0], initD = $svg.data('init'), midD = $svg.data('mid'), finalD = $svg.data('active'), backDelay = 400, midAnim = 200, bigAnim = 400, animating = false;
   $(document).on('click', '.search:not(.active)', function () {
        if (animating)
            return;
        animating = true;
        $search.addClass('active');
        Snap($path).animate({ 'path': midD }, midAnim, mina.backin, function () {
            Snap($path).animate({ 'path': finalD }, bigAnim, mina.easeinout, function () {
                $input.addClass('visible');
                $input.focus();
                $close.addClass('visible');
                animating = false;
            });
        });
    });
    $(document).on('click', '.search-close', function () {
        if (animating)
            return;
        animating = true;
        $input.removeClass('visible');
        $close.removeClass('visible');
        $search.removeClass('active');
        setTimeout(function () {
            Snap($path).animate({ 'path': midD }, bigAnim, mina.easeinout, function () {
                Snap($path).animate({ 'path': initD }, midAnim, mina.easeinout, function () {
                    animating = false;
                });
            });
        }, backDelay);
    });
}

function record_keyword(keyword){
	$.ajax({
		url:ctx+"/search/push?keyword="+$("#topSearch").val().trim(),
		type:'GET',
		success:function(ret){
			var obj = jQuery.parseJSON(ret);
			if(obj.status == 0 ){
				console.log(obj.info + ":"+ keyword );
			}
		}
	});
}

$(".search-input").bind("keyup",function(event){
	//回车
	if( event.keyCode == "13" ){
		var keyword = $(".search-input").val().trim();
		if ( str_is_null(keyword) ){
			layer.msg('输入关键词再进行搜索。', {icon: 3});
			return;
		}
		window.location.href=ctx+"/data/getData?keyword="+keyword;
		//记录此次关键词
		record_keyword(keyword);
		return;
	}
	//esc
	if( event.keyCode == '27' ){
		$(".search-close").click();
	}
	
});



