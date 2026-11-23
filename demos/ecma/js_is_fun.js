function f() {
    console.log(arguments)
}

f()

f('chat', 123)

function g(a, b, c) {
    if (typeof a === 'undefined') {
        a = 0;
    }

    if (typeof b === 'undefined') {
        b = 0;
    }

    if (typeof c === 'undefined') {
        c = 0;
    }

    return a + b + c;
}

let result = g()
console.log(result)

console.log('1' + 1)
console.log('1' == 1) // compare valeur seulemennt
console.log('1' === 1) // compare type et valeur

let i = '1' - 1;
console.log('1' - 1) // 0
console.log(i)

console.log('chat' - 1) // NaN Not a number
console.log(typeof 123) // number
console.log(typeof NaN) // number !

let a = []
let b = []

console.log(a == b) // ?
