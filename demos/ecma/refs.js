let a = [1, 2, 3]

let b = a; // b et a pointent sur la même ref

b.push(4)

console.log(a) // ??

let copy = [...a]; // shallow copy (sans profondeur)

copy.push(5)

console.log(a)
console.log(copy)


