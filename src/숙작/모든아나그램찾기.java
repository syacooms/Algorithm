package 숙작;

import java.util.HashMap;
import java.util.Scanner;
/*
모든 아나그램 찾기
설명

S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.

아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.


입력
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.

S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.


출력
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.


예시 입력 1

bacaAacba
abc

예시 출력 1

3
힌트


 */
public class 모든아나그램찾기 {
    //오답.. ㅠㅠ
    public int solution(String s, String t){
        int answer = 0;
        //강의 풀이
//        HashMap<Character,Integer> am = new HashMap<>();
//        HashMap<Character,Integer> bm = new HashMap<>();
//        for(char x : t.toCharArray()) bm.put(x, bm.getOrDefault(x,0)+1);
//        int L = t.length()-1;
//        for(int i=0; i<L; i++) am.put(s.charAt(i), am.getOrDefault(s.charAt(i),0)+1);
//        int lt =0;
//        for(int rt=L; rt<s.length(); rt++){
//            am.put(s.charAt(rt), am.getOrDefault(s.charAt(rt), 0)+1);
//            if(am.equals(bm)) answer++;
//            am.put(s.charAt(lt), am.get(s.charAt(lt))-1);
//            if(am.get(s.charAt(lt))==0) am.remove(s.charAt(lt));
//            lt++;
//        }

        //나의 풀이
        HashMap<Character,Integer> map = new HashMap<>();
        HashMap<Character,Integer> tmap = new HashMap<>();

        char[] ss = s.toCharArray();
        char[] tt = t.toCharArray();
        for(int i = 0; i < t.length(); i++){
            map.put(ss[i], map.getOrDefault(ss[i],0)+1);
            tmap.put(tt[i], map.getOrDefault(tt[i],0)+1);
        }
        boolean chk = true;
        int lt = 0;
        for(int i = t.length(); i < s.length(); i++){
            map.put(ss[i], map.getOrDefault(ss[i],0)+1);
            map.put(ss[lt], map.get(ss[lt])-1);
            if(map.get(ss[lt]) == 0) map.remove(ss[lt]);
            for(Character x : map.keySet()){
                if(!tmap.containsKey(x)){
                    chk = false;
                }
                if(chk == true) answer += 1;
            }
            lt++;
        }


        return answer;
    }
    public static void main(String[] args) {
        모든아나그램찾기 M = new 모든아나그램찾기();
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        String t = sc.nextLine();


        System.out.println(M.solution(s,t));

    }
}
