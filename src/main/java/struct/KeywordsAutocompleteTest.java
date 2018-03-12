package struct;


import org.junit.Assert;
import org.junit.Test;

import com.google.common.collect.Lists;

/**
 * Created by zhangcheng on 15/3/5.
 */
public class KeywordsAutocompleteTest {

    KeywordsAutocomplete kac;

    @Test
    public void testSearch() throws Exception {
        kac = new KeywordsAutocomplete("en");
//        kac.load("");
        kac.add("abc");
        Assert.assertEquals("abc", Lists.newLinkedList(kac.search("ab")).get(0));
        kac.add("中国");
        Assert.assertEquals("中国", Lists.newLinkedList(kac.search("中")).get(0));
        Assert.assertEquals("中国", Lists.newLinkedList(kac.search("中国")).get(0));
        Assert.assertEquals("中国", Lists.newLinkedList(kac.search("zg")).get(0));
        Assert.assertEquals("中国", Lists.newLinkedList(kac.search("zhong")).get(0));

    }
}
