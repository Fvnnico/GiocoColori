let mainColor; // Variabile per memorizzare il colore principale

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function displayRandomColor() {
    const element = document.getElementById("randomColorText");
    mainColor = getRandomRGB(); // Memorizza il colore generato
    element.textContent = `Colore RGB randomizzato: ${mainColor}`;
}

displayRandomColor();

// Funzione per applicare colori randomizzati
function applyRandomColors() {
    const colorElements = document.querySelectorAll(".colore-random");

    // Scegliere casualmente un elemento da colorare con lo stesso colore di mainElement
    const randomIndex = Math.floor(Math.random() * colorElements.length);

    // Assegnare colori randomizzati agli altri elementi, tranne uno
    colorElements.forEach((element, index) => {
        if (index === randomIndex) {
            element.style.backgroundColor = mainColor; 
        } else {
            element.style.backgroundColor = getRandomRGB(); 
        }
    });
}

applyRandomColors();


function checkColor(event) {
    const elementoScelto = event.target;

    
    if (elementoScelto.style.backgroundColor === mainColor) {
        alert("Hai vinto!")
        
    } else {
        alert("Hai perso!")
        location.reload();
    }
}


const colorElements = document.querySelectorAll(".colore-random");
colorElements.forEach(element => {
    element.addEventListener('click', checkColor);
});


