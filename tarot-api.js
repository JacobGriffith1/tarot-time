// Define the Tarot API URL
const tarotApiUrl = "https://tarot-api-3hv5.onrender.com/api/v1/cards";

// Map of card names to their respective image files
const cardImages = {
  "The Fool": "s0-the_fool.png",
  "The Magician": "1-the_magician.png",
  "Wheel of Fortune": "10-wheel_of_fortune.png",
  "Justice": "11-justice.png",
  "The Hanged Man": "12-the_hanged_man.png",
  "Death": "13-death.png",
  "Temperance": "14-temperance.png",
  "The Devil": "15-the_devil.png",
  "The Tower": "16-the_tower.png",
  "The Star": "17-the_star.png",
  "The Moon": "18-the_moon.png",
  "The Sun": "19-the_sun.png",
  "The High Priestess": "2-the_high_priestess.png",
  "Judgement": "20-judgement.png",
  "The World": "21-the_world.png",
  "The Empress": "3-the_empress.png",
  "The Emperor": "4-the_emperor.png",
  "The Hierophant": "5-the_hierophant.png",
  "The Lovers": "6-the_lovers.png",
  "The Chariot": "7-the_chariot.png",
  "Strength": "8-strength.png",
  "The Hermit": "9-the_hermit.png"
};

// Function to fetch card details from the Tarot API
async function getCardDetails() {
    try {
        const response = await fetch(tarotApiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch tarot card details.");
        }
        const cards = await response.json();
        return cards;
    } catch (error) {
        console.error("Error fetching tarot cards:", error);
        return [];
    }
}

// Function to display card details after a card is flipped
function displayCardDetails(cardData, cardElement) {
    const cardImage = cardImages[cardData.name];
    const cardText = `
        <h3>${cardData.name}</h3>
        <p>${cardData.meaning_up}</p>
        <img src="images/${cardImage}" alt="${cardData.name}">
    `;
    cardElement.innerHTML = cardText;
}

// Initialize the card-flipping functionality
function initCardFlipping() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.addEventListener('click', async () => {
            const cardDetails = await getCardDetails();
            if (cardDetails.length > index) {
                displayCardDetails(cardDetails[index], card);
            }
        });
    });
}

// Export the function for initialization
export { initCardFlipping };
