function extensibleObject() {
    const object = {
        extend: function(targetObject) {
            for (const key in targetObject) {
                if (typeof targetObject[key] === 'function') {
                    Object.getPrototypeOf(this)[key] = targetObject[key];  
                } else {
                    this[key] = targetObject[key];  
                }
            }
        }
    };
    return object;
}

    
    
    const targetObject = { 
        targetObjectProperty: 'someString' ,
        targetObjectMethod: function () {
          console.log('Hi from targetObjectMethod');
          
        }
      
      } 
      
    const extendedObject = extensibleObject();
    
    extendedObject.extend( targetObject )
   
    
    