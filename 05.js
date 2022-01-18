// 1 ~ 10 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 2520입니다.
// 그러면 1 ~ 20 사이의 어떤 수로도 나누어 떨어지는 가장 작은 수는 얼마입니까?



// let fuck = true, 
// num = 1
// i = 2
// ;
let num = 1, 
    i =1;

while(true){
    num++
    while(i<11){
        console.log(num);
        console.log(i)
        if(num%i == 0){
            console.log(`${num}%${i}`)
        }
        i++
    }
    break;
}

// for(let i=1; i<100; i++){
//     for(let j=1; j<11; j++){
//         if(i%j !== 0){
//             continue
//         } 
//     }
// }









    // if(
    //     num%1==0 && 
    //     num%2==0 && 
    //     num%3==0 && 
    //     num%4==0 && 
    //     num%5==0 && 
    //     num%6==0 && 
    //     num%7==0 && 
    //     num%8==0 && 
    //     num%9==0 && 
    //     num%10==0
    // ) {
    //     console.log(num)
    //     break;
    // }