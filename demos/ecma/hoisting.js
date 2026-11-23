// ES5

console.log(i) // ?
var i = 2;
console.log(i)

// console.log(x) // boom

function f() {
    // x et y existent dans f
    console.log(y) // undefined

    if (x) { // undefined
        console.log('x est vrai')
        var y = 2;
    }

    console.log('du code...')

    var x = true;
}

f()


function g() {
    // console.log(i) // Cannot access 'i' before initialization
    let i = 2;
    if (i > 0) {
        console.log('i is positive: ' + i)
        let j = i * 2; // scope limité au if
        console.log(j)
        j = 'kiwi'
        console.log(j)
    }

    //console.log(j) // boom ReferenceError: j is not defined
    const pi = 3.14;
    console.log(pi)
    // pi = 2 * pi; // boom
    //console.log(pi)
}

g()

function h() {
    const x = 2
    console.log(x) // 2

    if (true) {
        console.log(x) // 2
    }

    if (true) {
        const x = 3; // masque x du scope parent
        console.log(x) // 3
    }
}

h()