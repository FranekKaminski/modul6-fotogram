let currentImageIndex = 1;
const maxImages = 12;

// Damit DIALOG funktioniert:
const dialogRef = document.getElementById("myDialog");
const imageTitle = document.getElementById("image-title-number");
const zoomedImage = document.getElementById("zoomedimage");
const imageCounter = document.getElementById("imagecounter");

const imageNames = [
    "Mountain lake",
    "Japan at night",
    "Dark clouds",
    "Yellow blue bird",
    "Tornado",
    "Lake",
    "Animal in the sea",
    "Night light",
    "Cute bird",
    "Leopard cats",
    "Blue sky with mountains",
    "Snowy tree",
];

// Damit im Dialog bild, titel und counter aktualisiert:
function updateDialogImage() {
    zoomedImage.src = `./img/${currentImageIndex}.jpg`;
    imageCounter.innerHTML = `${currentImageIndex} / ${maxImages}`;
    imageTitle.innerHTML = imageNames[currentImageIndex - 1];
}

// Bilder Galerie wird hier generiert:
function generateImages() {
    const imagesRef = document.getElementById('images-section');

    for (let i = 1; i <= maxImages; i++) {
        imagesRef.innerHTML += `<img class="bilder" id="detail${i}" src="./img/${i}.jpg" alt="${imageNames[i - 1]}" onclick="openImage(${i})" tabindex="0">`
    }
}

// Damit DIALOG sich öffnen und schließen kann:
function openImage(index) {
    currentImageIndex = index;
    updateDialogImage();
    dialogRef.showModal();
}

function closeImage() {
    dialogRef.close();
}

dialogRef.addEventListener("click", (event) => {
    if (event.target === dialogRef) {
        closeImage();
    }
})



// Damit der Next Button funktioniert
function nextImage() {
    if (currentImageIndex < maxImages) {
        currentImageIndex++;
    } else {
        currentImageIndex = 1; // wieder von vorne
    }
    updateDialogImage();
}

// Damit der Previous Button funktioniert
function previousImage() {
    if (currentImageIndex > 1) {
        currentImageIndex--;
    } else {
        currentImageIndex = maxImages; // zum letzten Bild
    }
    updateDialogImage();
}

// Damit die Arrow Keys funktionieren
function handleKeys(event) {
    if (event.key === "ArrowLeft") {
        previousImage();
    }
    if (event.key === "ArrowRight") {
        nextImage();
    }
}