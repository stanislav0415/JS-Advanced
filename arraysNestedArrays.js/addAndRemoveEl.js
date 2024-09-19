function addAndRemoveEl(commands){
    let n = 1
    let result = []

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === "add") {
            result.push(n)
        }else {
           result.pop()
        }
        n++
    }
    if (result.length === 0 ) {
        console.log("Empty");
        return
    }
    console.log(result.join("\n"));
    
}