let heros = [
    {
        name: "Shrek",
        pizza: "chorizo"
    },
    {
        name: 'Spiderman',
        pizza: 'peperoni'
    }
]

// on crée 2 variables, shrek et spid
let [shrek, spid] = heros
console.log(shrek.pizza)

// on crée une seule variable pizza
let [, { pizza }] = heros
console.log(pizza)

// lib export {add, minus}
// import {add} from 'lib'
