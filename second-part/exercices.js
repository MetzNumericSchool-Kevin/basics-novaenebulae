// FONCTIONS UTILITAIRES :

const purseCounter = document.getElementById("purseCounter");
const autoModeCheckbox = document.getElementById("autoModeCheckbox");
const outputDiv = document.getElementById("output");
const actionButton = document.getElementById("actionButton");

let automode = false;

autoModeCheckbox.addEventListener("change", function () {
	automode = this.checked;
	console.log("Mode auto:", automode);
});

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

// Ajout du message à la page
function appendMessage(message) {
	outputDiv.innerHTML += `<p>${message}</p>`;
}

// Supression des messages affichés
function clearOutput() {
	outputDiv.innerHTML = "";
}

async function nextScreen() {
	appendMessage(automode ? "" : "Appuie sur une touche pour continuer...");
	await handleInput();
	clearOutput();
}

async function handleInput() {
	if (automode) {
		await sleep(1000);
		return;
	}

	return new Promise((resolve) => {
		function onUserAction(event) {
			if (event.type === "click" || (event.type === "keypress" && event.key === "Enter")) {
				cleanup();
				resolve();
			}
		}

		function cleanup() {
			actionButton.removeEventListener("click", onUserAction);
			actionButton.removeEventListener("keypress", onUserAction);
		}

		// Ajout des listeners
		actionButton.addEventListener("click", onUserAction);
		addEventListener("keypress", onUserAction);
	});
}

async function getAdventurerChoice(max) {
	await sleep(1000);
	let adventurerChoice = Math.floor(Math.random() * max);
	appendMessage(adventurerChoice + 1);
	await sleep(1000);
	return adventurerChoice;
}

const coinEmote = "🪙";
const sorcererName = "Archibald";
let sorcererPurseAmount = 0;
let adventurerPurseAmount = 100;

var shopInventory;

let adventurerInventory = {};

// Boucle principale avec async car utilisation de await pour getUserInput :
async function main() {
	actionButton.innerText = "CONTINUER";
	actionButton.removeAttribute("onclick");

	sorcererPurseAmount = 0;
	adventurerPurseAmount = 100;

	shopInventory = {
		healPotion: {
			name: "potion de soin",
			price: 40,
			stock: 1,
		},
		strengthPotion: {
			name: "potion d'endurance",
			price: 20,
			stock: 1,
		},
		manaPotion: {
			name: "potion de mana",
			price: 20,
			stock: 2,
		},
	};

	adventurerInventory = {};

	purseCounter.innerHTML = `<h2>Bourse aventurier : ${adventurerPurseAmount}${coinEmote}</h2>
		<h2>Bourse sorcier : ${sorcererPurseAmount}${coinEmote}</h2>`;

	while (adventurerPurseAmount > 0) {
		let shopAvailableInventory = getAvailableInventory(shopInventory);
		let canAdventurerSell = Object.values(adventurerInventory).some((potion) => potion.stock > 0);
		let canAdventurerBuy = canBuy(shopAvailableInventory);
		let adventurerChoice;
		let hasTryQuit = 0;
		console.log(shopAvailableInventory);

		clearOutput();
		appendMessage("Que veux-tu faire ? 🤔");
		appendMessage("1. Acheter une potion<br>2. Vendre une potion<br>3. Quitter");

		if (adventurerPurseAmount > 0 && canAdventurerSell && canAdventurerBuy) {
			adventurerChoice = (await getAdventurerChoice(hasTryQuit > 3 ? 1.7 : 2.3)) + 1; // 1 (Acheter), 2 (Vendre), 3 (Quitter)
		} else if (adventurerPurseAmount > 0 && canAdventurerBuy) {
			adventurerChoice = 1; // 1 (Acheter)
			await sleep(1000);
			appendMessage(adventurerChoice);
			await sleep(1000);
		} else if (canAdventurerSell) {
			await sleep(1000);
			adventurerChoice = 2; // Forcer la vente s'il n'a plus d'argent mais des potions
			appendMessage(adventurerChoice);
			await sleep(1000);
		} else {
			return; // Forcer la sortie si plus d'argent et plus de potions
		}

		switch (adventurerChoice) {
			case 1:
				clearOutput();
				await buyPotion(shopAvailableInventory);
				break;
			case 2:
				clearOutput();
				await sellPotion();
				break;
			case 3:
				clearOutput();
				appendMessage("Désolé, tu ne peux pas quitter la boutique ! 🧙‍♂️");
				hasTryQuit++;
				await sleep(750);
				break;
			default:
				appendMessage("Je ne comprends pas. Recommence !");
		}

	}

	clearOutput();

	appendMessage("<h1>💰 Ta bourse est vide ! 💰</h1>");

	function getAvailableInventory(inventory) {
		let availableInventory = [];

		Object.values(inventory).forEach(function (potion) {
			if (potion.stock > 0) {
				availableInventory.push(potion);
			}
		});

		return availableInventory;
	}

	function displayInventory(inventory) {
		appendMessage("🔮 Voici les potions disponibles 🔮");

		inventory.forEach((potion, index) => {
			appendMessage(`🧪 Potion ${index + 1} :`);
			Object.entries(potion).forEach(([key, value]) => {
				appendMessage(`${key} : ${value}`);
			});
			appendMessage(`<br>`);
		});
	}

	function updateAdventurerInventory(potion, quantity) {
		let potionKey = Object.keys(shopInventory).find((key) => shopInventory[key].name === potion.name);

		if (potionKey) {
			if (adventurerInventory.hasOwnProperty(potionKey)) {
				adventurerInventory[potionKey].stock += quantity;
			} else {
				adventurerInventory[potionKey] = { ...potion, stock: quantity };
			}
			console.log(adventurerInventory);
		}
	}

	async function sellPotion() {
		let availableAdventurerInventory = getAvailableInventory(adventurerInventory);
		if (availableAdventurerInventory.length === 0) {
			appendMessage("Ton inventaire est vide !");
			await sleep(1000);
			return;
		}

		appendMessage("Inventaire de l'aventurier : ");
		displayInventory(availableAdventurerInventory);

		appendMessage(`Le coût d'une tentative de vente est de 5 ${coinEmote}, mais je ne suis pas sûr d'accepter la vente !`);

		appendMessage("Je pense à un chiffre entre 1 et 5, tu dois le deviner pour pouvoir vendre 🎲");
		let sorcererThinkedInt = Math.floor(Math.random() * 5);
		let adventurerThinkedInt = (await getAdventurerChoice(5)) + 1;

		if (sorcererThinkedInt === adventurerThinkedInt) {
			appendMessage(`Bravo, je pensais bien à ${sorcererThinkedInt}`);
			appendMessage("Quelle potion veux-tu vendre ?");

			let adventurerChoice = await getAdventurerChoice(availableAdventurerInventory.length - 1);
			let adventurerPotionSold = availableAdventurerInventory[adventurerChoice];

			let potionKey = Object.keys(shopInventory).find((key) => shopInventory[key].name === adventurerPotionSold.name);

			if (potionKey) {
				let salePrice = shopInventory[potionKey].price;
				adventurerPurseAmount += salePrice * adventurerPotionSold.stock;
				sorcererPurseAmount -= salePrice * adventurerPotionSold.stock;
				shopInventory[potionKey].stock += adventurerPotionSold.stock;
				delete adventurerInventory[potionKey];

				appendMessage(`Tu as vendu ta potion pour ${salePrice * adventurerPotionSold.stock} ${coinEmote}.`);
				appendMessage(`Il te reste ${adventurerPurseAmount} ${coinEmote}.`);
			}
		} else {
			appendMessage(`Dommage, je pensais à ${sorcererThinkedInt} 🧙‍♂️`);
			appendMessage(`Tu as perdu 5 ${coinEmote} !`);
			adventurerPurseAmount -= 5;
			sorcererPurseAmount += 5;
		}

		purseCounter.innerHTML = `<h2>Bourse aventurier : ${adventurerPurseAmount}${coinEmote}</h2>
		<h2>Bourse sorcier : ${sorcererPurseAmount}${coinEmote}</h2>`;
		await nextScreen();
	}

	function canBuy(inventory) {
		let canBuyPotion = [];
		for (let potion of inventory) {
			if (potion.price < adventurerPurseAmount) {
				canBuyPotion.push(potion);
			}
		}
		return canBuyPotion.length != 0;
	}

	async function buyPotion(shopAvailableInventory) {
		console.log(canBuy(shopAvailableInventory));
		if (!canBuy(shopAvailableInventory)) {
			appendMessage(`Tu manques d'${coinEmote} pour m'acheter quoi que ce soit, vends tes potions !`);
			await sleep(1000);
			return;
		}

		displayInventory(shopAvailableInventory);
		console.log(shopAvailableInventory);

		if (shopAvailableInventory.length === 0) {
			appendMessage("Désolé, il n'y a plus de potions disponibles !");
			return;
		}

		appendMessage("Quelle potion souhaites-tu acheter ?");
		let potionChoiceIndex = await getAdventurerChoice(shopAvailableInventory.length - 1);
		let selectedPotion = shopAvailableInventory[potionChoiceIndex];
		console.log(potionChoiceIndex);
		console.log(selectedPotion);
		await sleep(1000);
		clearOutput();

		if (selectedPotion.price > adventurerPurseAmount) {
			appendMessage("Tu n'as pas assez d'argent ! 💸");
			appendMessage(`Il te manque ${selectedPotion.price - adventurerPurseAmount} ${coinEmote}`);
			await nextScreen();
			return;
		}

		let maxBuyAmount = selectedPotion.stock > Math.floor(adventurerPurseAmount / selectedPotion.price) ? Math.floor(adventurerPurseAmount / selectedPotion.price) : selectedPotion.stock;
		appendMessage(`Tu peux acheter jusqu'à ${maxBuyAmount} ${selectedPotion.name} 🧪`);

		appendMessage("Combien de potions veux tu ?");

		let potionQuantityChoice = (await getAdventurerChoice(maxBuyAmount + 0.2)) + 1;
		let buyPrice = selectedPotion.price * potionQuantityChoice;
		console.log(potionQuantityChoice);

		if (maxBuyAmount === 0 || buyPrice > adventurerPurseAmount) {
			appendMessage("Tu n'as pas assez d'argent ! 💸");
			appendMessage(`Il te manque ${buyPrice - adventurerPurseAmount} ${coinEmote}`);
			await nextScreen();
			return;
		}

		if (potionQuantityChoice <= selectedPotion.stock && buyPrice <= adventurerPurseAmount) {
			appendMessage(`Le prix de ${potionQuantityChoice} ${selectedPotion.name} est de ${buyPrice} ${coinEmote} 💸`);
			adventurerPurseAmount -= buyPrice;
			sorcererPurseAmount += buyPrice;
			selectedPotion.stock -= potionQuantityChoice;

			updateAdventurerInventory(selectedPotion, potionQuantityChoice);

			purseCounter.innerHTML = `<h2>Bourse aventurier : ${adventurerPurseAmount}${coinEmote}</h2>
		<h2>Bourse sorcier : ${sorcererPurseAmount}${coinEmote}</h2>`;

			appendMessage(`💰 Il te reste ${adventurerPurseAmount} ${coinEmote}`);
			appendMessage(`🧙‍♂️ Le sorcier a maintenant ${sorcererPurseAmount} ${coinEmote}`);
		} else {
			appendMessage(`Je n'ai pas assez de stock.`);
		}

		console.log(adventurerInventory);

		await nextScreen();
	}

	actionButton.innerText = "RECOMMENCER";
	actionButton.setAttribute("onclick", "main()");
}

// Lancement du programme

main();
