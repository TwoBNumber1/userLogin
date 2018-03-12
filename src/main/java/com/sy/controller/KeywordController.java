package com.sy.controller;

import java.io.IOException;

import javax.servlet.ServletConfig;

import org.apache.http.client.ClientProtocolException;
import org.junit.Assert;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.ServletConfigAware;

import com.github.stuxuhai.jpinyin.PinyinException;
import com.google.common.collect.Lists;
import com.sy.crawl.HttpCrawl;


import struct.KeywordsAutocomplete;

@Controller
@RequestMapping("/search")

public class KeywordController implements InitializingBean,ServletConfigAware {

	//private static final HtmlPage page = HttpUtil.getWebFirstPage(webClient);
	private static final Logger Logger = LoggerFactory.getLogger(KeywordController.class);


	@Autowired
	HttpCrawl httpCrawl;

	
	KeywordsAutocomplete kac;
		
	
	@RequestMapping(value="/prefix",produces="text/html;charset=UTF-8")
	@ResponseBody
	public String getSearch(String prefix) {
	
		return kac.search(prefix).toString();
	}
	
	
	@Override
	public void setServletConfig(ServletConfig arg0) {
		// TODO Auto-generated method stub
		   try {
			   System.out.println("加载keywordautocomplete到内存...");
			   kac = new KeywordsAutocomplete("ch");
			   //读文件，加载进内存23333
			   Logger.info("模拟读文件...");
			   kac.add("abc");
			   kac.add("中国");
		} catch (PinyinException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	        System.out.println( Lists.newLinkedList(kac.search("ab")).get(0));
	        System.out.println( Lists.newLinkedList(kac.search("中")).get(0));
	        System.out.println( Lists.newLinkedList(kac.search("中国")).get(0));
	        System.out.println( Lists.newLinkedList(kac.search("zhong")).get(0));

	}

	@Override
	public void afterPropertiesSet() throws Exception {
		// TODO Auto-generated method stub
		
	}
	

	
	


}
