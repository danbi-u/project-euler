// let num = '9009';
// let words = num.split('');
// if(words[0] == words[3] && words[1] == words[2]){
//     console.log(words[0])
//     console.log(words[1])
//     console.log(words[2])
//     console.log(words[3])
// }

// console.log(num.substring(0, 1));

let result = new Array();

for(let x=900; x<=999; x++){
    for(let y=900; y<=999; y++){
        let num = x*y;
        let toString = (num).toString();
        let toArray = toString.split('');
        if(toArray[0] == toArray[5] && toArray[1] == toArray[4] && toArray[2] == toArray[3]){
            result.push(num)
        }
    }
}

// 최대값 찾기
console.log(result)
console.log(Math.max(...result))


