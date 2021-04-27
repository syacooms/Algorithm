package 숙작;


import java.util.*;
/*
2. 공통원소 구하기
설명

A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.


입력
첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.

두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.

세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.

네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.

각 집합의 원소는 1,000,000,000이하의 자연수입니다.


출력
두 집합의 공통원소를 오름차순 정렬하여 출력합니다.


예시 입력 1

5
1 3 9 5 2
5
3 2 5 7 8

예시 출력 1

2 3 5
 */

public class 공통원소구하기 {
    // 타임리밋... 하..
    public ArrayList<Integer> solution(int n, int m, int[] arr1, int[] arr2){
        ArrayList<Integer> answer = new ArrayList<>();

        //강의 풀이 - 강사님 소트쓰지마시라고,,,?
//        Arrays.sort(arr1);
//        Arrays.sort(arr2);
//        int p1=0, p2=0;
//        while(p1<n && p2<m){
//            if(arr1[p1] == arr2[p2]){
//                answer.add(arr1[p1++]);
//                p2++;
//            }
//            else if(arr1[p1] < arr2[p2]) p1++;
//            else p2++;
//        }

        for(int i = 0; i<n; i++){
            for(int j=0; j<m; j++){
                if(arr1[i] == arr2[j]) answer.add(arr1[i]);
            }
        }
        Collections.sort(answer);

        return answer;
    }

    public static void main(String[] args) {
        //나의 풀이
        공통원소구하기 M = new 공통원소구하기();
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] n1 = new int[n];
        for (int i = 0; i < n; i++) {
            n1[i] = sc.nextInt();
        }
        int m = sc.nextInt();
        int[] m1 = new int[m];
        for (int j = 0; j < m; j++) {
            m1[j] = sc.nextInt();
        }

        for (int x : M.solution(n, m, n1, m1)) {
            System.out.print(x + " ");
        }
    }

}
