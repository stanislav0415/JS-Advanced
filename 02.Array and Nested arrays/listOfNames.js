function listOfNames(arr){
   
    arr.sort((a,b) => a.localeCompare(b));

    arr.forEach((el, i) => {
        console.log(`${i + 1}.${el}`);
        
    });
    
}
listOfNames(["John", "Bob", "Christina", "Ema"])