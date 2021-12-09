// 크로아티아 알파벳
// https://www.acmicpc.net/problem/2941

// /dev/stdin
let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim();

let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let solution = (params) => {
  for (let alphabet of croatia) {
    params = params.split(alphabet).join(' ');
  }
  return params.length;
};

console.log(solution(input));
