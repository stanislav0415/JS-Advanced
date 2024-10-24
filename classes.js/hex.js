class Hex {
    constructor(value) {
        this.value = value;  // Store the given decimal value in the object
    }

    valueOf() {
        return this.value;  // Return the stored decimal value when the object is used in arithmetic operations
    }

    toString() {
        // Convert the stored decimal value to a hexadecimal string (base 16) and prefix it with '0x'
        return '0x' + this.value.toString(16).toUpperCase();
    }

    plus(number) {
        // If the argument is a number, add it directly to the stored value
        if (typeof number === 'number') {
            return new Hex(this.value + number);  // Return a new Hex object with the result
        } else {
            // If it's another Hex object, add its value to the stored value
            return new Hex(this.value + number.value);
        }
    }

    minus(number) {
        // Similar to plus(), but subtract the number or Hex object's value
        if (typeof number === 'number') {
            return new Hex(this.value - number);  // Return a new Hex object with the result
        } else {
            return new Hex(this.value - number.value);
        }
    }

    static parse(string) {
        // Convert a hexadecimal string to a decimal integer
        return parseInt(string, 16);
    }
}
