// FONCTIONS UTILITAIRES :

const outputDiv = document.getElementById("output");
const actionButton = document.getElementById("actionButton");
const userInput = document.getElementById("userInput");

// Ajout du message à la page
function appendMessage(message) {
	outputDiv.innerHTML += `<p>${message}</p>`;
}

// Supression des messages affichés
function clearOutput() {
	outputDiv.innerHTML = "";
}

async function nextScreen() {
	appendMessage("Appuie sur une touche pour continuer...");
	await getUserInput("null");
	clearOutput();
}

// Fonction pour récupérer une entrée utilisateur avec vérification
function getUserInput(type = "string") {
	return new Promise((resolve) => {
		function handleInput() {
			let value = userInput.value.trim();
			appendMessage(value);
			userInput.value = "";
			if (type === "null") {
				cleanup();
				resolve(value);
			}

			if (type === "int") {
				let numValue = parseInt(value);
				if (!isNaN(numValue)) {
					cleanup(); // Clean les listeners car réponse validée
					resolve(numValue);
				} else {
					appendMessage("Je n'ai pas bien compris, peux tu répèter ?");
				}
			} else {
				if (value !== "") {
					cleanup(); // Clean les listeners car réponse validée
					resolve(value);
				} else {
					appendMessage("J'ai besoin d'une réponse !");
				}
			}
		}

		// Ajout de la fonction permettant d'ajouter une validation de l'input avec la touche entrée
		function handleEnter(event) {
			if (event.key === "Enter") {
				event.preventDefault();
				handleInput();
			}
		}

		// Supprime les listeners pour éviter les multi-éxécutions
		function cleanup() {
			actionButton.removeEventListener("click", handleInput);
			userInput.removeEventListener("keypress", handleEnter);
		}

		// Ajoute les listeners
		actionButton.addEventListener("click", handleInput);
		userInput.addEventListener("keypress", handleEnter);
	});
}

// Exercice 1 Définition de variables :

const coinEmote = "🪙";
const sorcererName = "Archibald";
const shopName = "Potions d'Archibald";

let healPotionStock = 50;
let healPotionPrice = 5;
let isShopOpen = true;

// Boucle principale avec async car utilisation de await pour getUserInput :
async function main() {
	// Exercice 2 : Affichage conditionnel :

	if (isShopOpen) {
		appendMessage(`Bienvenue dans la boutique ${shopName}, Aventurier ! 🎉`);
	} else {
		appendMessage(`La boutique ${shopName} est fermée, reviens plus tard. 😴`);
		return;
	}

	// Exercice 3 : Affichage conditionnel avec switch :

	appendMessage("Que veux-tu savoir ? 🤔");
	appendMessage("1. Nom de la boutique<br>2. Nom du Sorcier<br>3. Prix d'une potion<br>4. Quantité de potions<br>5. Acheter des potions");

	let userChoice = 0;

	while (userChoice !== 5) {
		userChoice = await getUserInput("int");

		switch (userChoice) {
			case 1:
				appendMessage(`Le nom de la boutique est ${shopName} !`);
				break;
			case 2:
				appendMessage(`Mon nom est ${sorcererName} !`);
				break;
			case 3:
				appendMessage(`Le prix d'une potion de soin est ${healPotionPrice} ${coinEmote}`);
				break;
			case 4:
				appendMessage(`Il reste ${healPotionStock} potions de soin.`);
				break;
			case 5:
				break; // Sort de la boucle pour passer à l'achat de potions
			default:
				appendMessage("Je ne comprends pas. Recommence !");
		}
	}

	// Exercice 3 : Calcul du prix total d'une commande de potion :

	clearOutput();
	appendMessage("De combien de potions souhaite tu savoir le prix ?");

	let potionQuantity;
	do {
		potionQuantity = await getUserInput("int");

		if (isNaN(potionQuantity) || potionQuantity <= 0) {
			appendMessage("La quantité invalide !");
		}
	} while (isNaN(potionQuantity) || potionQuantity <= 0);

	appendMessage(`Le prix de ${potionQuantity} potions est de ${potionQuantity * healPotionPrice} ${coinEmote}.`);

	// Exercice 4 : Bourse de l'Aventurier :

	appendMessage("Combien as tu dans ta bourse ?");
	let purseAmount;
	do {
		purseAmount = await getUserInput("int");
	} while (isNaN(purseAmount) || purseAmount <= 0);

	appendMessage(`Avec ${purseAmount}🪙 je peux te vendre au maximum ${Math.floor(purseAmount / healPotionPrice)}, et mon stock est de ${healPotionStock}`);

	let desiredPotionQuantity;
	let validateSell = false;

	do {
		appendMessage("Combien de potions achètes-tu ?");
		desiredPotionQuantity = await getUserInput("int");
		clearOutput();

		if (desiredPotionQuantity > healPotionStock) {
			appendMessage(`Désolé, je n'ai pas assez de potions de soin ! Mon stock est de ${healPotionStock} potions`);
		} else if (desiredPotionQuantity * healPotionPrice > purseAmount) {
			appendMessage(`Tu n'as pas assez d'argent ! Il te manque ${healPotionPrice * desiredPotionQuantity - purseAmount}🪙`);
			appendMessage(`Je peux te vendre au maximum ${Math.floor(purseAmount / healPotionPrice)} potions`);
		} else if (isNaN(desiredPotionQuantity) || desiredPotionQuantity <= 0) {
			appendMessage("La quantité est invalide !");
		} else {
			appendMessage(`Parfait ! Pour ces ${desiredPotionQuantity} potions cela te fera donc ${desiredPotionQuantity * healPotionPrice}🪙`);
			purseAmount -= desiredPotionQuantity * healPotionPrice;
			healPotionStock -= desiredPotionQuantity;
			appendMessage(`Il te reste ${purseAmount}🪙 dans ta bourse. Et moi ${healPotionStock} potions !`);
			validateSell = true;
		}
	} while (isNaN(desiredPotionQuantity) || desiredPotionQuantity <= 0 || !validateSell);

	await nextScreen();

	// Exercice 5 : Liste des potions :

	let potionNames = ["potion de soin", "potion de dégats", "potion d'invisibilité"];
	console.log(potionNames);

	// Exercice 6 : Affichage des potions :

	appendMessage(`Le nom de la première potion est ${potionNames[0]}.`);
	appendMessage(`Le nom de la dernière potion est ${potionNames[potionNames.length - 1]}.`);

	potionNames.forEach((element) => appendMessage(`Nous avons de la ${element} !`));

	await nextScreen();

	// Exercice 7 - 8 : Ajout / suppression d'une nouvelle potion :

	appendMessage("Ajout d'une nouvelle potion<br><br>Quel est le nom de la potion ?");

	let newPotionName = await getUserInput();
	potionNames.push(newPotionName);

	appendMessage("Liste des potions :");
	potionNames.forEach((element) => appendMessage(`Potion ${potionNames.indexOf(element) + 1}. ${element}`));

	await nextScreen();

	potionNames.pop();
	appendMessage("Suppression de la dernière potion.<br><br>Nouvelle liste :");
	potionNames.forEach((element) => appendMessage(`Potion ${potionNames.indexOf(element) + 1}. ${element}`));

	await nextScreen();

	// Exercice 9 : Rangeons les informations de la potion de soin dans un objet :

	async function addPotion() {
		let potion = {};

		appendMessage("Quel est le nom de la potion ?");
		potion.potionName = await getUserInput();

		appendMessage("Quel est le prix de la potion ?");
		potion.potionPrice = await getUserInput("int");

		appendMessage("Quel est le nombre de potions en stock ?");
		potion.potionStock = await getUserInput("int");

		console.log(potion);
		return potion;
	}

	let potion = await addPotion();
}

// Lancement du programme

main();
