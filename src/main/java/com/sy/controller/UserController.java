package com.sy.controller;

import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.ByteSource;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.sy.entity.User;
import com.sy.gt.GeetestConfig;
import com.sy.gt.GeetestLib;
import com.sy.service.UserService;

@Controller
@RequestMapping("/user")

//这里用了@SessionAttributes，可以直接把model中的user(也就key)放入其中
//这样保证了session中存在user这个对象
@SessionAttributes("user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/main")
	public String testMain() {
		return "data/mainPage";
	}
	
	
	
	
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
	
	
	
	
	@RequestMapping("/add")
	public String addUser(Model model , String username,String password) {

		//String encodePassword=new Md5Hash(password,username,3).toString();
		String encodePassword = new SimpleHash("md5",password,ByteSource.Util.bytes(username),3).toHex();
		userService.registerByUsernameAndPassword(username, encodePassword);
		System.out.println("encodePassword-->" + encodePassword);
		return "login";
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
