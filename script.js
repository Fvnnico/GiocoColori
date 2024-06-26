let colorePrincipale; // letiabile per memorizzare il colore principale

/* vittorie reset a 0 */
if (localStorage.getItem("vittorie") === null) {
    localStorage.setItem("vittorie", 0);
}

/* vittorie reset a 0 */
if (localStorage.getItem("sconfitte") === null) {
    localStorage.setItem("sconfitte", 0);
}

ultimaVittorie = 0;



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
    element.innerHTML = `Colore RGB randomizzato: ${colorePrincipale}`;
    /* element.style.backgroundColor = colorePrincipale; */
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
        let vittorie = parseInt(localStorage.getItem("vittorie"));
        vittorie += 1;
        localStorage.setItem("vittorie", vittorie.toString());
        scoreAggiornato();
        mostraColoreCasuale();
        applicaColoreRandomizzato();     
    } else {
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
    ).innerText = `Vittorie: ${vittorie}`;
    document.getElementById(
        "sconfitte"
    ).innerText = `Sconfitte: ${sconfitte}`;
    document.getElementById(
        "ultimaVittorie"
    ).innerText = `Ultime vittorie streak : ${ultimaVittorie}`;
}
scoreAggiornato();



function resettaPunteggio() {
    const vittorie = localStorage.getItem("vittorie");
    const sconfitte = localStorage.getItem("sconfitte");
    ultimaVittorie = localStorage.getItem("vittorie");
    if (vittorie || sconfitte >= 1) {
        localStorage.setItem("vittorie", 0);
        localStorage.setItem("sconfitte", 0);
        scoreAggiornato();
    }
}
