# Session 5 — Routing : game / settings / meilleurs scores

## Objectifs

- Ajouter un routeur Angular
- Créer une navigation avec 3 pages
- Implémenter un formulaire

## Tâches

- Créer les composants :
  - `pages/game`
  - `pages/settings-form`
  - `pages/high-scmres`
- Configurer `RouterModule`
- Ajouter un menu (navbar ou boutons de navigation)
- Sauvegarder les réglages dans un service

## Concepts visés

- Angular Routing : `RouterModule`, `routerLink`, `router-outlet`
- Services pour partage d’état entre pages

## Commandes

```bash
ng generate component pages/game
ng generate component pages/settings
ng generate component pages/high-scores
ng generate service services/setting-service
ng generate interface models/settings
```

## Etapes de réalisation recommandées :

1. Générer les pages et service avec les commandes données
2. Modifier le fichier des routes pour lier une route à chaque page
3. Déplacer le code correspondant à chaque route dans chaque page
4. Ajouter une route 404 vers un composant qui affiche "page non trouvée"
5. Ecrire le modèle (interface) Settings
6. Implémenter le service SettingsService (signal pour les settings)
7. Implémenter le formulaire pour définir le nombre de cartes
8. Modifier le composant game-board pour utiliser les settings (nombre de cartes)

## Exemple de stockage dans le local storage

Récupérer le service fournit (LocalStorageService)

## Livrable

> Application avec navigation fluide entre les 3 pages, les settings sont pris en compte.
