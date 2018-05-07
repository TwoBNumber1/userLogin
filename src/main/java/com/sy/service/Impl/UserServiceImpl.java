package com.sy.service.Impl;

import java.util.List;

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

	/**
	 * 用户注册 即添加用户
	 */
	@Override
	public int registerByUsernameAndPassword(String username, String password) {
		// TODO Auto-generated method stub
		return userDao.registerByUsernameAndPassword(username, password);
	}
	/**
	 * 用户登录
	 * 
	 */

	/**
	 * 获取历史记录
	 */
	@Override
	public List<String> getHistory(String username) {
		// TODO Auto-generated method stub
		return userDao.findHistoryByUsername(username);
	}
/**
 * 添加历史记录
 */
	@Override
	public int addHistory(String username, String content) {
		// TODO Auto-generated method stub
		return userDao.addHistoryByUsername(username,content);
	}
	/**
	 * 添加或修改刷新时间
	 */
	@Override
	public int updateInterval(String username, String content) {
		// TODO Auto-generated method stub
		if(findInterval(username) == null) {
			return userDao.addIntervalByUsername(username, content);
		}else {
			return userDao.updateIntervalTimeByUsername(username, content);
		}
	}
	
	@Override
	public String findInterval(String username) {
		// TODO Auto-generated method stub
		return userDao.findIntervalByUsername(username);
	}

	
	
	
}
