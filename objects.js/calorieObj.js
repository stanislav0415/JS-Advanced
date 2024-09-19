function calories(arr){

    const result = {}
    
 
    for (let i = 0; i < arr.length; i+= 2) {
        let key = arr[i]
        let value = Number(arr[i + 1])

        result[key] = value
        
    }
    console.log(result);
    
}
calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])