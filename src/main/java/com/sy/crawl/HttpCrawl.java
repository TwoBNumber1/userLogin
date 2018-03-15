package com.sy.crawl;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URLEncoder;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.logging.Level;

import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpStatus;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.cookie.Cookie;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.gargoylesoftware.htmlunit.CookieManager;
import com.gargoylesoftware.htmlunit.FailingHttpStatusCodeException;
import com.gargoylesoftware.htmlunit.ProxyConfig;
import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlInput;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import com.sy.util.ConvertUtil;
import com.sy.util.HttpUtil;


@Component
public class HttpCrawl {

	//日志常量
	private static final Logger Logger = LoggerFactory.getLogger(HttpCrawl.class);
	//IndexURL常量
	private static final String INDEX_GET_URL = "http://kns.cnki.net/kns/brief/Default_Result.aspx?code=CIDX&kw=";
	private static final String INDEX_GET_URL_TAIL = "&korder=&sel=1";
	private static final String INDEX_AJAX_URL = "http://kns.cnki.net/kns/CnkiIndex/AjaxService/AjaxService.aspx/";
	//CaculateURL常量
	private static final String CACULATE_SEARCH_URL = "http://kns.cnki.net/kns/request/SearchHandler.ashx?action=&NaviCode=*&ua=1.11&formDefaultResult=&PageName=ASP.brief_default_result_aspx&DbPrefix=SCDB&DbCatalog=%e4%b8%ad%e5%9b%bd%e5%ad%a6%e6%9c%af%e6%96%87%e7%8c%ae%e7%bd%91%e7%bb%9c%e5%87%ba%e7%89%88%e6%80%bb%e5%ba%93&ConfigFile=SCDBINDEX.xml&db_opt=CJFQ%2CCJRF%2CCDFD%2CCMFD%2CCPFD%2CIPFD%2CCCND%2CCCJD&txt_1_sel=SU%24%25%3D%7C&txt_1_value1=";
	
	private static final String CACULATE_SEARCH_URL_TAIL = "&txt_1_special1=%25&his=0&parentdb=SCDB&__=";
	
	private static final String CACULATE_AJAX_URL = "http://kns.cnki.net/kns/Visualization/";
	
	//Reference URL 常量
	private static final String REFERENCE_URL = "http://ref.cnki.net/REF/HighRef/Search?isPage=True&type=";
	//http连接池
	@Autowired
	HttpConnectionManager connectionManager;
	
	/**
	 * 获取被引统计数据(首页)
	 * @param type QIKN 期刊 AUTH 作者
	 * @return 
	 * @throws IOException 
	 * @throws ClientProtocolException 
	 */
	public String getReferenceData(String type) throws ClientProtocolException, IOException {
		
		String result = "";
		HttpGet httpGet = new HttpGet(REFERENCE_URL+type);
		HttpUtil.setRequestConfig(httpGet);
		//新建httpCLient对象
		CloseableHttpClient httpClient = connectionManager.getHttpClient();
		CloseableHttpResponse response = null;
		
		response = httpClient.execute(httpGet);
		//请求成功
		Logger.info("type:"+type+" 获取被引数据请求是否成功:"+response.getStatusLine().getStatusCode());
		if(HttpStatus.SC_OK == response.getStatusLine().getStatusCode()) {
			HttpEntity entity = response.getEntity();
			String temp = EntityUtils.toString(entity,"utf-8");
			Document doc = Jsoup.parse(temp);
			result = doc.getElementById("subPager").html();
		}else {
			result = "error "+response.getStatusLine().toString();
		}
		return result;
	}
	
	
	/**
	 * 指数分析界面用到的抓取策略
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	public String getIndexData(String keyword,String resultType,String numType) throws ClientProtocolException, IOException {
		
		Logger.info("执行指数分析方法 对应关键词--->" + keyword);
		//这部分请求用来获取能抓取数据的Cookie
		keyword.replaceAll(" ", "");
		String url =  INDEX_GET_URL + keyword + INDEX_GET_URL_TAIL ;
		HttpGet httpGet = new HttpGet(url);
		HttpUtil.setRequestConfig(httpGet);

		//新建httpCLient对象
		CloseableHttpClient httpClient = connectionManager.getHttpClient();
		//设置请求头信息
		setIndexGetHeader(httpGet);
		CloseableHttpResponse response = null;
		//post请求不成功则反复执行
		boolean flag = true;
		do{
			//执行本次Get请求
			Logger.info("连接中....");
			response = httpClient.execute(httpGet);
			System.out.println(url);
			Logger.info("连接是否成功： " + response.getStatusLine());
			if(HttpStatus.SC_OK != response.getStatusLine().getStatusCode()) {
				//连接没有成功
				httpGet.abort();
				flag = false;
			}
		}while( !flag );
		response.close();
		//Cookie获取成功 跳出循环
		HttpPost httpPost = new HttpPost(INDEX_AJAX_URL+resultType);
		
		//新建将要在Post请求体中插入的参数(JSON格式)
		StringEntity strEntity = new StringEntity(ConvertUtil.getRequestBody(resultType, keyword,numType));
		strEntity.setContentEncoding("utf-8");
		//将参数插入请求体
		httpPost.setEntity(strEntity);
		Logger.info(ConvertUtil.getRequestBody(resultType, keyword,numType));
		//设置请求头
		setIndexPostHeader(keyword, httpPost);
		HttpUtil.setRequestConfig(httpPost);
		Logger.info("index post : " + httpPost.getURI());
		
		String result = "";
		//post请求不成功则反复执行
		
		do{
			//执行本次post请求
			Logger.info("连接中...");
			response = httpClient.execute(httpPost);
			Logger.info("连接是否成功： " + response.getStatusLine());
			if(HttpStatus.SC_OK != response.getStatusLine().getStatusCode()) {
				//连接没有成功
				httpPost.abort();
				flag = false;
			}
		}while( !flag );
		
			//response 200成功才会跳出循环 
			HttpEntity entity =  response.getEntity();
			String temp =EntityUtils.toString(entity,"utf-8");
			if( (temp != null) && (temp.length()>0) ) {
				result = ConvertUtil.getIndexAnalysisJson(temp, resultType);
				Logger.info(result);
			}
		
		//通过连接池来关闭repsonse
		connectionManager.close(response);
		return result;
	}


	
	/**
	 * 指数分析界面用到的抓取策略
	 * @throws ClientProtocolException
	 * @throws IOException
	 */
	public String getCaculateData(String keyword,String groupName,String urlName) throws ClientProtocolException, IOException {
		
		//httpClient使用cookie保存上下文信息，以便后续的Ajax请求携带Cookie访问
		CloseableHttpClient httpClient =  connectionManager.getHttpClient();
		
		HttpGet httpGet = new HttpGet(CACULATE_SEARCH_URL 
				+ URLEncoder.encode(keyword, "UTF-8")
				+ CACULATE_SEARCH_URL_TAIL 
				+ URLEncoder.encode(HttpUtil.setGMCTime(), "UTF-8"));

		HttpUtil.setRequestConfig(httpGet);
		CloseableHttpResponse response = null;

		//如果请求成功则打印输出响应的JSON内容
		String result = "";
		Logger.info("连接中...");
		response =  httpClient.execute(httpGet);
		Logger.info("本次连接是否成功 ： "+response.getStatusLine());
		if(HttpStatus.SC_OK != response.getStatusLine().getStatusCode() &&
				result.indexOf("<!DOCTYPE html PUBLIC") == -1) {
			//不成功
			return "error:" + response.getStatusLine();
		}else {
			HttpEntity entity =  response.getEntity();
			result = EntityUtils.toString(entity,"utf-8");
			Logger.info("成功获取到的结果：" + result );
		}

		
		/*HttpEntity entity =  response.getEntity();
		String temp = EntityUtils.toString(entity,"utf-8");
		Logger.info("成功获取到返回结果 : " + temp);
		*/
		//成功后跳出循环
		HttpPost httpPost = new HttpPost(CACULATE_AJAX_URL+urlName);
		Logger.info(CACULATE_AJAX_URL+urlName);
		HttpUtil.setRequestConfig(httpPost);
		setCaculateHeader(httpPost);
		//执行psot请求
		StringEntity strEntity = new StringEntity("pagename=ASP.brief_default_result_aspx&dbPrefix=SCDB&groupName="
				+ URLEncoder.encode(groupName,"utf-8")
				+"&groupCode="
				+ ConvertUtil.getGroupCode(groupName)
				+ "&valueType=3");
		Logger.info(strEntity.toString());
		//将字符串中的关键词参数进行编码转换，否则不识别，返回json字符串中是乱码 统计数据也是错的
		strEntity.setContentEncoding("utf-8");
		//将参数插入请求体
		httpPost.setEntity(strEntity);
		CloseableHttpResponse response2 = null;
		
		
		//执行本次post请求
		Logger.info("连接中...");
		response2 = httpClient.execute(httpPost);
		Logger.info("本次连接是否成功 ： "+response2.getStatusLine());
			
		if(HttpStatus.SC_OK != response2.getStatusLine().getStatusCode() && result.indexOf("<!DOCTYPE html PUBLIC") == -1) {
			Logger.info("error " + response2.getStatusLine());
		}else {
			HttpEntity entity =  response2.getEntity();
			result = EntityUtils.toString(entity,"utf-8");
			Logger.info("获取到有效的返回结果 : " + result);
		}
		
		//清空Cooike
		//关闭httpClient连接
		Logger.info("即将关闭本次连接的Response");
		connectionManager.close(response);
		connectionManager.close(response2);
		return result;
	}

	
	
	
	/**
	 * 设置指数分析的请求头
	 * */
	private void setIndexGetHeader(HttpGet httpGet) {

		httpGet.setHeader("Accept-Encoding","gzip,deflate");
		httpGet.setHeader("Accept-language","zh-CN,zh;q=0.9");
		httpGet.setHeader("Cache-Control","no-cache");
		httpGet.setHeader("Connection","keep-alive");
		httpGet.setHeader("Host","kns.cnki.net");
		httpGet.setHeader("Pragma","no-cache");
		httpGet.setHeader("Proxy-Connection","keep-alive");
		httpGet.setHeader("Referer","http://kns.cnki.net/kns/brief/default_result.aspx");
		httpGet.setHeader("User-Agent","Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36");

	}
	

	
	/**
	 * 设置计量可视化分析的请求头
	 * */
	private static void setCaculateHeader(HttpPost httpPost) {
		
		httpPost.setHeader("Accept-Encoding","gzip,deflate");
		httpPost.setHeader("Accept","text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
		httpPost.setHeader("Accept-language","zh-CN,zh;q=0.9");
		httpPost.setHeader("Cache-Control","no-cache");
		httpPost.setHeader("Content-type"," application/x-www-form-urlencoded");
		httpPost.setHeader("Host","kns.cnki.net");
		httpPost.setHeader("Origin", "http://kns.cnki.net");
		httpPost.setHeader("Pragma","no-cache");
		httpPost.setHeader("Connection","keep-alive");
		httpPost.setHeader("Cache-Control","max-age=0");
		httpPost.setHeader("Upgrade-Insecure-Requests","1");
		httpPost.setHeader("Referer","http://kns.cnki.net/kns/Visualization/VisualCenter.aspx");
		httpPost.setHeader("User-Agent","Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36");
		httpPost.setHeader("X-Requested-With","XMLHttpRequest");

	}
	
	private static void setIndexPostHeader(String keyword, HttpPost httpPost) throws UnsupportedEncodingException {
		//设置post请求头
		httpPost.setHeader("Accept","application/json, text/javascript, */*");
		httpPost.setHeader("Accept-Encoding","gzip,deflate");
		httpPost.setHeader("Accept-language","zh-CN,zh;q=0.9");
		httpPost.setHeader("Cache-Control","no-cache");
		httpPost.setHeader("Content-type","application/json");
		httpPost.setHeader("Host","kns.cnki.net");
		httpPost.setHeader("Origin", "http://kns.cnki.net");
		httpPost.setHeader("Pragma","no-cache");
		httpPost.setHeader("Proxy-Connection","keep-alive");
		//URLEncoder本身不会对字母和数字进行编码  不做额外转换
		httpPost.setHeader("Referer","http://kns.cnki.net/kns/CnkiIndex/CnkiIndexResult.aspx"
				+ "?sval=" + URLEncoder.encode(keyword, "UTF-8")
				+ "&xkcode=*");
		httpPost.setHeader("User-Agent","Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36");
		httpPost.setHeader("X-Requested-With","XMLHttpRequest");

	}


}
