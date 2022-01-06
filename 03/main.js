// 소수 구하기 
// 소수 : 1과 그 수 자신 이외의 자연수로는 나눌 수 없는, 1보다 큰 자연수..

let result = prompt('입력하슈','');
let decimal = [];

for(let x=1; x<=result; x++){
  for(let y=1; y<=x; y++){
    if(x*y == result){
      decimal.push(x)
      decimal.push(y)
      decimal.push('/')
      console.log(decimal)
    }
  }
}

if(decimal.length == 2){
  console.log('소수입니다.')
} else {
  console.log('소수가 아닙니다.')
}