let max = 0;

for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
        if (((str) => str == str.split("").reverse().join(""))(String(i * j)) && max < i * j) max = i * j;
    }
}
console.log(max);
