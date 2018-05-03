package com.sy.controller;

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
	
	
	
	//正常访问login页面
	@RequestMapping("/login")
	public String toLogin(){
		return "login";
	}
	
	//正常访问注册界面
	@RequestMapping("/register")
	public String toRegister() {
		return "register";
	}
	
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
	 * 注册账号
	 * @param model
	 * @param username
	 * @param password
	 * @return
	 */
	@RequestMapping("/add")
	@ResponseBody
	public String addUser(Model model , String username,String password) {
		AjaxResponse response;
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
	
	@RequestMapping("/addUser")
	public String add() {
		return "addUser";
		
	}
	
	//测试超链接跳转到另一个页面是否可以取到session值
	@RequestMapping("/anotherpage")
	public String hrefpage(){
		
		return "anotherpage";
	}
	
	//注销方法
	@RequestMapping("/outLogin")
	public String outLogin(HttpSession session){
		//通过session.invalidata()方法来注销当前的session
		session.invalidate();
		return "login";
	}
}
