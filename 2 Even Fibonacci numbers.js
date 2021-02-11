let s = 0;

function fib(a = 0, b = 0, c = 1) {
    if (c >= 4000000) return 0;
    else {
        if (c % 2 === 0) s += c;
        fib(b, c, b + c);
    }
}

fib();

console.log(s);
