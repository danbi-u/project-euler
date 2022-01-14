// let num = '9009';
// let words = num.split('');
// if(words[0] == words[3] && words[1] == words[2]){
//     console.log(words[0])
//     console.log(words[1])
//     console.log(words[2])
//     console.log(words[3])
// }

// console.log(num.substring(0, 1));


for(let x=900; x<=999; x++){
    for(let y=900; y<=999; y++){
        let result = x*y;
        let toString = (result).toString();
        let toArray = toString.split('');
        if(toArray.length > 5 && toArray[0] == toArray[5] && toArray[1] == toArray[4] && toArray[2] == toArray[3]){
            console.log(`${x} * ${y} = ${x*y}`);
        }
    }
}