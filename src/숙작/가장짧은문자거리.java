package 숙작;

import java.util.*;

public class 가장짧은문자거리 {
    // 몰라서 강의 들음... 갔다가 오면서 작은 숫자랑 바꾸기
    public int[] solution(String str, char ch){
        int[] answer = new int[str.length()];
        int move = 100;

        for(int i = 0 ; i < str.length(); i++){
            if (str.charAt(i) == ch){
                move = 0;
                answer[i] = move;
            } else {
                move++;
                answer[i] = move;
            }
        }
        move = 100;
        for(int i = str.length()-1; i >=0; i--){
            if (str.charAt(i) == ch){
                move = 0;
            } else {
                move++;
                answer[i] = Math.min(answer[i], move);
            }
        }

        return answer;
    }
    public static void main(String[] args) {
        가장짧은문자거리 M = new 가장짧은문자거리();
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        char ch = sc.next().charAt(0);
        for(int num : M.solution(str,ch)) {
            System.out.print(num + " ");
        }
    }
}
