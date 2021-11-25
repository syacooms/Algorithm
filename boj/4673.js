// 셀프넘버
// https://www.acmicpc.net/problem/4673

let selfNum = 0;
let arr;
let makeArr = (val) => {
  arr = [];
  for (let i = 0; i <= val; i++) {
    arr.push(i);
  }
};

//셀프넘버 생성
let n = (val) => {
  let result = 0;
  let number = val;

  for (let i = 0; i < val.toString().length; i++) {
    result += number % 10;
    number = Math.floor(number / 10);
  }

  result = val + result;

  return result;
};
//배열 생성
makeArr(10001);

//있을 경우 0으로 초기화
for (let i = 0; i < arr.length; i++) {
  let fn = n(i);
  if (arr.indexOf(fn) != -1) arr[arr.indexOf(fn)] = 0;
}

//출력
arr.forEach((el) => {
  if (el > 0) {
    console.log(el);
  }
});
