// Define the Tarot API URL
const tarotApiUrl = "https://tarot-api-3hv5.onrender.com/api/v1/cards";

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
    const cardText = `
        <h3>${cardData.name}</h3>
        <p>${cardData.meaning_up}</p>
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
