package 숙작;

import java.util.ArrayList;
import java.util.Scanner;

/*
4. 단어 뒤집기
설명

N개의 단어가 주어지면 각 단어를 뒤집어 출력하는 프로그램을 작성하세요.


입력
첫 줄에 자연수 N(3<=N<=20)이 주어집니다.

두 번째 줄부터 N개의 단어가 각 줄에 하나씩 주어집니다. 단어는 영어 알파벳으로만 구성되어 있습니다.


출력
N개의 단어를 입력된 순서대로 한 줄에 하나씩 뒤집어서 출력합니다.
 */
public class 단어뒤집기 {
    //강의 풀이
    public ArrayList<String> solution(String[] str){
        ArrayList<String> answer = new ArrayList<>();

        //1번
//       for(String x : str){
//           String tmp = new StringBuilder(x).reverse().toString();
//           answer.add(tmp);
//       }

        //2번
        for(String x : str){
            char[] s = x.toCharArray();
            int lt = 0, rt=x.length()-1;
            while(lt<rt){
                char tmp=s[lt];
                s[lt]=s[rt];
                s[rt]=tmp;
                lt++;
                rt--;
            }
            String tmp = String.valueOf(s);
            answer.add(tmp);
        }

        return answer;
    }

    public static void main(String[] args) {
        단어뒤집기 M = new 단어뒤집기();
        Scanner sc = new Scanner(System.in);

        int num = sc.nextInt();
        String[] str = new String[num];

        for(int i = 0 ; i < num; i+=1){
            str[i] = sc.next();
        }
        for(String x : M.solution(str)){
            System.out.println(x);
        }
    }
}
