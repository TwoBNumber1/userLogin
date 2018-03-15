package com.sy.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.sy.util.MapDataUtil;

@Controller
@RequestMapping("/map")

public class MapDataController {

	//private static final HtmlPage page = HttpUtil.getWebFirstPage(webClient);
	private static final Logger Logger = LoggerFactory.getLogger(MapDataController.class);
	@RequestMapping(value="/location",produces="text/html;charset=UTF-8")
	@ResponseBody
	public String getLocation(String address) {
		System.out.println("address string is :" +address);
		String result = MapDataUtil.getLocation(address);
		Logger.info(result);
		return result;
	}
}
