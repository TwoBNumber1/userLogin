package com.sy.service;


import org.apache.ibatis.annotations.Param;

import com.sy.entity.User;

//Service层接口
public interface UserService {
	
	//检验用户登录
	User checkLogin(String username);
	int registerByUsernameAndPassword(@Param("username")String username,
			@Param("password")String password);
}


