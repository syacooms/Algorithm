package 숙작;

class Node3 {
    int data;
    Node3 rt,lt;
    public Node3(int val){
        data=val;
        rt=lt=null;
    }
}
// 자바스크립트로 해본 거 같은 기본 문제.
public class 짧은경로DFS {
    Node3 root;
    public int DFS(int L, Node3 root){
        if(root.lt==null && root.rt==null) return L;
        else return Math.min(DFS(L+1,root.lt),DFS(L+1, root.rt));
    }
    public static void main(String[] args) {
        짧은경로DFS tree = new 짧은경로DFS();
        tree.root=new Node3(1);
        tree.root.lt=new Node3(2);
        tree.root.rt=new Node3(3);
        tree.root.lt.lt=new Node3(4);
        tree.root.lt.rt=new Node3(5);

        System.out.println(tree.DFS(0, tree.root));
    }
}
