class Rectangle {
    constructor(width,heigth,color) {
        this.width = width
        this.heigth = heigth
        this.color = color
    }


    calcArea() {
        return this.width * this.heigth
    }
}

const rect = new Rectangle(4,5, 'Red')
console.log(rect.width);
console.log(rect.heigth);
console.log(rect.color); 
console.log(rect.calcArea());
