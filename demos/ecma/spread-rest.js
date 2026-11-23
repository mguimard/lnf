let a = [1, 2, 3]

console.log(a)
console.log(...a)

function f(name, ...prices) {
    console.log(prices)
}

f('kiwi', 1, 2, 3, 4)

f('bananes', ...a)

