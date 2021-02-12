let c,
    e = true,
    min = 0;

for (let m = 2; m <= 100; m++) {
    for (let n = 2; n <= 100; n++) {
        c = 0;
        for (w = 1; w <= m; w++) {
            for (h = 1; h <= n; h++) {
                for (let i = 0; i <= n - h; i++) {
                    for (let j = 0; j <= m - w; j++) {
                        c++;
                    }
                }
            }
        }
        if (Math.abs(2000000 - c) < Math.abs(2000000 - min)) {
            min = c;
            console.log(min, m, n, m * n);
        }
    }
}