var regex = new RegExp("^[a-zA-Z0-9 ]+$");
var breakLine = "\r\n";


var userName = prompt('Quel est votre nom ?');
if (regex.test(userName)) {

} else {
    console.log("Invalid");
    userName = "Saisie incorrecte"
}

var userFirstName = prompt('Quel est votre prénom?');
if (regex.test(userFirstName)) {

} else {
    userFirstName = "Saisie incorrecte"
}

var userTown = prompt('De quel ville venez vous?');
if (regex.test(userTown)) {

} else {
    userTown = "Saisie incorrecte"
}

alert('Bonjour' +
    breakLine +
    'Nom : ' + userName +
    breakLine +
    'Prénom : ' + userFirstName +
    breakLine +
    'Ville : ' + userTown);