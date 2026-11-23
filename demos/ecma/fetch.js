
async function callApi() {
    return fetch('https://jsonplaceholder.typicode.com/posts/1')
}


async function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
}

async function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
}

async function main() {
    let [postsResponse, usersResponse] = await Promise.all([getPosts(), getUsers()])
    let [posts, users] = await Promise.all([postsResponse.json(), usersResponse.json()])
    console.log(posts.length + ' / ' + users.length)
}

async function main3() {
    // requete
    let prom = callApi()
    let response = await prom; // attente (200 ou 403)
    console.log(response)
    let data = await response.json() // attente
    console.log(data)
}

async function main2() {
    // requete
    let response = await callApi(); // attente (200 ou 403)
    console.log(response)
    let data = await response.json() // attente
    console.log(data)
}

main()
