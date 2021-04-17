package 숙작;

import java.util.ArrayList;
import java.util.Scanner;

/*
3. 가위 바위 보
설명

A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.

가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

예를 들어 N=5이면

Image1.jpg

두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.


입력
첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.

두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.

세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.


출력
각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.


예시 입력 1

5
2 3 3 1 3
1 1 2 2 3

예시 출력 1

A
B
A
B
D

 */
public class 가위바위보 {

    //강의 풀이
    public String lectureSolution(int n, int[] a, int[] b){
        String answer="";
        for(int i=0; i<n; i++){
            if(a[i] == b[i]) answer+="D";
            else if(a[i]==1 && b[i]==3) answer+="A";
            else if(a[i]==2 && b[i]==1) answer+="A";
            else if(a[i]==3 && b[i]==2) answer+="A";
            else answer+="B";
        }
        return answer;
    }

    //나의 풀이 정답 한가지 조건만 전부 풀어낼 생각 해야 함..ㅇ
    public ArrayList<String> solution(int game, int[] arr1, int[] arr2){
        ArrayList<String> answer = new ArrayList<>();

        for(int i = 0; i < game; i++){
            if(arr1[i] == arr2[i]){
                answer.add("D");
            }
            if(arr1[i] > arr2[i]){
                if(arr1[i] - arr2[i] == 1) answer.add("A");
                if(arr1[i] - arr2[i] == 2) answer.add("B");
            }
            if(arr1[i] < arr2[i]){
                if(arr2[i] - arr1[i] == 1) answer.add("B");
                if(arr2[i] - arr1[i] == 2) answer.add("A");
            }
        }

        return answer;
    }
    public static void main(String[] args) {
        가위바위보 M = new 가위바위보();
        Scanner sc = new Scanner(System.in);
        int game = sc.nextInt();
        int[] playerA = new int[game];
        int[] playerB = new int[game];
        for(int i = 0; i < playerA.length; i++){
            playerA[i] = sc.nextInt();
        }
        for(int j = 0; j < playerB.length; j++){
            playerB[j] = sc.nextInt();
        }

        for(String s : M.solution(game,playerA, playerB)){
            System.out.println(s);
        }
    }
}
