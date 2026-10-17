
/* Create an object containing profile information */
const favouritePerson = {
    name: "Tems",
    occupation: "Singer and songwriter",
    nationality: "Nigerian",
    birthYear: 1995,
    biography: "Tems is a Nigerian singer and songwriter known for her unique voice and successful music career.",
    interestingFact: "Tems won a Grammy Award in 2023."
};

/* Display object properties using dot notation */
document.getElementById("personName").textContent =
    favouritePerson.name;

document.getElementById("occupation").textContent =
    favouritePerson.occupation;

document.getElementById("biography").textContent =
    favouritePerson.biography;

/* Display properties using bracket notation */
document.getElementById("nationality").textContent =
    favouritePerson["nationality"];

document.getElementById("birthYear").textContent =
    favouritePerson["birthYear"];

/* Function to display an interesting fact */
function showFact() {
    document.getElementById("fact").textContent =
        favouritePerson["interestingFact"];
}