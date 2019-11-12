var oneCaract = new RegExp(".+"); // au moins un caractère
var numeric = new RegExp("^[0-9]{5}$"); //5 caractère numérique
var arobase = new RegExp("@{1}"); // au moins un @

//Déclaration des variables des éléments du form
var BtnSend = document.getElementById("submit");
var txtSociety = document.getElementById("society");
var txtPerson = document.getElementById("person");
var txtCp = document.getElementById("cp");
var txtCity = document.getElementById("city");
var txtMail = document.getElementById("mail");
var dflt = document.getElementById("default");
var infoSlct = document.getElementById("infoSelect"); 

dflt.addEventListener("click", function(){
    dflt.innerHTML = "";
    infoSlct.value="Choisissez";
});
//appel de l'event
BtnSend.addEventListener("click", function(){
    //vérification des RegExp
    if(!oneCaract.test(txtSociety.value)){
        alert("Entrez le nom de la société s.v.p !");
    }

    if(!oneCaract.test(txtPerson.value)){
        alert("Entrez le nom de la personne à contacter s.v.p !");
    }

    if(!numeric.test(txtCp.value)){
        alert("Entrez le code postal sur 5 chiffres s.v.p !");
    }

    if(!oneCaract.test(txtCity.value)){
        alert("Entrez le nom de la ville s.v.p !");
    }

    if(!arobase.test(txtMail.value)){
        alert("E-mail invalide : le mail doit comporter @");
    }
});


