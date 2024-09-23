function creatSortedList() {
    return {
        add: function(element){
            if (typeof(element) !== "number") {
                return;
            }
            this._sortList.push(element)
            this.size = this._sortList.length
            this._sortList.sort(this._sort)
        },
        remove: function(index){
            if (index < 0 || index >= this.size) {
                return;
            }
            this._sortList.splice(index, 1);
            this._sortList.sort(this.sort);
            this.size = this._sortList.length;
        },
        get: function(index){
            if (index < 0 || index >= this.size) {
                return;

            }
            return this._sortList[index];

        },
        size: 0,
        _sortList: [],
        _sort: (a,b) => a - b
    }
}