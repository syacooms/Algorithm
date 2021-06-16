package 숙작;

/*
첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다.
단 공집합은 출력하지 않습니다.

입력예제 1
1 2 3
1 2
1 3
1
2 3
2
3
 */
public class 부분집합구하기 {
    static int n;
    static int[] ch;
    public void DFS(int L){
        if(L==n+1){
            String tmp = "";
            for(int i=1; i<=n; i++){
                if(ch[i]==1) tmp+=(i+" ");
            }
            if(tmp.length()>0) System.out.println(tmp);
        }else{
            ch[L]=1;
            DFS(L+1);
            ch[L]=0;
            DFS(L+1);
        }
    }
    public static void main(String[] args) {
        부분집합구하기 M = new 부분집합구하기();
        n = 3;
        ch = new int[n+1];
        M.DFS(1);
    }
}
