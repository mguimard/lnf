# Session 7 — Tests end to end

Note, il se peut que vous devrez refactorer votre code pour le rendre testable.

Souvent, nous avons besoin d'ajouter des marqueurs pour cypress (data-cy attributes).

Exemple :

```html
<p>Difficile à cibler</p>
<p data-cy="mon-super-id">Facile à cibler</p>
```

Un peu de lecture : https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test

## Objectifs

- Apprendre à écrire un test end to end
- Générer du code avec cypress studio et l'adapter

## Tâches

- Ecrire les tests end to end suivants :
  - Vérifier que les cartes sont affichées
  - Vérifier que le changement de paramètres fonctione (nombre de cartes)
  - Resoudre le mémory, et vérifier qu'un nouveau score est ajouté

## Concepts visés

- Tests unitaires avec Cypress

## 🛠️ Commandes

```bash
npx cypress install
ng e2e
```
