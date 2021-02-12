let max = 0,
    maxi,
    ii;

for (let i = 1; i < 1000000; i++) {
    let count = 1;
    ii = i;
    while (ii !== 1) {
        if (ii % 2 === 0) ii /= 2;
        else ii = ii * 3 + 1;
        count++;
    }
    if (max < count) {
        max = count;
        maxi = i;
    }
}

console.log(maxi);
