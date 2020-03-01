let obj = {
    data: [{name: "js", price: 100}, {name: "css", price: 111}],
    get name(){
        return this.data[0].name;
    },
    set name(value) {
        this.data[0].name = value;
    }
};
export{obj};