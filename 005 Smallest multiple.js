let i = 2500,
    s = false;

while (true) {
    s = true;
    for (let j = 1; j < 21; j++) {
        if (i % j === 0) continue;
        else {
            s = false;
            break;
        }
    }
    if (s) {
        console.log(i);
        break;
    } else i++;
}
