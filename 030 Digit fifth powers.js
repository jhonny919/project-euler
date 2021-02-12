function digS(n) {
    n = n
        .toString()
        .split("")
        .map((el) => {
            return parseInt(el);
        });

    let ss = 0;
    for (let i = 0; i < n.length; i++) ss += n[i] ** 5;
    return ss;
}

let s = 0;

for (let i = 1; i < 1000000; i++) {
    if (digS(i) === i) {
        s += i;
    }
}

console.log(s - 1);
