package 숙작;

import java.util.LinkedList;
import java.util.Queue;

/*
이진트리순회 BFS
레벨 탐색 순회 출력 : 1 2 3 4 5 6 7
 */
class Node2 {
    int data;
    Node2 lt, rt;
    public Node2(int val) {
        data=val;
        lt=rt=null;
    }
}
public class 이진트리레벨탐색 {
    Node2 root;
    public void BFS(Node2 root){
        Queue<Node2> Q = new LinkedList<>();
        Q.offer(root);
        int L=0;
        while(!Q.isEmpty()){
            int len = Q.size();
            System.out.print(L+" : ");
            for(int i=0; i<len;i++){
                Node2 cur = Q.poll();
                System.out.print(cur.data+" ");
                if(cur.lt!=null) Q.offer(cur.lt);
                if(cur.rt!=null) Q.offer(cur.rt);
            }
            L++;
        }
    }
    public static void main(String[] args) {
        이진트리레벨탐색 tree = new 이진트리레벨탐색();
        tree.root=new Node2(1);
        tree.root.lt=new Node2(2);
        tree.root.rt=new Node2(3);
        tree.root.lt.lt=new Node2(4);
        tree.root.lt.rt=new Node2(5);
        tree.root.rt.lt=new Node2(6);
        tree.root.rt.rt=new Node2(7);
        tree.BFS(tree.root);
    }

}
