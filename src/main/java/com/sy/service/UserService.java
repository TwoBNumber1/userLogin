package com.sy.service;


import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.sy.entity.User;

//Service层接口
public interface UserService {
	
	//检验用户登录
	User checkLogin(String username);
	//添加用户
	int registerByUsernameAndPassword(@Param("username")String username,
			@Param("password")String password);
	//查询历史记录
	List<String> getHistory(String username);
	//添加历史记录
	int addHistory(String username,String content);
	/**
	 * 添加或修改刷新时间
	 */
	int updateInterval(String username,String content);

	//查询刷新时间
	String findInterval(String username);
	
}


