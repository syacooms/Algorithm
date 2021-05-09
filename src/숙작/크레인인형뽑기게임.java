package 숙작;

import java.util.Scanner;
import java.util.Stack;

/*
크레인 인형 뽑기 게임
https://programmers.co.kr/learn/courses/30/lessons/64061?language=java
 */
public class 크레인인형뽑기게임 {

    //나의 풀이 오답. 인형 갯수 == combo로 생각하고 품. 다풀어놓고 문제를 제대로 읽지 않음..
    public int solution(int[][] board, int[] moves){
        int answer = 0;
        Stack<Integer> stack = new Stack<>();

        for(int x : moves){
            for(int i=0; i<board.length; i++){
                if(board[i][x-1] != 0){
                    int num = board[i][x-1];
                    board[i][x-1] = 0;
                    if(!stack.empty() && stack.peek() == num){
                        answer+=2;
                        stack.pop();
                    } else {
                        stack.push(num);
                    }
                    break;
                }

            }
        }

        return answer;
    }
    public static void main(String[] args) {
        크레인인형뽑기게임 M = new 크레인인형뽑기게임();
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[][] board = new int[n][n];
        for(int i=0; i<n; i++){
            for(int j=0; j<n; j++){
                board[i][j] = sc.nextInt();
            }
        }

        int k = sc.nextInt();
        int[] moves = new int[k];

        for(int i=0; i<k; i++) moves[i] = sc.nextInt();

        System.out.println(M.solution(board,moves));

    }
}
