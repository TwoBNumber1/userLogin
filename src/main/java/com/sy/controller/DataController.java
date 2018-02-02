package com.sy.controller;

import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sy.crawl.HttpCrawl;
import com.sy.util.AjaxResponse;

@Controller
@RequestMapping("/data")

public class DataController {

	//private static final HtmlPage page = HttpUtil.getWebFirstPage(webClient);
	private static final Logger Logger = LoggerFactory.getLogger(DataController.class);


	@Autowired
	HttpCrawl httpCrawl;

	
	@RequestMapping("/getData")
	public String showResult(String keyword) {
		System.out.println("keyword = "+keyword );
		return "data/show_result";
	}
	
	@RequestMapping("/index_data")
	public String returnIndexData(String keyword) {
		System.out.println("keyword = "+keyword );
		return "data/index_data";
	}
	
	
	
	@RequestMapping("/index3")
	public String testIndex3() {
		return "data/index308";
	}
	@RequestMapping("/mapDistribute")
	public String testMain() {
		return "data/mapDistribute";
	}
	
	@RequestMapping("/caculate")
	@ResponseBody
	public String testCaculate(String keyword,String groupName,String urlName) {
		
		String result = "";
		AjaxResponse response = null;
		try {
			result = httpCrawl.getCaculateData(keyword,groupName,urlName);
			if(result != null && result.length()>0) {
				response = new AjaxResponse(0, "成功获取数据");
				response.addDataItem("ret",result);
			}else {
				response = new AjaxResponse(-1, "失败：计量数据返回空");
			}
		} catch (Exception e) {
			response = new AjaxResponse(-1, "失败："+e.getMessage());
			
		}
		return response.toString();
	}
	

	//正常访问文献发表量页面
	@RequestMapping(value = "/docuPublication")
	public String toDocu(String dataType,String keyword){
		System.out.println("请求参数" + dataType);
		System.out.println("请求参数 keyword" +keyword);
		return "data/docuPublication";
	}
	
	//正常访问文献发表量页面
		@RequestMapping(value = "/wordDistribute")
		public String toWord(){

			return "data/wordDistribute";
		}
	
	/**
	 * keyon 才触发
	 * @param topSearch
	 * @return
	 */
	@SuppressWarnings("null")
	@RequestMapping(value = "/getIndexData", method = RequestMethod.GET)
	@ResponseBody
	public String getIndexData(String topSearch,String resultType,String numType) {	
		//假设获得的是已经经过验证的关键词 (前端验证非空)
		//创建存放json数据结果的字符串
		AjaxResponse response = null;

		String result = "";
		try {

			Logger.info("-------------Controller keyword");
			result = httpCrawl.getIndexData(topSearch, resultType,numType);
			if(result != null && result.length()>0) {
				response = new AjaxResponse(0, "获取数据成功");
				response.addDataItem("ret", result);
			}
		} catch (Exception e) {
			response = new AjaxResponse(-1, "失败："+e.getMessage());
		}

		return response.toString();
	}
	
	

	@ResponseBody
	@RequestMapping(value = "/getCaculateData", method = RequestMethod.POST)
	public String getCaculateData(String keyword,String groupName) {
	//调用HttpClient 传入用户输入的关键词
		String result = "";
		AjaxResponse response = null;
		//开启线程调用HttpUnit or 最初就开启一个页面等待关键词 获得Cookie后即可关闭
		try {
			result = httpCrawl.getCaculateData(keyword,groupName,"");
			if(result != null && result.length()>0) {
				response = new AjaxResponse(0, "成功获取数据");
				response.addDataItem("ret",result);
			}else {
				response = new AjaxResponse(-1, "失败：计量数据返回空");
			}
		} catch (Exception e) {
			response = new AjaxResponse(-1, "失败："+e.getMessage());
		}
		return response.toString();
	}
}
