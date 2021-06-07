package 숙작;
/*
피보나치 수열(재귀)
 */
public class 피보나치재귀 {
    static int[] fibo;
    public int DFS(int n){
        if(fibo[n]>0) return fibo[n];
        if(n == 1) return fibo[n]=1;
        else if(n==2) return fibo[n]=1;
        else return fibo[n]=DFS(n-2)+DFS(n-1);
    }
    public static void main(String[] args) {
        피보나치재귀 M = new 피보나치재귀();
        int n = 45;
        fibo = new int[n+1];
        M.DFS(n);
        for(int i=1; i<=n; i++) System.out.print(fibo[i] + " ");
    }
}
