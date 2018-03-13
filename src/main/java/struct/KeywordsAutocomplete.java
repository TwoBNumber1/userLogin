package struct;

import com.github.stuxuhai.jpinyin.PinyinException;
import com.github.stuxuhai.jpinyin.PinyinFormat;
import com.github.stuxuhai.jpinyin.PinyinHelper;
import com.google.common.base.Charsets;
import com.google.common.base.Function;
import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import com.google.common.collect.Sets;
import com.google.common.io.Files;
import com.sy.crawl.HttpConnectionManager;

import java.io.File;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.http.conn.HttpClientConnectionManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * Created by zhangcheng on 15/3/5.
 */
@Component
public class KeywordsAutocomplete {

	private static final Logger Logger = LoggerFactory.getLogger(KeywordsAutocomplete.class);
    private String lang = "en";
    private TernarySearchTree tst;
    //��׺Map
    private Map<String, String> suffixMap;

    /**
     * ���캯��
     * @param lang
     */
    public KeywordsAutocomplete(String lang) {
        if (null != lang)
            this.lang = lang;
        tst = new TernarySearchTree();
        suffixMap = Maps.newHashMap();
        Logger.info("�����߳�...");
        new KeywordMonitorThread(this).start();
    }

    /**
     * ��Ӻ�׺
     * @param text
     * @param tst
     * @throws PinyinException 
     */
    private void suffixAdd(String text, TernarySearchTree tst) throws PinyinException{
    	//ֱ�ӷ���һ������Ϊ3������
        List<String> searchTypes = Lists.newArrayListWithCapacity(3);
        //����һ��
        searchTypes.add(text);
        if (lang.equalsIgnoreCase("ch")) {
            searchTypes.add(PinyinHelper.getShortPinyin(text));
            searchTypes.add(PinyinHelper.convertToPinyinString(text, "", PinyinFormat.WITHOUT_TONE));
        }
        for (String str : searchTypes) {
            if (str.length() > 3) {
                for (int i = 0; i < str.length() - 3; ++i) {
                    String key = str.substring(i);
                    tst.add(key);
                    suffixMap.put(key, searchTypes.get(0));
                }
            } else {
                tst.add(str);
                suffixMap.put(str, searchTypes.get(0));
            }
        }
    }

    public void add(String text) throws PinyinException {
        suffixAdd(text, tst);
    }

    public void load(String keywordsFile) throws Exception {
        Files.readLines(new File(keywordsFile), Charsets.UTF_8).stream().forEach(t -> {
            try {
				suffixAdd(t, tst);
			} catch (PinyinException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        });
    }

    /**
     *  ǰ׺��ѯ
     * @param prefix ǰ׺��(����ȫ��)
     * @return Set
     */
    public Set<String> search(String prefix) {
    	//lists.transform ��һ�����͵�listת������һ�����͵�list
    	//��set����� list(������������ƥ���Ԫ��)��ÿ��Ԫ�ص�
        return Sets.newHashSet(Lists.transform(Lists.newLinkedList(tst.keysWithPrefix(prefix)), 
        		new Function<String, String>() {
            @Override
            public String apply(String name) {
                if (suffixMap.containsKey(name)) {
                    return suffixMap.get(name);
                }
                return name;
            }
        }));
    }
    
    // �̣߳�
    private static class KeywordMonitorThread extends Thread {  

    	private final KeywordsAutocomplete autocomplete; 
        private volatile boolean shutdown;  

        public KeywordMonitorThread(KeywordsAutocomplete autocomplete) {  
            super();  
            this.autocomplete = autocomplete;  
        }  

        @Override
        public void run() {  
            try {  
                while (!shutdown) {  
                    synchronized (this) {  
                        wait(60000);
                        Logger.info("ִ��һ��autocomplete����߳�");
                        //ģ��д��...
                        System.out.println("ģ��д���ļ�����...");
                    }  
                }  
            } catch (InterruptedException ex) {  
                ex.printStackTrace();  
            }  
        }  
    } 
}
