package 숙작;

/*
이진트리순회(DFS)
전위순회 : 부모 - 왼쪽자식 - 오른쪽자식
1 2 4 5 3 6 7
중위순회 : 왼쪽 자식 왼쪽노드부터 -> root -> 오른쪽 자식 왼쪽노드부터
4 2 5 1 6 3 7
후위순회 : 왼쪽 자식 끝 노드부터 -> 오른쪽 자식 끝 노드부터 -> root
4 5 2 6 7 3 1
 */
class Node{
    int data;
    Node2 lt, rt;
    public Node(int val){
        data = val;
        lt=rt=null;
    }
}
public class 이진트리순회 {
    Node2 root;
    public void DFS(Node2 root){
        if(root==null) return;
        else{
            //전위순회
            //System.out.print(root.data+" ");
            DFS(root.lt);
            //중위순회
            //System.out.print(root.data+" ");
            DFS(root.rt);
            //후위순회
            System.out.print(root.data+" ");
        }
    }
    public static void main(String[] args) {
        이진트리순회 tree = new 이진트리순회();
        tree.root=new Node2(1);
        tree.root.lt=new Node2(2);
        tree.root.rt=new Node2(3);
        tree.root.lt.lt=new Node2(4);
        tree.root.lt.rt=new Node2(5);
        tree.root.rt.lt=new Node2(6);
        tree.root.rt.rt=new Node2(7);
        tree.DFS(tree.root);
    }
}
