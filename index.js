// Dicee 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1
document.querySelector(".img1").setAttribute("src", "./images/dice"+ randomNumber1 +".png")

// Dicee 2
let randomNumber2 = Math.round(Math.random() * 5) + 1
document.querySelector(".img2").setAttribute("src", "./images/dice"+ randomNumber2 +".png")

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Winner ¡Player 1! 🎉"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Winner ¡Player 2! 🎉"
} else {
    document.querySelector("h1").textContent = "¡Draw! Try again"
}
