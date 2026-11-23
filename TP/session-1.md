# Session 1 — Découverte de TypeScript

## Objectifs

- Comprendre les bases de TypeScript
- Écrire la logique du jeu sans Angular

## Commandes

Création d'un dossier et d'un fichier ts, puis exécution avec tsx

```bash
mkdir session-1
cd session-1
touch main.ts
npx tsx main.ts
```

Nous utiliserons des émojis pour l'affichage des cartes, exemples:

```
🍎 🍌 🍇 🍒 🍉 🍍 🥝 🥑 🥕 🧀
🐶 🐱 🐭 🐰 🐸 🐷 🐵 🐼 🐙 🐝
🚗 🚕 🚙 🚌 🚓 🚑 🚒 🚜 ✈️ 🚀
🎈 🎁 🎲 🎯 🧩 🃏 🪀 🪁 🎮 🧸
❤️ 💛 💚 💙 💜 🖤 ⭐ 🌟 🌈 🔔
☀️ 🌧️ ❄️ 🌪️ 🌈 🌻 🌵 🍄 🌊 🪨
```

## Livrable

> Une simulation console du jeu (sans interface)

Programme principal :

- Générer une grille de jeu
- Afficher la grille
- Retourner les deux premières cartes
- Afficher la grille
- Vérifier si elles correspondent et afficher vrai/faux selon le résultat

Penser à bien modéliser avec des classes (Card).
