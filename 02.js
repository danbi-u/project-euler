let x=0,
    y=1,
    result = null;

while(x < 4000000) {
    z = x + y;
    x = y;
    y = z;
    if(y % 2 == 0){ console.log(result += y) }
}