function GCD(num1, num2) {

    let a = num1;
    let b = num2;

    let gcd = a % b

    while(gcd !== 0) {

        a= b
        b = gcd
        gcd = a % b
    }
    console.log(b);
    
}