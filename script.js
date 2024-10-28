// Menydata
const menuData = {
    "Mandag": [
        { name: "Spaghetti Bolognese", description: "Pasta med kjøttsaus", price: 50 },
        { name: "Grønnsaksuppe", description: "Suppe med ferske grønnsaker", price: 30 }
    ],
    "Tirsdag": [
        { name: "Taco", description: "Taco med kjøtt, grønnsaker og salsa", price: 55 }
    ],
    // Fortsett for resten av uken...
};

// Faste varer
const itemsData = [
    { name: "Bagett", price: 25 },
    { name: "Sjokolade", price: 15 },
    { name: "Mineralvann", price: 20 }
];

// Funksjon for å vise menyen på meny.html
function displayMenu() {
    const menuContent = document.getElementById("menu-content");
    for (let day in menuData) {
        let daySection = document.createElement("section");
        daySection.innerHTML = `<h3>${day}</h3>`;
        menuData[day].forEach(item => {
            daySection.innerHTML += `
                <p><strong>${item.name}</strong>: ${item.description} - ${item.price} kr</p>
            `;
        });
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
