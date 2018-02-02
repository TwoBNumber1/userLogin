package com.sy.tets;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.google.gson.JsonPrimitive;

public class GsonTest {

	public static void main(String[] args) {
		String str = "{\"d\":\"[{\\u0027key\\u0027:[\\u0027遗传多样性\\u0027,\\u0027肝豆状核变性\\u0027,\\u0027基因突变\\u0027,\\u0027多态性\\u0027,\\u0027基因\\u0027],\\u0027cnt\\u0027:[6,5,4,4,3]}]\"}";
		//新建Gson对象
		Gson gson = new GsonBuilder()
				.setPrettyPrinting()//设置格式化输出
				.disableHtmlEscaping()//且解析时不对特殊字符转义
				.create();
		//json解析器
		JsonParser parser = new JsonParser();
		//将字符串解析成Json元素
		JsonObject responseJson = parser.parse(str).getAsJsonObject();
		JsonElement d = responseJson.get("d");
		String jsonStr = d.toString().substring(2, d.toString().length()-2);
		System.out.println(jsonStr);
		JsonObject json = parser.parse(jsonStr).getAsJsonObject();
		System.out.println(json);
		System.out.println(json.get("key"));
		//gson.toJson(responseJson);
	
	}
}
