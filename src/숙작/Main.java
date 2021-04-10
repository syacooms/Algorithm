package 숙작;

import java.util.Scanner;
/*
7. 회문 문자열
설명

앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.

문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력하는 프로그램을 작성하세요.

단 회문을 검사할 때 대소문자를 구분하지 않습니다.


입력
첫 줄에 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.


출력
첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.


예시 입력 1

gooG

예시 출력 1

YES
 */
public class Main {
//    public String solution(String str){
        //1번풀이
//        String answer = "YES";
//        int len = str.length();
//        str=str.toUpperCase();
//        for(int i = 0; i <len/2; i++){
//            if(str.charAt(i)!=str.charAt(len-i-1)) return "NO";
//        }
        //2번풀이
//        String answer = "NO";
//        String tmp = new StringBuilder(str).reverse().toString();
//        if(str.equalsIgnoreCase(tmp)) answer="YES";

//        return answer;
//    }
    //나의 풀이
    public String solution(String str){
        String answer="";
        int be = 0;
        int af = str.length()-1;
        String ss = str.toLowerCase();
        char[] cr = ss.toCharArray();

        while(be < af){
            if(cr[be] == cr[af]){
                answer = "YES";
                be++;
                af--;
            } else {
                answer = "NO";
                break;
            }
        }

        return answer;
    }
    public static void main(String[] args) {
        Main M = new Main();
        Scanner sc = new Scanner(System.in);
        String input = sc.next();

        System.out.println(M.solution(input));
    }
}
