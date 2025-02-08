// FONCTIONS UTILITAIRES :
// Le programme javascript affiche les infos dans une div sur l'html car plus esthétique que les prompts.
// Ajout d'une fonction permettant d'insérer des <p> dans la <div> output.
// Ajout d'une fonction permettant de clear la <div> output.

// Le séquencage des prompts se fait en modifiant l'attribut 'onClick' du bouton 'actionButton' en passant la valeur de la fonction / exercice suivant.

const outputDiv = document.getElementById("output");

function appendMessage(message) {
	outputDiv.innerHTML += `<p>${message}</p>`;
}

function clearOutput() {
	outputDiv.innerHTML = "";
}

// Exercice 1 : Définition de variables

const coinEmote = "🪙";
const sorcererName = "Archibald";
const shopName = "Potions d'Archibald";

let healPotionCount = 50;
let healPotionPrice = 5;
let isShopOpen = true;

// Exercice 2 : Affichage conditionnel

if (isShopOpen) {
	appendMessage(`Bienvenue dans la boutique ${shopName} Aventurier ! 🎉`);
} else {
	appendMessage(`La boutique ${shopName} est fermée, reviens plus tard Aventurier ! 😴`);
}

appendMessage("Que veux-tu savoir ? 🤔");
appendMessage("1. Le nom de la boutique<br>2. Le nom du Sorcier<br>3. Le prix d'une potion de soin<br>4. La quantité disponible de potions de soin<br>5. <b>Acheter des potions de soin</b>");

// Exercice 3 : Affichage conditionnel avec switch

function giveInfos() {
	userChoice = document.getElementById("userInput").value;
	document.getElementById("userInput").value = "";
	userChoice = userChoice.trim();
	switch (userChoice) {
		case "1":
			appendMessage(`Le nom de la boutique est ${shopName} !`);
			break;
		case "2":
			appendMessage(`Mon nom est ${sorcererName} !`);
			break;
		case "3":
			appendMessage(`Le prix d'une potion de soin est ${healPotionPrice} ${coinEmote}`);
			break;
		case "4":
			appendMessage(`La quantité restante de potions de soin est de ${healPotionCount}`);
			break;
		case "5":
			clearOutput();
			buyHealPotion();
			break;
		default:
			appendMessage("Mh... Désolé aventurier, je ne comprends pas ce que tu souhaites. Refais ton choix !");
	}
}
