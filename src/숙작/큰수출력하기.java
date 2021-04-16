package 숙작;

import java.util.ArrayList;
import java.util.Scanner;
/*
설명

N개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.

(첫 번째 수는 무조건 출력한다)


입력
첫 줄에 자연수 N(1<=N<=100)이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.


출력
자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.


예시 입력 1

6
7 3 9 5 6 12

예시 출력 1

7 9 6 12

 */
public class 큰수출력하기 {
    // 강의 풀이
    public ArrayList<Integer> lectureSolution(int n , int[] arr) {
        ArrayList<Integer> answer = new ArrayList<>();
        answer.add(arr[0]);
        for(int i=1; i<n; i++){
            if(arr[i]>arr[i-1]) answer.add(arr[i]);
        }
        return answer;
    }


    //정답 나는 string으로 입력받음...ㅋㅋ
    public String solution(String[] strs){
        String answer = "";
        int min = 0;
        answer += strs[0] + " ";
        for(int i = 0; i < strs.length-1; i++){
            if(Integer.parseInt(strs[i]) < Integer.parseInt(strs[i+1])){
                answer += strs[i+1] + " ";
            }
        }
        return answer;
    }
    public static void main(String[] args) {
        //강의 풀이
//        Main M = new Main();
//        Scanner sc = new Scanner(System.in);
//        int num = sc.nextInt();
//        int[] arr = new int[num];
//        for(int i =0; i < num; i++){
//            arr[i] = sc.nextInt();
//        }
//        for(int x : M.lectureSolution(num, arr)){
//            System.out.println(x+ " ");
//        }

        큰수출력하기 M = new 큰수출력하기();
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        String[] word = new String[num];

        for(int i = 0; i < num; i++){
            String in = sc.next();
            word[i] = in;
        }

        System.out.println(M.solution(word));

    }
}
