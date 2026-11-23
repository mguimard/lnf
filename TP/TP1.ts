interface Card {
  id: number;
  logo: string;
  revealed: boolean;
  matched: boolean;
}

type Grid = Card[];

const grid: Grid = [];
const logos = ["🚕", "🥝", "🐼", "🎯", "🐱", "🚀", "🎁", "🍎"];

for (let i = 0; i < logos.length; i++) {
  grid.push({
    id: 1 + 2 * i,
    logo: logos[i],
    revealed: false,
    matched: false,
  });
  grid.push({
    id: 1 + (2 * i + 1),
    logo: logos[i],
    revealed: false,
    matched: false,
  });
}

console.log(grid);

grid[0].revealed = true;
grid[1].revealed = true;

console.log(grid);

if (grid[0].logo === grid[1].logo) {
  console.log("Vrai");
  grid[0].matched = true;
  grid[1].matched = true;
}

console.log(grid);
