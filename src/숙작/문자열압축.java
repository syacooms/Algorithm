package 숙작;

import java.util.Scanner;
/*
11. 문자열 압축
설명

알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는

문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.

단 반복횟수가 1인 경우 생략합니다.


입력
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.


출력
첫 줄에 압축된 문자열을 출력한다.


예시 입력 1

KKHSSSSSSSE

예시 출력 1

K2HS7E
 */
public class 문자열압축 {
    // 강의 풀이
    public String lectureSolution(String str){
        String answer = "";
        //KKHSSSSSSSE
        str = str + " ";
        int cnt = 1;
        for (int i = 0; i < str.length() - 1; i++){
            if(str.charAt(i) == str.charAt(i+1)) cnt ++;
            else {
                answer += str.charAt(i);
                if(cnt > 1) answer+= String.valueOf(cnt);
                cnt = 1;
            }
        }
        return answer;
    }
    //나의 풀이 (오답.. point 조건을 생각해내지 못해서 2번씩 돌림.. 30분 초과)
    public String solution(String str){
        String answer = "";

        char[] st = str.toCharArray();
        int point = 1;

        for(int i = 0; i < st.length -1; i+=1){
           for(int j = 1+i; j < st.length; j++){
               if(st[i] == st[j]) point++;
               else {
                   answer += String.valueOf(st[i]) + point + "";
                   point = 1;
                   break;
               }
           }
        }

        return answer;
    }
    public static void main(String[] args) {
        문자열압축 M = new 문자열압축();
        Scanner sc = new Scanner(System.in);
        String in = sc.next();
        System.out.println(M.solution(in));
    }
}
