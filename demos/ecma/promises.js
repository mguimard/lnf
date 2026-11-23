const boulangerieOuverte = Math.random() > 0.5

const p = new Promise((resolve, reject) => {

    setTimeout(function () {

        if (boulangerieOuverte) {
            resolve('Pain chocolats') // data
        } else {
            reject('Fermé !') // err
        }

    }, 1000)

});


p.then(function (data) {
    console.log(`merci pour les ${data}`)
}, function (err) {
    console.log('Trop nul !') // err
}).catch(function () {
    // gérer l'erreur
})

console.log('fin de programme')


p
    .then(p2, localErrorHandler)
    .then(p3)
    .catch(errorHandler) // stop la chaine si reject dans la chaine