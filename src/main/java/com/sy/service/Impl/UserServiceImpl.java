package com.sy.service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sy.dao.UserDao;
import com.sy.entity.User;
import com.sy.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDao userDao;
	
	/* 
	 * 检验用户登录业务
	 * 
	 */
	public User checkLogin(String username) {
		
		User user = userDao.findByUsername(username);
		if(user != null ){
			return user;
		}
		return null;
	}

	@Override
	public int registerByUsernameAndPassword(String username, String password) {
		// TODO Auto-generated method stub
		return userDao.registerByUsernameAndPassword(username, password);
	}
	
	
}
