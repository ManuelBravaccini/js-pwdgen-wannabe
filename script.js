let userName = prompt("Inserisci il nuo nome")
let userSurname = prompt("Inserisci il tuo cognome")
let userFavouriteColor = prompt("Inserisci il tuo colore preferito")
let newPsw = userName + userSurname + userFavouriteColor

document.getElementById('psw-output').innerHTML = newPsw