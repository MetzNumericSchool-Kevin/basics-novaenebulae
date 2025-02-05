[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/izeYGuS7)
# Exercices sur les bases de JavaScript

- Vous pouvez mettre toutes vos réponses dans le fichier `exercices.js`.
- A chaque exercice, tu dois faire un commit avec le titre de l'exercice.
- Tu n'es pas obligé de garder le code fait précédemment, mais ⚠️ **attention** certaines choses sont utiles pour plus tard.

## Thème 🔮🧙‍♂️🧪🪙🍄

- Tu es le sorcier Archibald 🧙‍♂️ et tu gères une petite boutique dans laquelle tu créé et vend des potions 🧪.
- Tu as des outils magiques 🪄 nommés la `console` et le `prompt` te permettant d'intérargir avec les aventuriers qui viennent à ta boutique.
- La monnaie est le `🪙`. Tu peux stocker ça dans une constante si tu veux :)

Tu peux essayer le code suivant (et le supprimer ensuite)

```js
const nom_sorcier = prompt("Comment te nommes-tu, sorcier ? 🧙‍♂️");
console.log("Le sorcier se nomme :" + nom_sorcier + " ! 🎉");
```

Dès que tu verras `<ce_genre_de_chose>` c'est qu'il faudra remplacer `<ce_genre_de_chose>` par la bonne variable approprié au contexte.\
Tu comprendras en lisant la suite :)

## Exercices

### Définition de variables

Déclare les variables pour ta boutique de potions :

- Déclare une constante pour le nom de ta boutique.
- Déclare une variable pour le nombre de potions de soins en stock, la valeur par défaut de ton choix.
- Déclare une variable pour indiquer le prix d'une potion de soin, la valeur par défaut de ton choix.
- Déclare une variable pour indiquer si la boutique est ouverte ou non.

### Affichage conditionnel

Affiche dans ta `console` => `Bienvenue dans la boutique <nom_boutique> Aventurier ! 🎉` si la boutique est ouverte, sinon affiche `La boutique <nom_boutique> est fermée, revenez plus tard Aventurier ! 😴`

### Affichage conditionnel avec switch

- Affiche dans la console `Bienvenue dans mon humble boutique Aventurier. Que veux-tu savoir ? 🤔`
  - `1. Le nom de la boutique`
  - `2. Le nom du Sorcier`
  - `3. Le prix d'un potion de soin`
  - `4. La quantité d'une potion de soin`
- Fais un `prompt` pour demander à l'aventurier son choix entre 1 et 4
- Avec un `switch ... case` sur le numéro choisi par l'aventurier, affiche l'information demandée
  - Dans le cas où cela ne correspond pas à aucun des choix, affiche `Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix ! 😕`
  - ⚠️ **Attention**, `prompt` retourne une chaîne de caractère, il faudra certainement le convertir en `Number` avec `parseInt`

### Calcul du prix total d'une commande de potion 🪙

Demande avec `prompt` une quantité de potion de soin, et affiche ensuite dans la `console` => `Prix de <quantite_potion> potions de soins : <prix_total> 🪙 mon cher Aventurier. 💸`.

### Bourse de l'Aventurier 💰

- Créé une variable pour stocker l'argent de l'aventurier, initialise-la avec une valeur de ton choix.
- Vérifie si l'aventurier a assez d'argent pour acheter la quantité de potion demandée.
- Soustrais la quantité de potion demandée du stock et soustrais le prix total de la bourse de l'aventurier.
  - ⚠️ **Attention**, il faut que l'aventurier ai assez d'argent pour pouvoir acheter les potions !
  - ⚠️ **Attention**, il faut qu'il y ait assez de potion en stock pour pouvoir acheter les potions !

### Liste des potions

- Créé un tableau qui contient les noms de trois potions que tu vends dans ta boutique.
- Affiche le tableau directement dans la console.

### Affichage des potions

- Affiche le nom de la première potion.
- Affiche le nom de la dernière potion **sans utiliser l'indice directement, mais en utilisant la taille du tableau** (en utilisant la propriété length de l'objet Array).
- Affiche le nom de chaque potions avec une boucle `for` et affiche le message `Nous avons de la <nom_potion> !`

### Ajout d'une nouvelle potion

- Ajoute une nouvelle potion dans le tableau en utilisant la méthode `push` de l'objet Array.
- Affiche la liste des potions mis à jour

### Finaly, nope.

- Finalement, nous ne gardons pas cette nouvelle potion dans la liste. Supprime la en utilisant la méthode `pop`
- Affiche la liste des potions mis à jour

### Rangeons les informations de la potion de soin dans un objet 🧹

- Créé un objet pour stocker les informations d'une potion de soin, tu auras dans cet objet :
  - le nom de la potion
  - son prix
  - le stock
- Affiche directement l'objet dans la console

### Affichons les informations de la potion

- Affiche le nom de la potion en utilisant la notation pointée `.`
- Affiche le prix de la potion en utilisant la notation crochet `[]`

### C'est l'heure de faire l'inventaire...

- Transforme ton tableau de de noms de potions, en tableau d'objets de potions.
- Tu peux nommer ta constante `inventaire`

### Aventurier, regarde tout ce que je vends !

- Affiche ton inventaire à l'aventurier avec une boucle `for`
- Pour chaque itération, affiche :
  - `Nom: <nom_potion>`
  - `Prix: <prix_potion>`
  - `Stock: <stock_potion>`
- Trouve une autre solution pour afficher **dynamiquement** chacune des propriétés de la potion **sans utiliser la notation pointée ou crochet**. Tu as plusieurs possibilités :
  - `for` sur `Object.keys`
  - `for ... in` sur ton objet
  - `for ... of` sur `Object.entries`

### L'heure est venu pour moi d'être un grand marchand de potion !

Si tu vois 🚀 c'est pour les personnes qui veulent aller un peu plus loin :) mais pas obligatoire

> Cette fois, c'est du sérieux. On va créer un petit programme qui va vider les bourses 💰 de l'Aventurier et me rendre riche 🤑 ! Fini les soupes aux champignons tous les soirs !

## Alors Archibald 🧙‍♂️, voici le programme qui va te rendre riche 👍 :

Pré-requis :

- La bourse de l'aventurier avec 100 🪙
- Ta bourse avec 0 🪙
- Avoir ton inventaire de potions avec :
  - Potion de soin x1 au prix de 40 🪙
  - Potion d'endurance x1 au prix de 20 🪙
  - Potion de mana x2 au prix de 20 🪙
- Avoir un inventaire pour l'aventurier qui ne contient rien pour le moment

Le programme doit faire les choses suivantes :

- Les actions possibles de l'Aventurier
  1. Acheter une potion
     - Lors de ce choix, demande-lui quelle potion acheter, et en quelle quantité
       - 🚀 Tu peux voir pour n'afficher que les potions qui ont encore un stock > 0
       - 🚀 Tu peux voir pour ordonner la liste des potions du stock le plus grand au plus petit
     - Avec ces informations:
       - Si la quantité demandée est supérieure au stock, prévient l'Aventurier que ce n'est pas possible
       - Sinon
         - déduit sa bourse du total et ajoute cela à la tienne
         - déduit le stock de la potion achetée
         - ajoute la/les potion(s) achetée(s) dans l'inventaire de l'Aventurier
  2. Vendre une potion
     - Il peut essayer de vendre une des potions qu'il a dans l'inventaire (au même prix)
       - Pour cela, tu dois lui faire deviner un chiffre entre 1 et 5 (voir `Math.random`) 🎲
     - S'il a juste, tu lui rachete tout le stock de la potion en question (avec les mêmes règles de gestion que l'achat)
     - S'il a faux, tu peux lui dire de re-tenter sa chance 😈
  3. Quitter
     - Il ne peut pas hehe 😈
- Ce que l'aventurier ne sait pas, c'est que tu lui as jeté un sort qui l'oblige à répêter une de ces actions tant que sa bourse n'est pas vide avec `do ... while` 🪄
- Affiche ton gain, fini les soupes de 🍄 !
- 🚀 Si tu veux éviter la répétition de code tu peux utiliser des fonctions
