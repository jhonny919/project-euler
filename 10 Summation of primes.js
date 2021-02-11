let prim = [2, 3];

function isPrime(nn) {
    //check if num%(num in massive)==0 until nums sqrt<num
    for (let i = 0; i < prim.length; i++) {
        if (Math.sqrt(nn) < prim[i]) return true;
        if (nn % prim[i] == 0) return false;
    }
}

function primes(n) {
    //all prime numbers squre root%24=1
    let i = 5;
    while (prim.length < n) {
        if ((i * i) % 24 == 1 && isPrime(i)) prim[prim.length] = i;
        i++;
        if (prim[prim.length - 1] > 2000000) break;
    }

    return prim;
}
let arr = primes(1000000);
console.log(arr.reduce((s, el) => s + el) - arr[arr.length - 1]);
