//Exo 2
var BtnCheck = document.getElementById("idCheck");
var magic = parseInt(Math.random()*100); // génère un nombre aléatoire
BtnCheck.addEventListener("click", function(){
    var nb = document.getElementById("idTextMN");
    var answer = parseInt(nb.value);
    //tant que la réponse est différente de magic
    if(answer < magic){
        alert("Plus grand !");
    }else if(answer > magic){
        alert("Plus petit !");
    }else if(answer == magic){
        alert("Bravo le nombre magique était "+magic);
    } 
});