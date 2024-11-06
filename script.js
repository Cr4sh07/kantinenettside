// Menydata
const menuData = {
    "Mandag": [
        { name: "Spaghetti Bolognese", description: "Pasta med kjøttsaus", price: 50},
        { name: "Grønnsaksuppe", description: "Suppe med ferske grønnsaker", price: 30}
    ],
    "Tirsdag": [
        { name: "Taco", description: "Taco med kjøtt, grønnsaker og salsa", price: 55}
    ],
    // Fortsett for resten av uken med navn, beskrivelse, pris og bilde
};


// Faste varer
const itemsData = [
    { name: "Bagett", price: 25 },
    { name: "Sjokolade", price: 50 },
    { name: "Mineralvann", price: 20 }
];

// Funksjon for å vise menyen på meny.html
function displayMenu() {
    const menuContent = document.getElementById("menu-content");
    for (let day in menuData) {
        let daySection = document.createElement("section");
        daySection.innerHTML = '<h3>' + day + '</h3>';
        // Itererer gjennom hvert element i menuData[day] arrayet
        for (let i = 0; i < menuData[day].length; i++) {
            // Henter hvert element (item) fra menuData[day] basert på indeksen i
            const item = menuData[day][i];
            
            // Legger til en ny paragraf i daySection sin HTML.
            // Denne paragrafen inneholder:
            // - item.name i fet skrift
            // - item.description
            // - item.price med 'kr' lagt til på slutten
            daySection.innerHTML +=
                "<p><strong>" + item.name + "</strong>: " + item.description + " - " + item.price + " kr</p>";
        }
        menuContent.appendChild(daySection);
    }
}

// Funksjon for å vise faste varer på varer.html
function displayItems() {
    const itemsContent = document.getElementById("items-content");
    itemsData.forEach(item => {
        itemsContent.innerHTML += `
            <p><strong>${item.name}</strong>: ${item.price} kr</p>
        `;
    });
}

// Kjør funksjoner basert på hvilken side som er lastet
if (window.location.pathname.includes("meny.html")) {
    displayMenu();
} else if (window.location.pathname.includes("varer.html")) {
    displayItems();
}
