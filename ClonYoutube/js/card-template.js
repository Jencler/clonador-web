const cardTemplate = document.getElementById("video-card")

const cardGrid = document.getElementById("card-grid")

for(let i = 1; i <= 52; i++) {
    const card = cardTemplate.content.cloneNode(true)
    cardGrid.appendChild(card)
}