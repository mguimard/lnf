function callApi(fn) {
    // call api..
    console.log('Appel en cours..') // 1
    setTimeout(fn, 1000)
}

callApi(function () {
    console.log('resultat obtenu...') // 3
})

console.log('fin de programme') // 2 


f1(function () {
    f2(function () {
        f3(function () {
            // callback hell
        })
    })
})