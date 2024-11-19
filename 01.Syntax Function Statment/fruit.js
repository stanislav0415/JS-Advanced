function fruit(type , weigth, price) {
    let weigthInKg = weigth / 1000
    let money = weigthInKg * price

    console.log(`I need $${money.toFixed(2)} to buy ${weigthInKg.toFixed(2)} kilograms ${type}.`);
    
}