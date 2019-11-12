//Phase 5
//Exo 1
var BtnControl = document.getElementById("idSubmit"); //L'élément HTML avec l'id correspondant
//l'élément correspondant avec l'event correspondant (ici click)
BtnControl.addEventListener("click", function(){
    alert("Vous avez saisie : "+document.getElementById("idText").value);
});

