package com.sy.tets;


import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.config.IniSecurityManagerFactory;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.Factory;
import org.junit.Test;

import junit.framework.Assert;

public class LoginLogoutTest {

	
	
	@Test
	public void testHelloWorld() {
		
		//获取SecurityManager工厂 使用Ini文件初始化SecurityManager
		Factory<org.apache.shiro.mgt.SecurityManager> factory =
					new IniSecurityManagerFactory("classpath:shiro.ini");
		//得到SecurityManager实例 并绑定给SecurityUntils
		org.apache.shiro.mgt.SecurityManager securityManager = factory.getInstance();
		SecurityUtils.setSecurityManager(securityManager);
		//得到Subject及创建用户名/密码身份验证Token
		Subject subject = SecurityUtils.getSubject();
		UsernamePasswordToken token = new UsernamePasswordToken("zhang","123");
		
		try {
			//登录  即身份验证
			subject.login(token);
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			
			e.printStackTrace();
		}
		//断言用户已经登录
		Assert.assertEquals(true, subject.isAuthenticated());
		System.out.println("？？？");
		subject.logout();
		
		
	}
}
