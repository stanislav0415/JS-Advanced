class List{

    constructor() {
        this.list = []
        this.size = 0
    }

    add(element) {
        this.list.push(element)
        this.list.sort((a,b)=> a -b)
        this.size++
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.list.splice(index, 1)
        this.size--
        }
       
    }

    get(index) {
        if (index >= 0 && index < this.size) { 
            return this.list[index]
        }

    }
}
let myList =new List()

myList.get(0)