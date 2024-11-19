function cookingByNum(arg1, arg2,arg3,arg4,arg5,arg6) {
   let num = Number(arg1);
   let oprArr = [arg2,arg3,arg4,arg5,arg6]

   for (let i = 0; i < oprArr.length; i++) {
    let op = oprArr[i]

    switch (op) {
        case 'chop': num /= 2; break;
        case 'dice': num= Math.sqrt(num);break;
        case 'spice':num+= 1 ;break;
        case 'bake' : num *= 3;break;
        case 'fillet' :num *= 0.80;break;

        
    }
    console.log(num);
    
    
   }
}