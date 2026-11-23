const boulangerieOuverte = Math.random() > 0.5

// 3 states
// FULLFILED (résolu), REJECTED (rejetée), PENDING (en cours)

const p = new Promise((resolve, reject) => {
    setTimeout(function () {
        if (boulangerieOuverte) {
            resolve('Pain chocolats') // data
        } else {
            reject('Fermé !') // err
        }
    }, 1000)
});

async function vaChercherLesPainsChocs() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (boulangerieOuverte) {
                resolve('Pain chocolats') // data
            } else {
                reject('Fermé !') // err
            }
        }, 1000)
    });
}

async function main() {

    try {
        let data = await vaChercherLesPainsChocs(); // bloque
        console.log(data)
    } catch (err) {
        console.log('Ooops:' + err)
    } finally {
        console.log('finally')
    }

    console.log('Fin de programme')
}

main()

Promise.all([vaChercherLesPainsChocs(), vaChercherLesPainsChocs()])