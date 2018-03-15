package com.sy.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletConfig;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.ServletConfigAware;

import com.github.stuxuhai.jpinyin.PinyinException;
import com.google.common.base.Charsets;
import com.google.common.io.Files;

import struct.KeywordsAutocomplete;

@Controller
@RequestMapping("/search")

public class KeywordController implements InitializingBean,ServletConfigAware {

	//private static final HtmlPage page = HttpUtil.getWebFirstPage(webClient);
	private static final Logger Logger = LoggerFactory.getLogger(KeywordController.class);

	private static final String localPath =  KeywordController.class.getClassLoader().getResource("./").getPath();
	
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
			   System.out.println("localPath"+localPath);
			   File file = new File(localPath+"\\com\\sy\\controller\\words.txt");
			   
			List<String> words = Files.readLines(file, Charsets.UTF_8);
			  
			   Logger.info("词典读取完毕.. ");
			   for(String word : words) {
				   kac.add(word);
			   }
			   Logger.info("词典加载到内存完毕..");
			   System.out.println(kac.search("j"));
		} catch (PinyinException e) {
			// TODO Auto-generated catch block
			Logger.error("拼音转换出错....");
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			Logger.error("词典读取出错");
			e.printStackTrace();
		}

	}

	@Override
	public void afterPropertiesSet() throws Exception {
		// TODO Auto-generated method stub
		
	}
	

	
	


}
