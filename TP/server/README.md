# Memory server

## Utilisation

```bash
# Installation des dépendances
npm install

# Lancement du serveur
npx tsx main.ts
```

# docker

```bash
docker build -t my-memory-server .
docker run --rm -p 3001:3000 -d my-memory-server:latest
```

## Routes

### Liste des meilleurs scores

Pas d'authentification requise

```http
GET scores
```

Exemple curl

```bash
 curl localhost:3000/scores
```

### Ajouter un score

Authentification basic via les headers (username/password).

N'importe quel username/password fonctionnera. Un code HTTP 401 sera retourné si le header "authorization" n'est pas présent.

```http
POST scores
{
    "timestamp" : "2026-03-16T12:00:00",
    "name" : "Alice",
    "duration_ms" : 1254000
}
```

Exemple curl

```bash
 curl -XPOST localhost:3000/scores \
  -H'Content-Type: application/json' \
  -d '{"timestamp":"2026-03-16T12:00:00","name": "Alice", "duration_ms": 12345600 }' \
  -u alice:password
```
