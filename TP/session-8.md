# Session 8 — Déploiement GitLab Pages

## Objectifs

- Compiler l’application en production
- Configurer un pipeline CI/CD GitLab pour déploiement Pages

## 🔧 Tâches

### 1. Build Angular

Tester un build angular en local, puis inspecter le dossier dist

```bash
ng build --configuration production
```

### 2. Ajouter un `.gitlab-ci.yml` :

Créer ce fichier à la racine du projet.

```yaml
image: node:26.13.1

cache:
  paths:
    - node_modules/

before_script:
  - npm ci
  - npm install -g @angular/cli
pages:
  script:
    - ng build --configuration production
    # Adapter le chemin si besoin !
    - mv dist/memory-game/browser public
  artifacts:
    paths:
      - public
  only:
    - main
  pages: true
```

### 3. Pousser sur `main` :

```bash
git add .
git commit -m "Déploiement GitLab Pages"
git push origin main
```

### 4. Accès à GitLab Pages :

- Menu **Deploy > Pages**
- Copier l'URL publique et y accéder
