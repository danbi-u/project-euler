function primeFactors(n){
  // 2로 나누어진다면, 나눠질 수 있는 만큼 소수 2 출력
  while( n % 2 == 0){
    console.log(2);
    n = n/2;
  }
  
  // 처음에 2로 나눠질 수 있는 만큼 나누었기 때문에, 이 지점에서 n은 홀수임이 확실하여, +2씩 증가
  for(let i = 3; i * i <= n; i = i + 2){
    // i가 n을 나눌 수 있는 한 계속해서 소수 i 출력하고 n/i 나눈다
    while(n % i == 0){
      console.log(i)
      n = n / i
    }
  }

  // n이 2보다 큰 소수인 경우를 처리
  if(n>2){
    console.log('..')
    console.log(n)
  }
}

primeFactors(600851475143)




// 내가 한 부분

// 소수 구하기 
// 소수 : 1과 그 수 자신 이외의 자연수로는 나눌 수 없는, 1보다 큰 자연수..
// let result = prompt('입력하슈','');
// let decimal = [];

// for(let x=1; x<=result; x++){
//   for(let y=1; y<=x; y++){
//     if(x*y == result){
//       decimal.push(x)
//       decimal.push(y)
//       decimal.push('/')
//       console.log(decimal)
//     }
//   }
// }

// if(decimal.length == 2){
//   console.log('소수입니다.')
// } else {
//   console.log('소수가 아닙니다.')
// }