

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



