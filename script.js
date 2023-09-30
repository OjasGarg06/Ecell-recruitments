// JavaScript code to fetch and display PG data

// Sample PG data (replace with your data source)
const pgsData = [
    { name: "CHOUHAN'S PG FOR BOYS", location: "B/XXX, Patel Garden, Dwarka Mor-110059", details: "Homecooked Meals, Attached Washrooms, AC rooms, Unlimited Wifi", contact:"95XXXXXXXX", price:"!2000 + AC charges"},
    { name: "CHOICE PG FOR BOYS", location: "B/XXX, Patel Garden, Dwarka Mor-110059", details: "Homecooked Meals, Attached Washrooms, AC rooms, Unlimited Wifi", contact:"95XXXXXXXX",price:"!0500 + AC charges"},
    { name: "CHOUHAN'S PG FOR GIRLS", location: "B/XXX, Patel Garden, Dwarka Mor-110059", details: "Homecooked Meals, Attached Washrooms, AC rooms, Unlimited Wifi", contact:"95XXXXXXXX",price:"!2000 + AC charges" },
    { name: "KHUSHI PG FOR BOYS", location: "B/XXX, Patel Garden, Dwarka Mor-110059", details: "Homecooked Meals,  Unlimited Wifi, AC rooms", contact:"95XXXXXXXX", price:"!0000 + AC charges" },
    { name: "GOEL'S PG FOR BOYS", location: "B/XXX, Patel Garden, Dwarka Mor-110059", details: "Homecooked Meals,  Unlimited Wifi, AC rooms", contact:"95XXXXXXXX",price:"11000" }
    // Add more PG data objects as needed
];

const pgsList = document.getElementById("pgs");
const pgDetailsContent = document.getElementById("pg-details-content");

// Function to display PG list
function displayPGList() {
    pgsList.innerHTML = '';
    pgsData.forEach((pg, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}. ${pg.name}`;
        listItem.addEventListener("click", () => displayPGDetails(pg));
        pgsList.appendChild(listItem);
    });
}

// Function to display PG details
function displayPGDetails(pg) {
    pgDetailsContent.innerHTML = `
        <h3>${pg.name}</h3>
        <p><strong>Location:</strong> ${pg.location}</p>
        <p><strong>Details:</strong> ${pg.details}</p>
        <p><strong>Contact:</strong> ${pg.contact}</p>
        <p><strong>Price:</strong> ${pg.price}</p>
    `;
}

// Initial call to display PG list
displayPGList();