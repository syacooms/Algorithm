// 평균은 넘겠지
// https://www.acmicpc.net/problem/4344

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  // 전체 학점
  let sum = 0;
  // 평균을 구할 학생 수
  let student = 0;
  // 평균
  let average = 0;
  // 평균을 넘는 학생 수의 배열
  let overStudent = [];

  input[i].split(' ').forEach((el) => {
    if (student == 0) student = el;
    overStudent.push(el);
    sum += Number(el);
  });
  sum = sum - student;
  average = sum / student;
  overStudent.shift();

  let result = overStudent.filter((students) => {
    return students > average;
  });
  result = ((100 / student) * result.length).toFixed(3);
  console.log(result + '%');
}
