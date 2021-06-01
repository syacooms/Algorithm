package 숙작;

public class 재귀함수 {
    //스택 프레임(스택구조) -> 매개변수,지역변수,복귀주소
    // 입력 3 인 경우
    // DFS(3),DFS(2),DFS(1)
    // STACK FRAME = DFS(0)->DFS(1)->DFS(2)->DFS(3) 백트랙킹
    // 스택이기 때문에 위에서 부터 pop() 해준다.
    public void Recursive(int n){
        if(n==0) return;
        else Recursive(n-1);
        //호출 시 3 2 1이 아닌 1 2 3이 나온다
        //이유 -> 스택의 상단이 작동하면서 거꾸로 작동함.
        System.out.println(n+ " ");
    }
    //이론 : 재귀함수 -> 재귀함수에서는 스택프레임을 사용한다.
    public static void main(String[] args) {
        재귀함수 M = new 재귀함수();
        M.Recursive(3);
    }
}
