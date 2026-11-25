# Session 6 — Tests unitaires

Note, il se peut que vous devrez refactorer votre code pour le rendre testable.

Vous pouvez par exemple bouger le code à tester dans un fichier extérieur à la classe à laquelle il appartient pour le rendre plus facilement testable.

## Objectifs

- Apprendre à écrire un test unitaire simple
- Tester les composants
- Tester les pipes

## Tâches

- Ecrire les tests pour :
  - Le composant card-item
  - Les différents pipes

## Concepts visés

- `describe`, `it`, `expect`
- Tests unitaires avec Jasmine + Vitest
- Isolation des fonctions

## Commandes

Lancer les tests sans interface graphique :

```bash
ng test
```

Lancer les tests avec interface graphique :

```bash
ng test --ui
```

Lancer les tests avec rapport de couverture de code

```bash
ng test --coverage
```
