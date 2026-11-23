let i = 2;
console.log(i);

// i = "banana"; // non !
// pas de any !!!

let x: number | null = null;
x = 2;
x = null;

let add = function (a: number, b: number): number {
  return a + b;
};

let c = add(1, 2);

interface User {
  id: string;
  name: string;
  color?: string;
}

async function getUsersTs(): Promise<User[]> {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
}
