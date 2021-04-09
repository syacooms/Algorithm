package 숙작;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
/*
5. 특정 문자 뒤집기
설명

영어 알파벳과 특수문자로 구성된 문자열이 주어지면 영어 알파벳만 뒤집고,

특수문자는 자기 자리에 그대로 있는 문자열을 만들어 출력하는 프로그램을 작성하세요.


입력
첫 줄에 길이가 100을 넘지 않는 문자열이 주어집니다.


출력
첫 줄에 알파벳만 뒤집힌 문자열을 출력합니다.


예시 입력 1

a#b!GE*T@S

예시 출력 1

S#T!EG*b@a
 */
public class 특정문자뒤집기 {
    //강의 풀이
//    public String solution(String str){
//        String answer;
//        char[] s = str.toCharArray();
//        int lt = 0, rt = str.length() - 1;
//        while(lt<rt){
//            if( !Character.isAlphabetic(s[lt]) ) lt++;
//            else if( !Character.isAlphabetic(s[rt]) ) rt--;
//            else {
//                char tmp=s[lt];
//                s[lt]=s[rt];
//                s[rt]=tmp;
//                lt++;
//                rt--;
//            }
//        }
//        answer = String.valueOf(s);
//
//        return answer;
//    }
//    public static void main(String[] args) {
//        Main T = new Main();
//        Scanner kb = new Scanner(System.in);
//        String str = kb.next();
//        System.out.println(T.solution(str));
//    }


    //나의 풀이 (오답..?ㅠㅠ)
    public List<String> solution(String[] str){
        List<String> an = new ArrayList<>();
        String answer = "";

        for(String c : str){
            char[] word = c.toCharArray();
            int lt = 0, rt = c.length()-1;
            char tmp;
            while(lt < rt){
                if(word[lt] >= 97 && word[lt] <= 122 || word[lt] >= 65 && word[lt] <= 90 ){
                    tmp = word[lt];
                    word[lt] = word[rt];
                    word[rt] = tmp;
                    lt++;
                    rt--;
                } else{
                    lt++;
                    rt--;
                }


            }
            String struct = String.valueOf(word);
            an.add(struct);
        }

        return an;
    }
    public static void main(String[] args) {
        특정문자뒤집기 M = new 특정문자뒤집기();
        Scanner sc = new Scanner(System.in);

        String[] in = new String[1];

        for (int i = 0; i < in.length; i++){
            in[i] = sc.next();
        }

        for (String i : M.solution(in)) {
            System.out.println(i);
        }

    }
}
