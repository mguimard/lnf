class Animal {
    constructor() {
    }

    shout() {
        console.log('Default shout')
    }
}

class Cat extends Animal {
    constructor() {
        super()
    }

    shout() {
        super.shout()
        console.log('meooow')
    }
}

let felix = new Cat()
console.log(felix)
felix = 456;
console.log(felix)