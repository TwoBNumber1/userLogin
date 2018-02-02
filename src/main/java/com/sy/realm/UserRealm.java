package com.sy.realm;



import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.credential.HashedCredentialsMatcher;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.crypto.hash.Md5Hash;
import org.apache.shiro.crypto.hash.SimpleHash;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.util.ByteSource;
import org.springframework.beans.factory.annotation.Autowired;

import com.sy.entity.User;
import com.sy.service.UserService;
import com.sy.service.Impl.UserServiceImpl;

public class UserRealm extends AuthorizingRealm{

	  //用来测试的算出密码password盐值加密后的结果，
	//下面方法用于新增用户添加到数据库操作的，我这里就直接用main获得，直接数据库添加了，省时间
   /* public static void main(String[] args) {
    	 String saltSource = "abcdef";    
         String hashAlgorithmName = "MD5";
         String credentials = "passwor";
         Object salt = new Md5Hash(saltSource);
         int hashIterations = 1024;            
         Object result = new SimpleHash(hashAlgorithmName, credentials, salt, hashIterations);
         System.out.println(result);
	}*/
	@Autowired
	private UserService userServivce;
	/**
	 * 鎺堟潈
	 */
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	/**
	 * 楠岃瘉
	 */
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
		// TODO Auto-generated method stub
		  //1. token 中获取登录的 username! 注意不需要获取password.
		String principal = (String) token.getPrincipal();
		String password = "";
		 //2. 利用 username 查询数据库得到用户的信息. 
		User user = userServivce.checkLogin(principal);
		if(user != null) {
			password = user.getPassword();
		}
		String credentials = password;
	      //3.设置盐值 ，（加密的调料，让加密出来的东西更具安全性，一般是通过数据库查询出来的。 
		//简单的说，就是把密码根据特定的东西而进行动态加密，如果别人不知道你的盐值，就解不出你的密码）

		ByteSource credentialsSalt = ByteSource.Util.bytes(principal);
		

	     //当前 Realm 的name

		String realmName = getName();
		   //返回值实例化
		SimpleAuthenticationInfo info =
				new SimpleAuthenticationInfo(principal,credentials,credentialsSalt, realmName);
		return info;

	}
	
	
    //init-method 配置. 
    public void setCredentialMatcher(){
        HashedCredentialsMatcher  credentialsMatcher = new HashedCredentialsMatcher();    
        credentialsMatcher.setHashAlgorithmName("MD5");//MD5算法加密
        credentialsMatcher.setHashIterations(1024);//1024次循环加密      
        setCredentialsMatcher(credentialsMatcher);
    }

  

}
