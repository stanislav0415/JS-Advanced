function sameNumber(num){

    let numAsString = num.toString()
    let isSame = true;
    let sum = 0;
    let firstDigit = numAsString[0]

    for (let i = 0; i < numAsString.length; i++) {
        if (numAsString[i] !== firstDigit) {
            isSame = false
            
        }
       
        sum += Number(numAsString[i])
    }
    console.log(isSame);
    console.log(sum);
    
    

}