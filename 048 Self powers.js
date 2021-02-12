let s = 0;

for (let i = 1; i < 1001; i++) {
    let tmp = 1;
    for (let j = 1; j <= i; j++) {
        tmp *= i;
        tmp %= 10000000000;
    }
    s += tmp;
    s %= 10000000000;
}

console.log(s);
