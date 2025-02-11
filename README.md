# 🖥️ TP JavaScript - Boutique de Potions Mystiques

Ce projet est un **TP en JavaScript** permettant d'explorer les bases du langage à travers une console web intéractive. L'objectif est d'apprendre la gestion des interactions utilisateur, la manipulation du DOM et les concepts fondamentaux de la programmation JavaScript.

---

## 📁 Système de fichiers

Le projet est organisé en plusieurs dossiers :

```
/javascript-basics 
│── index.html # Page d'accueil permettant de choisir entre les parties 1 et 2 
├── style.css # Styles de la seconde partie 
│── README.md # Documentation du projet
│── first-part/ 
│   ├── index.html # Interface de la première partie 
│   ├── exercices.js # Script pour la première partie 
│   └── style.css # Styles de la première partie 
└── second-part/ 
    ├── index.html # Interface de la seconde partie 
    ├── exercices.js # Script pour la seconde partie 
    └── style.css # Styles de la seconde partie 
```

---

## 🔍 Présentation des parties

### ✨ **First Part - Découverte de JavaScript**
📌 Dans cette première partie, l'utilisateur interagit avec la **Boutique de Potions Mystiques** en saisissant des commandes via un champ de texte afin de répondres aux questions des exercices.  

💡 **Fonctionnalités** :
- L'utilisateur entre des commandes pour acheter ou vendre des potions.
- Les choix sont validés et traités dynamiquement par `exercices.js`.
- Affichage en temps réel des interactions.

🔹 **Concepts abordés** :
- Manipulation du DOM (`document.getElementById`)
- Gestion des événements (`onclick`, `keypress`)
- Création d'une console sur la page web pour éviter `prompt()` et `console.log()`
- Déclaration et utilisation de variables et objets

---

### 🚀 **Second Part - Mode Automatique et Interactivité**
📌 Dans cette seconde partie, le programme simule un aventurier achetant des potions au sorcier, en effectuant des pauses à des moments clés ou avec un **mode automatique** pour executer jusqu'à la fin de celui-ci.

💡 **Fonctionnalités** :
- **Mode Auto** : Une case à cocher permet d'activer la simulation automatique.
- **Mise à jour de la bourse** : Suivi en temps réel des pièces d'or du joueur et du marchand.
- **Actions semi-aléatoires** : L'IA prend des décisions en fonction des stocks et de l'argent disponible.
- **Affichage amélioré** : Interface plus fluide et dynamique.

🔹 **Concepts abordés** :
- Boucles asynchrones avec `async/await`
- Programmation événementielle (`addEventListener`)
- Timers avec `setTimeout()`
- Gestion d'un mode automatique

---

## 🛠️ Installation et Exécution

1. **Cloner le dépôt GitHub** :
   ```sh
   git clone https://github.com/utilisateur/nom-du-repo.git
   cd nom-du-repo

2. Ouvrir index.html dans un navigateur pour accéder à la page d'accueil.

3. Choisir une partie :

- Partie 1 : Expérience classique avec saisie utilisateur.
- Partie 2 : Mode avancé avec simulation automatique.

## 🎮 Comment jouer ?

### Partie 1 :

- Suivre les instructions de la page et saisir une commande dans le champ de texte.
- Valider avec le bouton "Envoyer" ou touche Entrée.
- Observer les interactions avec la boutique.

### Partie 2 :

- Activer ou désactiver le Mode Auto.
- Cliquer sur "RECOMMENCER" pour tester différents scénarios.
- Observer les décisions prises par l'IA en fonction des ressources.

## 👨‍💻 Auteur
Nom : Lucas OLIVAREZ
Cours : JavaScript / REACT
École : Metz Numeric School