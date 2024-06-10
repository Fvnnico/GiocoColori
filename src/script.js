let colorePrincipale; // Variabile per memorizzare il colore principale

/* vittorie reset a 0 */
if (localStorage.getItem("vittorie") === null) {
    localStorage.setItem("vittorie", 0);
}

/* vittorie reset a 0 */
if (localStorage.getItem("sconfitte") === null) {
    localStorage.setItem("sconfitte", 0);
}

// per prendere un colore a caso
function randomizzatoRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function mostraColoreCasuale() {
    const element = document.getElementById("randomColorText");
    colorePrincipale = randomizzatoRGB(); // Memorizza il colore generato
    element.textContent = `Colore RGB randomizzato: ${colorePrincipale}`;
}
mostraColoreCasuale();

// Funzione per applicare colori randomizzati
function applicaColoreRandomizzato() {
    const colorElements = document.querySelectorAll(".colore-random");

    // Scegliere casualmente un elemento da colorare con lo stesso colore di mainElement
    const randomIndex = Math.floor(Math.random() * colorElements.length);

    // Assegnare colori randomizzati agli altri elementi, tranne uno
    colorElements.forEach((element, index) => {
        if (index === randomIndex) {
            element.style.backgroundColor = colorePrincipale;
        } else {
            element.style.backgroundColor = randomizzatoRGB();
        }
    });
}
applicaColoreRandomizzato();

function controllaColore(event) {
    const elementoScelto = event.target;
    if (elementoScelto.style.backgroundColor === colorePrincipale) {
        alert("Hai vinto!");
        let vittorie = parseInt(localStorage.getItem("vittorie"));
        vittorie += 1;
        localStorage.setItem("vittorie", vittorie.toString());
        scoreAggiornato();
        mostraColoreCasuale();
        applicaColoreRandomizzato();
    } else {
        alert("Hai perso!");
        let sconfitte = parseInt(localStorage.getItem("sconfitte"));
        sconfitte += 1;
        localStorage.setItem("sconfitte", sconfitte.toString());
        scoreAggiornato();
        mostraColoreCasuale();
        applicaColoreRandomizzato();
    }
}

// Per ogni blocco da un colore
const colorElements = document.querySelectorAll(".colore-random");
colorElements.forEach((elementoColore) => {
    elementoColore.addEventListener("click", controllaColore);
});



function scoreAggiornato() {
    const vittorie = localStorage.getItem("vittorie");
    const sconfitte = localStorage.getItem("sconfitte");
    document.getElementById(
        "vittorie"
    ).innerText = `Numero di vittorie: ${vittorie}`;
    document.getElementById(
        "sconfitte"
    ).innerText = `Numero di sconfitte: ${sconfitte}`;
}
scoreAggiornato();



function resettaPunteggio() {
    const vittorie = localStorage.getItem("vittorie");
    const sconfitte = localStorage.getItem("sconfitte");

    if (vittorie || sconfitte >= 1) {
        localStorage.setItem("vittorie", 0);
        localStorage.setItem("sconfitte", 0);
        scoreAggiornato();
    }
}
