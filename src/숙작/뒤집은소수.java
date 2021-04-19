package 숙작;

import java.util.ArrayList;
import java.util.Scanner;

public class 뒤집은소수 {
    public boolean isPrime(int num){
        if(num==1) return false;
        for(int i = 2; i < num; i++){
            if(num%i==0) return false;
        }
        return true;
    }

    public ArrayList<Integer> solution(int n, int[] arr) {
        ArrayList<Integer> answer = new ArrayList<>();
        //강의 풀이
        for(int i=0; i<n; i++){
            int tmp = arr[i];
            int res = 0;
            while (tmp > 0){
                int t = tmp%10;
                res = res*10+t;
                tmp = tmp/10;
            }
            if(isPrime(res)) answer.add(res);
        }

        //나의 풀이 오답 뒤집는 공식이 도저히 생각안남.. 걍 전부 틀림..
//        for(int i = 0; i < nums.length; i++){
//            String word = Integer.toString(nums[i]);
//            word = new StringBuilder(word).reverse().toString();
//            int number = Integer.parseInt(word);
//                if(number == 1) continue;
//                if(number == 2) answer.add(number);
//                for(int j = 2; j < number / 2; j++){
//                    if(number % j == 0) break;
//                }
//                answer.add(number);
//        }
        return answer;
    }
    public static void main(String[] args) {
        뒤집은소수 M = new 뒤집은소수();
        Scanner sc = new Scanner(System.in);
        int in1 = sc.nextInt();
        int[] in2 = new int[in1];
        for(int i = 0; i < in1;  i++){
            in2[i] = sc.nextInt();
        }

        for(int x : M.solution(in1,in2)){
            System.out.print( x + " ");
        }

    }
}
