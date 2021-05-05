package 숙작;

import java.util.*;

public class K번째큰수 {
    // 트리셋 안써봐서 강의 봣음.
    public int solution(int n, int k, int[] arr){
        int answer = -1;
        // 기본적으로 오름차순 -> reverseOrder 내림차순
        TreeSet<Integer> Tset = new TreeSet<>(Collections.reverseOrder());
        for(int i=0; i<n; i++){
            for(int j=i+1; j<n; j++){
                for(int l=j+1; l<n; l++){
                    Tset.add(arr[i]+arr[j]+arr[l]);

                }
            }
        }
        int cnt=0;
        //값 지우기
        //Tset.remove(143);
        //사이즈
        //System.out.println(Tset.size());
        //첫번째
        //Tset.first();
        //마지막
        //Tset.last();

        for(int x : Tset){
            cnt++;
            if(cnt==k) return x;
        }

        return answer;
    }
    public static void main(String[] args) {
        K번째큰수 M = new K번째큰수();
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] arr = new int[n];

        for(int i=0; i<n; i++){
            arr[i] = sc.nextInt();
        }

        System.out.println(M.solution(n,k,arr));
    }
}
