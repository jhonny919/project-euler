let a = 1,
    b = 1,
    c;

for (a = 1; a < 1000; a++) {
    for (b = 1; b < 1000; b++) {
        if (Number.isInteger(Math.sqrt(a * a + b * b))) {
            if (a + b + Math.sqrt(a * a + b * b) === 1000) console.log(a, b, Math.sqrt(a * a + b * b), a * b * Math.sqrt(a * a + b * b));
        }
    }
}
