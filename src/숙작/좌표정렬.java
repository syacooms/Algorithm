package 숙작;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
/*
좌표 정렬
설명

N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하세요.

정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.


입력
첫째 줄에 좌표의 개수인 N(3<=N<=100,000)이 주어집니다.

두 번째 줄부터 N개의 좌표가 x, y 순으로 주어집니다. x, y값은 양수만 입력됩니다.


출력
N개의 좌표를 정렬하여 출력하세요.


예시 입력 1

5
2 7
1 3
1 2
2 5
3 6
예시 출력 1

1 2
1 3
2 5
2 7
3 6
 */
class Point implements Comparable<Point>{
    public int x, y;
    Point(int x, int y){
        this.x=x;
        this.y=y;
    }

    @Override
    // 오름차순이면 this에서 o.y를 빼줄 때 음수 값 리턴
    // 내림차순이면 o.y - this.y;
    public int compareTo(Point o) {
        if(this.x == o.x) return this.y - o.y;
        else return this.x - o.x;
    }
}

public class 좌표정렬 {
    //좌표를 정렬하는 기술 외우는게 좋아요~
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        ArrayList<Point> arr = new ArrayList<>();
        for(int i=0; i<n; i++){
            int x = sc.nextInt();
            int y = sc.nextInt();
            arr.add(new Point(x,y));
        }
        //오버라이드된 정렬 기준에 의해서 정렬을 해준다.
        Collections.sort(arr);
        for(Point o : arr) System.out.println(o.x+" "+o.y);
    }
}
