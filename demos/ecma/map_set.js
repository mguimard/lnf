let cat = {
    pattes: 4,
    couleur: 'gris'
}

cat.cri = 'meow'

console.log(cat)

const products = new Map()

products.set(1, 'kiwi')
products.set('autre_id', 'bananes')
products.set(2134, 'citrons')
products.set(null, 'pommes')
products.set(undefined, 'poires')
products.set(null, 'ananas')

console.log(products)

const uniqueCats = new Set()

uniqueCats.add('Felix')
uniqueCats.add('Felix')
uniqueCats.add('Felix')
uniqueCats.add('Felix')
uniqueCats.add('Felix')

console.log(uniqueCats)