let s = 0,
    pw = 0;

for (let i = 1; i <= 100; i++) {
    s += i;
    pw += i * i;
}

console.log(s * s - pw);
