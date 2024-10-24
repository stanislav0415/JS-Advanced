(function solve() {

String.prototype.ensureStart = function(str) {
if (!this.toString().startsWith(str)) {
    return str + this
}else {
    return this.toString()
}
}

String.prototype.ensureEnd = function(str) {
    if (!this.toString().endsWith(str)) {
        return  this + str;
    }else {
        return this.toString()
    }
}

String.prototype.isEmpty = function() {
    return !this.toString()
}

String.prototype.truncate = function(n) {
if (this.length <= n) {
    return this.toString()
}

    if (n < 4) {
        return '.'.repeat(n)
    }

    if (!this.includes(' ')) {
        return this.substring(0,n -3) + '...';
    }


    let wordsArray = this.split(' ');
    let result = this + '...';

    while (result.length > n) {
        wordsArray.pop();
        result = wordsArray.join(' ') + '...'
    }
    return result;


}

String.format = function(string, ...params) {
    params.forEach(param => {
        string = string.replace(/{\d+}/, param)
    })
    return string;
}

})();
let str = '';
str.ensureEnd()
let test = str.isEmpty();

