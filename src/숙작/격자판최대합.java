package 숙작;

import java.util.Scanner;
/*
설명

5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.

Image1.jpg

N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.


입력
첫 줄에 자연수 N이 주어진다.(2<=N<=50)

두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.


출력
최대합을 출력합니다.

 */
public class 격자판최대합 {
    //강의풀이 못풀었음. 가로세로열밖에 생각 안났음. X자는 강의들음.
    public int solution(int n , int[][] arr){
        int answer = Integer.MIN_VALUE;
        int sum1, sum2;
        for(int i=0; i<n; i++){
            sum1=sum2=0;
            for(int j=0; j<n; j++){
                sum1+=arr[i][j];
                sum2+=arr[j][i];
            }
            answer=Math.max(answer, sum1);
            answer=Math.max(answer, sum2);
        }
        sum1=sum2=0;
        for(int i=0; i<n; i++){
            sum1+=arr[i][i];
            sum2+=arr[i][n-i-1];
        }
        answer=Math.max(answer, sum1);
        answer=Math.max(answer, sum2);

        return answer;
    }
    public static void main(String[] args) {
        격자판최대합 M = new 격자판최대합();
        Scanner sc = new Scanner(System.in);
        int in = sc.nextInt();
        int[][] arr = new int[in][in];

        for(int i = 0; i < in; i++){
            for(int j = 0; j < in; j++){
                arr[i][j] = sc.nextInt();
            }
        }
        System.out.println(M.solution(in,arr));
    }
}
