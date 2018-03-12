package struct;



import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Component;
@Component
/**
 * Created by zhangcheng on 15/3/4.
 */
public class TernarySearchTree implements AutoComplete {

	//一个根节点
    private TernaryNode root;
   //
    private int size;

    public TernarySearchTree() {
    }

    public int size() {
        return size;
    }

    //添加一个关键词
    public TernaryNode add(String text, int index, TernaryNode node) {

        char curr = text.charAt(index);

        if (null == node) {
            node = new TernaryNode(curr);
        }
        if (curr < node.label) {
            node.left = add(text, index, node.left);
        } else if (curr > node.label) {
            node.right = add(text, index, node.right);
        } else if (index + 1 == text.length()) {
            node.end = true;
        } else {
            node.mid = add(text, index + 1, node.mid);
        }
        return node;
    }

    @Override
    public void add(String text) {
        if (!contains(text)) size++;
        root = add(text, 0, root);
    }

    @Override
    public void build(List<String> texts) {
        // TODO more efficient?
        texts.forEach(t -> {
            this.add(t);
        });
    }

    private TernaryNode contains(String text, int index, TernaryNode node) {

        if (null == text || text.isEmpty() || null == node) return null;
        char curr = text.charAt(index);

        if (curr < node.label) {
            return contains(text, index, node.left);
        } else if (curr > node.label && null != node.right) {
            return contains(text, index, node.right);
        } else if (index + 1 == text.length()) {
            return node;
        } else
            return contains(text, index + 1, node.mid);
    }

    @Override
    public boolean contains(String text) {
        if (null == text || text.isEmpty()) return false;
        TernaryNode node = contains(text, 0, root);
        return null != node && node.end;
    }

    private void traverse(TernaryNode node, StringBuilder prefix, List<String> keys) {
    	//节点为空时 停止递归
        if (null == node) return;
        //递归
        traverse(node.left, prefix, keys);
        //节点递归到底
        if (node.end) keys.add(prefix.toString() + node.label);
        traverse(node.mid, prefix.append(node.label), keys);
        prefix.deleteCharAt(prefix.length() - 1);
        traverse(node.right, prefix, keys);
    }

    /**
     * 根据全部匹配
     */
    @Override
    public Iterable<String> keys() {
        List<String> keys = new LinkedList<>();
        traverse(root, new StringBuilder(), keys);
        return keys;

    }

    @Override
    /**
     * 根据前缀匹配
     */
    public Iterable<String> keysWithPrefix(String prefix) {
        List<String> keys = new LinkedList<>();
        TernaryNode node = contains(prefix, 0, root);
        if (null == node) return keys;
        if (node.end) keys.add(prefix);
        traverse(node.mid, new StringBuilder(prefix), keys);
        return keys;
    }
}
