# Session 2 — Création de l’application Angular + affichage des cartes

## Objectifs

- Démarrer un projet Angular
- Afficher une grille de cartes cliquables

Concepts visés :

- Angular CLI
- Composants
- Binding `[property]`, `(event)`
- `@for`, `@if`
- Communication parent → enfant

## Création du projet :

Dans un terminal :

```bash
ng new memory-game --routing --style=scss
cd memory-game
ng generate component components/game-board
ng generate component components/card-item
ng generate interface card
```

Ouvrir le dossier memory-game dans VSCode.

Pour démarrer le projet depuis un terminal :

```bash
ng serve
```

Analyser les fichiers générés, puis mettre en place le code des composants.

Le code du TP1 peut être réutilisé dans votre composant GameBoard.

## Livrable

> Un plateau affichant des cartes (emojis), le temps écoulé s'affiche, un bouton "Restart" permet de recommencer. Les cartes sont retournables sur un clic.

## Bonus

Implémenter le comportement suivant :

- Interdit de retourner plus de deux cartes à la fois
- Laisser un délai d'affichage pour pouvoir mémoriser les cartes avant de les cacher
- Arrêter le temps écoulé quand la partie est terminée
- Redémarrer le temps écoulé sur un clic du bouton restart
- Afficher dans les logs le temps écoulé lorsque la partie est terminée
