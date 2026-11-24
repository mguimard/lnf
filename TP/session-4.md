# Session 4 — Angular pipes et directives

## Objectifs

- Utiliser les **pipes Angular** pour formater l'affichage de données. https://angular.dev/guide/templates/pipes
- Utiliser les **directives Angular** pour ajouter du comportement à des balises. https://angular.dev/guide/directives

## Pipe : affichage de la durée, lisible par un humain

Générer le fichier du pipe

```bash
ng generate pipe pipes/duration-human-readable
```

Implémenter ce filtre, et l' utiliser au bon endroit dans la partie graphique.

Exemple de code pour transformer des ms en string.

```js
function millisecondsToStr(milliseconds:number) : string{
  if (milliseconds < 1000) {
    return `${milliseconds}ms`;
  }

  const seconds = Math.floor(milliseconds / 1000);
  if (seconds < 60) {
    return `${seconds}s`;
  }

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes}m ${seconds % 60}s`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h ${minutes % 60}m`;
  }

  const days = Math.floor(hours / 24);
  return `${days}d ${hours % 24}h`;
}
```

## Directive : border color

Créer une Directive qui permet de colorier la bordure d'une carte

```bash
ng generate directive directives/border-color
```

Cette directive doit prendre en paramètre un input de type string (la couleur de la bordure).

Au survol de la souris, la bordure de la carte doit changer.

## Bonus : Pipe pour trier un tableau

Ecrire un pipe "SortPipe" qui permet pour un tableau d'un type donné (paramétrisé) en entrée, de le trier sur un champ donné en mode ascendant ou descendant. Exemple :

```ts
interface Pizza {
  price: number;
  name: string;
}

let pizzas: Pizza[] = [
  { name: "saumon", price: 11 },
  { name: "chorizo", price: 12 },
];
```

```html
@for(p of pizzas|sort:'price':'desc'){ {{ p.name }} {{ p.price }} }
```
