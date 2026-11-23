function f(name, price = 0) {
    console.log(name + ' ' + price)
}

f('kiwi')
f('bananes', 123)

function print1(x) {
    console.log('PRINT1: ' + x)
}
function print2(x) {
    console.log('PRINT2: ' + x)
}


function show(y, fn) {
    if (typeof fn === 'function')
        fn(y)
}

function show2(y, fn = print1) {
    fn(y)
}

show2('ABC')
show('ABC', print1)
show('ABC', print2)
show('ABC', 3.14)