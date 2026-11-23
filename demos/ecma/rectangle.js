class Rectangle {

    static CreateDefault() {
        return new Rectangle(1, 1)
    }

    _l = 0;
    _h = 0;

    constructor(l, h) {
        this._l = l;
        this._h = h;
    }

    get area() {
        console.log('automatisation de code sur lecture de données')
        return this._l * this._h
    }

    set h(value) {
        if (value <= 0) {
            throw new Error("Cannot be less or equals than zero")
        }
        this._h = value;
    }

}

let r2 = Rectangle.CreateDefault();
let r = new Rectangle(4, 2)
console.log(r._h)
console.log(r.area)
r.h = -2; // boom
console.log(r.area)