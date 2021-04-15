package 숙작;

import java.util.Scanner;

public class 암호 {
    //강의 풀이
    public String lectureSolution(int n, String s){
        String answer ="";
        for(int i = 0; i < n; i++){
            String tmp = s.substring(0,7).replace('#','1').replace('*','0');
            int num = Integer.parseInt(tmp, 2);
            answer += (char) num;
            s=s.substring(7);
        }
        return answer;
    }

    //나의 풀이 오답 ㅋㅋ.. 도전시간 1시간 ...
    public String solution(String[] strs){
        String answer ="";
        int two = 0;
        for(String s : strs){
            System.out.println("s = " + s);
            String word="";
            for(int i = 0; i < s.length(); i++){
                if(s.charAt(i) == '#'){
                    word += "1";
                } else {
                    word += "0";
                }
            }
            //System.out.println("word = " + word);
            two = Integer.parseInt(word , 2);
            //System.out.println("two = " + two);

            char ascii = (char) two;
            answer += ascii;
        }
        //System.out.println("answer = " + answer);
        return answer;
    }
    public static void main(String[] args) {
        //강의 풀이
//        Main T = new Main();
//        Scanner sc = new Scanner(System.in);
//        int n = sc.nextInt();
//        String str = sc.next();
//        System.out.println(T.solution(n,str));

        //나의 풀이
        암호 M = new 암호();
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        String str = sc.next();
        String[] strs = new String[num];
        int a = 0; int b = 7;
        for(int i = 0; i < num; i++){
            strs[i] = str.substring(a , b);
            a = b;
            b = b + 7;
        }

        System.out.println(M.solution(strs));
    }
}
