function catalog(data) {

    let store = {};
   
    for (let el of data) {  
        let [key, value] = el.split(" : ");
        value = Number(value);
        store[key] = value
    }

    let sortResult = Object.entries(store).sort((arrA,arrB)=> arrA[0].localeCompare([0]));
    let currentGroupChar = "";
    for (let el of sortResult) {
        let key = el[0]
        let value = el[1]

        if (currentGroupChar !== key[0]) {
            currentGroupChar = key[0]
            console.log(currentGroupChar);
            
        }
        console.log(`${key}: ${value}`);
        
    }
}
catalog(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
    
    )