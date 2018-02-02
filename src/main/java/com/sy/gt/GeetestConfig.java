package com.sy.gt;

public class GeetestConfig {
    // 填入自己的captcha_id和private_key  
    private static final String geetest_id = "dbf9ea5b79be189e1a2a8aebb8472000";  
    private static final String geetest_key = "49920fb8c74c67188d2b9de0c9ca8f3f";  
    private static final boolean newfailback = true;  
  
    public static final String getGeetest_id() {  
        return geetest_id;  
    }  
  
    public static final String getGeetest_key() {  
        return geetest_key;  
    }  
      
    public static final boolean isnewfailback() {  
        return newfailback;  
    }
}
