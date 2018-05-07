package com.sy.controller;

import java.text.SimpleDateFormat;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.util.ByteSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.google.gson.Gson;
import com.sy.entity.User;
import com.sy.service.UserService;
import com.sy.util.AjaxResponse;

@Controller
@RequestMapping("/user")

//这里用了@SessionAttributes，可以直接把model中的user(也就key)放入其中
//这样保证了session中存在user这个对象
@SessionAttributes("user")
public class UserController {
	
	//日志常量
	private static final Logger Logger = LoggerFactory.getLogger(UserController.class);
	@Autowired
	private UserService userService;
	
	//表单提交过来的路径
	@RequestMapping("/checkLogin")
	public String checkLogin(HttpServletResponse response,Model model,
			User user,HttpSession session,HttpServletRequest request) throws Exception{
		/*//调用service方法
		user = userServivce.checkLogin(user.getUsername());
		if(user != null){
			model.addAttribute("user",user);
			return "success";
		}
		return "fail";*/  
		//===============
	       String username=user.getUsername() ;
	       String password=user.getPassword();  
	       if((username!=null && password!=null)){  
	     
	         if(userService.checkLogin(username) != null) {
	        	 	return "data/mainPage";
	           }else {  
	               model.addAttribute("exception","23333");  
	               return "/fail";  
	           }  
	       }
	       return "login";  
	}
	
	/**
	 * 登录
	 * @param username
	 * @param password
	 * @return ajax
	 */
	@RequestMapping("/login")
	@ResponseBody
	public String login(String username,String password,HttpSession session) {
		AjaxResponse response = null;
		//检查到底是不是存在该账号
		if( userService.checkLogin(username) == null ) {
			response = new AjaxResponse(-1, "用户"+username+"不存在");
			Logger.info("[返回信息]:"+response.toString());
			return response.toString();
		}
		//代码走到这里说明账号肯定是存在的
		User user = userService.checkLogin(username);
		Logger.info(user.getUsername());
		Logger.info(user.getPassword());
		//String encodePassword=new Md5Hash(password,username,3).toString();
		String encodePassword = new SimpleHash("md5",password,ByteSource.Util.bytes(username),3).toHex();
		Logger.info("[加密是否成功]:" + encodePassword);
		if(user.getPassword().equals(encodePassword)) {
			//密码相同 登录成功
			session.setAttribute("user", user);	
			response = new AjaxResponse(0, "用户"+username+"：登陆成功");
			
		}else {
			response = new AjaxResponse(-1, "用户名或密码错误");
		}
		Logger.info("[返回信息]:"+response.toString());
		return response.toString();
	}
	
	/**
	 * 注册账号
	 * @param username
	 * @param password
	 * @return
	 */
	@RequestMapping("/register")
	@ResponseBody
	public String addUser(String username,String password) {
		AjaxResponse response = null;
		//先看看是不是注册过的
		if( userService.checkLogin(username) != null ) {
			response = new AjaxResponse(-1, "用户"+username+"已存在");
			Logger.info("[返回信息]:"+response.toString());
			return response.toString();
		}
			
		//String encodePassword=new Md5Hash(password,username,3).toString();
		String encodePassword = new SimpleHash("md5",password,ByteSource.Util.bytes(username),3).toHex();
		Logger.info("[加密是否成功]:" + encodePassword);
		int result = userService.registerByUsernameAndPassword(username, encodePassword);
		Logger.info("[注册是否成功]:"+result);
		if(result > 0) {
			response = new AjaxResponse(0, "用户"+username+"注册成功");
		}else {
			response = new AjaxResponse(-1 ,"用户"+username+"注册失败，请稍后重试");
		}
		Logger.info("[返回信息]:"+response.toString());
		return response.toString();
	}

	/**
	 * 注销登录账号
	 * @param session
	 * @return 
	 */
	@RequestMapping("/outLogin")
	@ResponseBody
	public String outLogin(HttpSession session){
		//通过session.invalidata()方法来注销当前的session
		session.invalidate();
		//session.getAttribute("user");
		AjaxResponse response = new AjaxResponse(0, "注销成功");
		return response.toString();
	}
	
	/**
	 * 获取历史记录
	 * @param username
	 * @param password
	 * @return
	 */
	@RequestMapping("/putRecords")
	@ResponseBody
	public String putRecords(String username,String keyword) {
		//检查是否已经登录，
		Logger.info("[添加历史记录信息]--> username:"+username+" keyword:"+keyword);
		AjaxResponse response = null;
		//检查到底是不是存在该账号
		if( userService.checkLogin(username) == null ) {
			response = new AjaxResponse(-1, "用户"+username+"不存在");
			Logger.info("[返回信息]:"+response.toString());
			return response.toString();
		}
		//代码走到这里说明账号肯定是存在的

		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		if( userService.addHistory(username, keyword+","+df.format(System.currentTimeMillis())) >0) {
			//操作记录条件>0 即操作成功
			response = new AjaxResponse(0, "本次添加历史记录操作成功，添加词汇："+keyword);
		}
		//Logger.info("[历史记录信息]："+result.toString());
		Logger.info("[返回信息]:"+response.toString());
		return response.toString();
	}
	
	/**
	 * 获取历史记录
	 * @param username
	 * @param password
	 * @return
	 */
	@RequestMapping("/getRecords")
	@ResponseBody
	public String getRecords(String username) {
		//检查是否已经登录
		AjaxResponse response = null;
		//检查到底是不是存在该账号
		if( userService.checkLogin(username) == null ) {
			response = new AjaxResponse(-1, "用户"+username+"不存在");
			Logger.info("[返回信息]:"+response.toString());
			return response.toString();
		}
		//代码走到这里说明账号肯定是存在的
		List<String> list = userService.getHistory(username);
		if(list.size() > 0) {
			response  = new AjaxResponse(0, "返回成功");
		}else {
			response = new AjaxResponse(-1, "当前用户还没有进行过搜索");
		}
		//String encodePassword=new Md5Hash(password,username,3).toString();
		StringBuilder result = new StringBuilder();
		for(String str : list) {
			result.append(str+"\t");
		}
		Logger.info("[历史记录信息]："+result.toString());
		response.addDataItem("data",new Gson().toJson(list));
		Logger.info("[返回信息]:"+response.toString());
		return response.toString();
	}
	
	/**
	 * 获取刷新间隔
	 * @param username
	 * @return
	 */
	@RequestMapping("/getInterval")
	@ResponseBody
	public String getInterval(String username) {
		//检查是否已经登录
		AjaxResponse response = null;
		//检查到底是不是存在该账号
		if( userService.checkLogin(username) == null ) {
			response = new AjaxResponse(-1, "用户"+username+"不存在");
			Logger.info("[返回信息]:"+response.toString());
			return response.toString();
		}
		//代码走到这里说明账号肯定是存在的
		String interval = userService.findInterval(username);
		if( interval == null ) {
			//默认就是5分钟
			response = new AjaxResponse(0, "用户没有保存该设置，为您返回默认配置");
			response.addDataItem("interval", "30000");
		}else {
			response = new AjaxResponse(0, "查询成功");
			response.addDataItem("interval", interval);
		}
		Logger.info("[刷新时间信息]："+interval);
		Logger.info("[返回信息]:"+response.toString());
		return response.toString();
	}
	
	
	/**
	 * 获取刷新间隔
	 * @param username
	 * @return
	 */
	@RequestMapping("/setInterval")
	@ResponseBody
	public String setInterval(String username,String interval) {
		//检查是否已经登录
		AjaxResponse response = null;
		//检查到底是不是存在该账号
		if( userService.checkLogin(username) == null ) {
			response = new AjaxResponse(-1, "用户"+username+"不存在");
			Logger.info("[返回信息]:"+response.toString());
			return response.toString();
		}
		//代码走到这里说明账号肯定是存在的
		int result = userService.updateInterval(username, interval);
		if( result > 0  ) {
			response = new AjaxResponse(0, "用户"+username+"保存间隔刷新时间成功");
		}else {
			response = new AjaxResponse(-1, "用户"+username+"保存间隔刷新时间失败，仍然沿用从前的刷新时间");
		}
		Logger.info("[刷新时间信息]："+interval);
		Logger.info("[返回信息]:"+response.toString());
		return response.toString();
	}
	
	/**
	 * 获取用户信息
	 * @param username
	 * @return
	 */
	@RequestMapping("/getInfo")
	@ResponseBody
	public String getUser(HttpSession session) {
		//检查是否已经登录
		AjaxResponse response = null;
		Object obj  = session.getAttribute("user");
		if( obj == null ) {
			response = new AjaxResponse(-1, "没有已登陆的用户信息");
		}else {
			User user = (User) obj;
			response = new AjaxResponse(0, user.getUsername());
		}
		//代码走到这里说明账号肯定是存在的
	
		Logger.info("[返回信息]:"+response.toString());
		return response.toString();
	}
}
