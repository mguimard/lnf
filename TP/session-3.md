# Session 3 — Persistance des meilleurs scores avec HTTP

Le but de ce TP est d'intéragir avec un webservice avec Angular HttpClient.

https://angular.dev/guide/http

## TLDR

- Démarrer le serveur fourni (voir README ou http://localhost:3000)
- Tester les webservices (voir README dans le dossier server)
- Ajouter HttpClient à votre projet
- Créer un service qui fournit l'implémentation http
- Afficher la liste des meilleur scores sous la grille

## Modélisation des scores

Générer l'interface score avec comme définition :

```bash
ng generate interface score
```

```ts
interface Score {
  timestamp: Date;
  name: string;
  duration_ms: number;
}
```

Ajouter dans le composant gameboard, un tableau de scores (Score[]), et faire une boucle @for dans le template pour les afficher.

## ScoresService et Http client

Dans le fichier app.config.ts, ajouter la fonction provideHttpClient()

Générer un fichier de service

```bash
ng generate service scores-service
```

Y injecter le client http.

```ts
http = inject(HttpClient);
```

Dans ce fichier :

- exposer et implémenter une méthode `getScores():Promise<Score[]>` qui renvoie une promesse sur la liste des scores données par le serveur.
- exposer et implémenter une méthode `addScore(score:Score):Promise<void>` qui prend un score en paramètre et l'ajoute sur le serveur.

Exemple pour ajouter un header :

```ts
this.http.post<void>(URL, score, {
  headers: {
    authorization: "Basic alice:123456",
  },
});
```

## Intégration dans le composant

Injecter ce service dans le composant gameboard.

```ts
scoresService = inject(ScoreService);
```

Lors du chargement de gameboard (OnInit), faire un appel au service pour récupérer la liste des scores depuis le serveur.

Lors d'une partie terminée, enregistrer le score sur le serveur.
