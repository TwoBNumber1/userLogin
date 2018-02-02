package com.sy.realm;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.realm.Realm;

public class MyRealm1 implements Realm{

	@Override
	public AuthenticationInfo getAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		// TODO Auto-generated method stub
		String username = (String) token.getPrincipal();//得到用户名
		String password = (String) token.getCredentials();//得到密码
		if( !"zhang".equals(username) ) {
			throw new UnknownAccountException();
		}
		if( !"123".equals(password) ) {
			throw new IncorrectCredentialsException();
		}
		//r如果身份验证成功 返回一个AuthenticationInfo的实现
		return new SimpleAuthenticationInfo();
	}

	@Override
	public String getName() {
		// TODO Auto-generated method stub
		return "Myrealm1";
	}

	@Override
	public boolean supports(AuthenticationToken token) {
		// TODO Auto-generated method stub
		//仅支持UsernamePasswordToken类型的Token;
		return token instanceof UsernamePasswordToken;
	}

}
