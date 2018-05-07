package com.sy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.sy.entity.User;

public interface UserDao {
	
	
	/**
	 * 查找用户名和密码
	 * @param username 登录用户名 
	 * @param password 密码
	 * @return
	 */
	User findByUsername(String username);

	
	/**
	 * 注册用户和密码
	 * @param username 用户名
	 * @param password 密码
	 * @return
	 */
	int registerByUsernameAndPassword(@Param("username")String username,
										@Param("password")String password);
	/**
	 * 获取历史记录
	 * @param username
	 * @return
	 */
	List<String> findHistoryByUsername(String username);
	/**
	 * 添加历史记录
	 * @param username
	 * @param content
	 * @return
	 */
	int addHistoryByUsername(String username,String content);
	
	int addIntervalByUsername(String username,String interval);
	String findIntervalByUsername(String username);
	int updateIntervalTimeByUsername(String username,String interval);
}
