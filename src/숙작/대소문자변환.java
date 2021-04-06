package 숙작;

import java.util.Scanner;
/*
설명

대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.


입력
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

문자열은 영어 알파벳으로만 구성되어 있습니다.


출력
첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.


예시 입력 1

StuDY

예시 출력 1

sTUdy

 */
public class 대소문자변환 {
    //강의 풀이
    public String lectureSolution(String str){
        String answer = "";
        // 첫번째 풀이
        for(char x : str.toCharArray()){
            if(Character.isLowerCase(x)) answer+= Character.toUpperCase(x);
            else answer+=Character.toLowerCase(x);
        }
        // 2번째 풀이
        for(char x : str.toCharArray()){
           if(x>=97 && x<=122) answer+=(char)(x-32);
           else answer+=(char)(x+32);
        }

        return answer;
    }
    //나의 풀이
    public String solution(String str){
        String answer= "";
        String trans="";


        for(char word : str.toCharArray()){
            if(word >= 65 && word < 97){
                trans = Character.toString(word);
                answer += trans.toLowerCase();
            } else {
                trans = Character.toString(word);
                answer += trans.toUpperCase();
            }
        }

        return answer;
    }
    public static void main(String[] args) {
        대소문자변환 M = new 대소문자변환();
        Scanner in=new Scanner(System.in);
        String input1 = in.next();

        System.out.println(M.solution(input1));
    }
}
