//-----------------------Partie 1------------------------------
//Phase 5
function afficheTexte(){
    //Demande Nom et prénom
    var nom = window.prompt("Entrez votre nom");
    var prenom = window.prompt("Entrez votre prénom");
    //Affichage des données dans la console
    console.log(nom);
    console.log(prenom);
    //Confirmation du sexe
    if(window.confirm("Etes-vous un homme ?")==true){
        alert("Bonjour Monsieur "+nom+" "+prenom+"\n Bienvenue sur notre site web !");
    }else{
        alert("Bonjour Madame "+nom+" "+prenom+"\n Bienvenue sur notre site web !");
    }
}

//Phase 6
function operateur(){
    var a ="100"; // chaine de caractères
    var b = 100; // entier
    var c = 1.00 // float
    var d = true; //bool

    alert("Ceci est une chaîne de caractères : "+a);
    b--;
    alert(b);
    c += a;
    alert(c);
    d = false;
    alert(d);
}

//Phase 7
function condition0(){
    var temperature = window.prompt("Entrez la temperature");
    var tension = window.prompt("Entrez la tension");
    var pouls = window.prompt("Entrez le pouls");
    var patient = window.confirm("Etes-vous patient ?");
    //console.log affiche les valeurs récupérées dans la console
    console.log(temperature);
    console.log(tension);
    console.log(pouls);
    //début des conditions
    if(temperature > 38){
        alert("Le patient a de la fièvre");
    }
    
    if(temperature > 41 && tension > 25){
        alert("Le patient va perdre patience");
    }

    if(patient==false){
        alert("Econduire l'olibrius");
    }

    if(temperature > 42 || (tension < 25 && pouls > 180)){
        alert("Prévenir la famille");
    }

    if(temperature > 40 || tension >=25){
        alert("Hospitaliser le patient");
    }

    if(patient == true && pouls == 0){
        alert("Appeler le curé");
    }
    // fin des conditions
}

function condition1(){
    //Number si valeur différent d'un numérique renvoi NaN
    var nb = Number(window.prompt("Entrez un nombre"));
    console.log(nb);
    //isNaN vérifie si la variable renvoi NaN
    if(isNaN(nb)){
        alert("Erreur : Entrez un nombre");
    }else{
        //% donne le reste d'une division
        if(nb%2 == 0){
            alert("Le nombre est pair");
        }else{
            alert("Le nombre est impair");
        }
    }
}

function condition2(){
    //Number si valeur différent d'un numérique renvoi NaN
    var annee = Number(window.prompt("Entrez votre année de naissance"));
    var anneeActuelle = Number(window.prompt("Entrez l'année actuelle"));
    console.log(annee); 
    console.log(anneeActuelle);
    //parseInt converti un caractère en entier 
    var age = parseInt(anneeActuelle - annee);
    if(age < 18){
        alert("Vous avez "+age+" ans \n Vous êtes mineur")
    }else{
        alert("Vous avez "+age+" ans \n Vous êtes majeur");
    }
}

function condition3(){
    var nb1 = Number(window.prompt("Entrez le nombre 1"));
    var nb2 = Number(window.prompt("Entrez le nombre 2"));
    var operateur = window.prompt("Choisissez l'opérateur");
    //isNaN vérifie si la variable renvoi NaN
    if(isNaN(nb1)||isNaN(nb2)){
        alert("Entrez des nombres valides");
    }else{
        //switch case -> faire des instructions pour chaque conditions
        switch(operateur){
            
            case "+":
                alert(nb1+nb2);
            break;
            
            case "-":
                alert(nb1-nb2);
            break;
            
            case "*":
                alert(nb1*nb2);
            break;

            case "/":
                alert(nb1/nb2);
            break;

            default:
                alert("Entrez un opérateur valide");
            break; 
        }
    }
}

function condition4(){
    var situation = window.confirm("Etes-vous célibataire ?");
    var salaire = Number(window.prompt("Quel est votre salaire mensuel ?"));
    var res = 0;
    //Nombre d'enfants
    if(window.confirm("Avez-vous des enfants ?")==true){
        var enfant = Number(window.prompt("Combien ?"));
        //isNaN vérifie si la variable renvoi NaN
        if(isNaN(enfant) || enfant == 0)
        {
            alert("Entrez un nombre d'enfants valides");
            window.prompt("Combien ?");
        }
    }else{
        enfant = 0;
    }

    if(enfant == 0){
        //Vérification de la situation
        //switch case -> faire des instructions pour chaque conditions
        switch(situation){
            case true:
                res += 20;
            break;
            
            case false:
                res += 25;
            break;
        }
    }else{
        //Vérification de la situation
        //switch case -> faire des instructions pour chaque conditions
        switch(situation){
            case true:
                res += 20+(enfant*10);
            break;
            
            case false:
                res += 25+(enfant*10);
            break;    
        }
    }

    if(salaire < 1200){
        res = res + 10;
    }

    if(situation > 50){
        res = 50;
    }

    alert("La particpation au prix du repas est de "+ res +" %");
}

//Phase 8
function boucles1(){
    var i=0;      
    //do....while exécute les instructions avant de vérifié la condition  
    do{
        i++;
        var prenom = window.prompt("Saisissez le prénom N°"+i+"\n ou Clic sur Annuler pour arrêter la saisie.");
        console.log("Prénom : "+prenom);
    }while(prenom !=null && prenom != "");
    i--;
    console.log("Total : "+i);
}

function boucles2(){
    var nb = Number(prompt("Entrez un nombre :"));
    if(isNaN(nb)){
        alert("Entrez un nombre valide");
    }else{
        for(let i=1; i<=nb; i++){
            document.write(i+" ");
        }
    }
}

function boucles3(){
    var n1 = Number(parseInt(prompt("Entrez le nombre N°1 :")));
    var n2 = Number(parseInt(prompt("Entrez le nombre N°2 :")));
    var somme = 0;
    if(isNaN(n1) || isNaN(n2)){
        alert("Entrez des nombres valides");
    }else{
        for(i = n1; i<=n2; i++){
            somme += i;
        } 
        alert("La somme des entiers de n1 à n2 sont égales à "+somme);
    }
}

function boucles4(){      
    var somme = 0;
    var moyenne = 0;
    var taille= 0;
    //do....while exécute les instructions avant de vérifié la condition  
    do{
        var nb = parseInt(prompt("Saisissez un entier ou 0 pour arrêter la saisie"));
        if(isNaN(nb)){
            alert("Entrez un entier valide");
        }else{
            taille++;
            somme += nb;
        }
    }while(nb != 0);
    moyenne = somme/(taille-1);
    alert("Somme = "+somme+"\n Moyenne = "+moyenne);
}

function boucles5(N,X){
    var res = 0;
    if(isNaN(N) || isNaN(X)){
        alert("Entrez des entiers valides");
    }else{
        for(i = 1; i<=N; i++)
        {
            res = i*X
            document.write(i+" x "+X+" = "+res+"<br>");
        }
    }
}

function boucles6(myWord){
    var length = myWord.length; //renvoi le nombre de caractères dans la chaine
    var voyelles ="";
    alert(length+ " lettres");
    for(i = 0; i < length; i++){
        //Vérifie la présence de voyelles et les concatène
        if(myWord[i] == "a" || myWord[i] == "e" || myWord[i] == "i" || myWord[i] == "o" || myWord[i] == "u" || myWord[i] == "y"){
            voyelles += myWord[i];
        }
    }
    alert(voyelles.length+" voyelles -> "+voyelles);
}

function boucles7(){
    var nb = Number(prompt("Entrez un nombre"));
    var premier = true; //on considère qu'il est premier de base
    if(isNaN(nb)){
        alert("Entrez un nombre valide");
    }else{
        for (let i = 2;i <= nb / 2; i++){
            if(nb % i == 0){
                premier = false;
                break;
            }
        }
        if(premier == false){
            alert(nb+" n'est pas premier");
        }else{
            alert(nb+" est premier");
        }
    }
}

function boucles8(){
    var magic = parseInt(Math.random()*100); // génère un nombre aléatoire
    console.log(magic)
    var answer = 0;
    //tant que la réponse est différente de magic
    while(answer != magic){
        answer = parseInt(prompt("Quel est le nombre ?"));
        if(answer < magic){
            alert("Plus grand !");
        }else if(answer > magic){
            alert("Plus petit !");
        }
    }
    alert("Bravo le nombre magique était "+magic);
}

//Phase 9
function produit(x,y){
    var produit = x*y;
    var cube = Math.pow(3,x);
    document.write("Le produit de "+x+" x "+y+" est égal à "+produit+"<br> Le cube de "+x+" est égal à "+cube+"<br>");
}

function afficheImg(image){
    document.write("<img src="+image+"></img>");
}

function fonction1(){
    produit(3,5);
    afficheImg("assets/img/papillon.jpg");
}

function fonction2(){
    var phrase = prompt("Entrez la phrase");
    var lettre = prompt("Quelle lettre rechercher ?")
    var taillePhrase = phrase.length;
    var count = 0;
    for(i = 0; i <= taillePhrase; i++){
        if(phrase[i] == lettre){
            count ++;
        }
    }
    alert("Il y a "+count+" "+lettre+" dans la phrase");
}

function fonction3(){
    var choix = parseInt(prompt("1- Multiples\n 2- Somme et moyenne\n 3- Recherche du nombre de voyelles\n 4- Recherche du nombre du caractères suivant\n\n Entrez votre option :"));
    switch (choix) {
        case 1:
            a = parseInt(parseInt(prompt("Entrez le nombre entier de multiples")));
            b = parseInt(parseInt(prompt("Entrez l'entier à multiplier")));
            boucles5(a,b);
            break;
        case 2:
            boucles4();
            break;
        case 3:
            var myWord = String(prompt("Entrez un mot"));
            boucles6(myWord);
            break;
        case 4:
            var phrase = prompt("Ecrivez la phrase");
            var lettre = prompt("Quelle lettre compter ?");
            fonction2(phrase, lettre);
            break;
        default:
            alert("Entrez un choix valide");
            break;
    }
}

function strtok(str1, str2, n){
    var word = str1.split(str2); // on assigne  à la variable le séparateur pour la chaine
    console.log(word[n-1]);
}
 
//Phase 10
function tab1(){
    var length = parseInt(prompt("Veuillez saisir la taille du tableau"));
    var myTab = new Array(length); // Initialisation de tableau
    for(i = 0; i <= length; i++){
        myTab[i] = prompt("Saisissez une valeur");// on boucle pour saisir dans toute les cases du tab
        console.log(myTab[i]);
    }
}
//----------------------------------------------------------------------------
function GetInteger(){
    int = parseInt(prompt("Entrez un entier au clavier"));
}

function InitTab(){
    var nbPost = parseInt(prompt("Entrez le nombre de postes"));
    myTab = new Array(nbPost); //Initialisation de tableau
}

function SaisieTab(myTab){    
    for(let i = 0; i < myTab.length; i++){         
        myTab[i]= parseInt(prompt("Entrez un poste"));   
    }  
    return myTab;
}

function AfficheTab(myTab){ 
    console.log(myTab);
}

function RechercheTab(myTab){
    let poste= parseInt(prompt("Quel rang afficher ?"));   
    poste--; 
    console.log(myTab[poste]); // poste-1 car le tab commence à 0
}

var somme = 0; 
var max = 0;     
var moyenne = 0;
function InfoTab(myTab,somme){
    for (i = 0; i < myTab.length ; i++){    // pour chaque case du tab     
        somme+=myTab[i];  
        if(max<myTab[i]){   //Verifie si il ya un nombre superieur au max actuel      
            max=myTab[i];   // si oui le remplace sinon continu le for jusqu'a la fin du tab
        }                
    }   
    moyenne = somme/myTab.length;
    console.log(moyenne);   
    console.log("Poste max :"+max+"\n Moyenne poste :"+moyenne);
}

function tab2(){
    GetInteger();
    InitTab();
    SaisieTab(myTab);
    AfficheTab(myTab);
    RechercheTab(myTab);
    InfoTab(myTab,somme);
}

function tab3(){
    var myTab = [5, 18, 14, 4, 26]; // Initialisation du tab
    var state = true; //Variable de vérification d'échange
    var count = 1;
    document.write("Tableau initial <br>"+myTab+"<br><br>");
    do{
        state = false; //initialisation
        for(let i = 0; i < myTab.length-1; i++){
            if(myTab[i] > myTab[i+1]){
                let temp = myTab[i];
                myTab[i] = myTab[i+1]
                myTab[i+1] = temp; 
                state = true;
                document.write("Passage N°"+count+"<br>"+myTab+"<br><br>");
                count++;
            }
        }
    }while(state)
}

function tab4(){
    var array = [666, 1, 7, 69, 33, 13];
    var j = 1;
    var n = array.length;

    while(j != n){
        i = j-1;
        let tmp = array[j];
        while(i > -1 && array[i] > tmp){
            array[i+1] = array[i];
            i = i-1;
        }
        array[i+1] = tmp;
        j = j+1;
    }
    alert(array+"\n j = "+j+"\n n = "+n);
}

function addHour(chaine1, chaine2){
    var tab1 = chaine1.split(":");
    var tab2 = chaine2.split(":");
    var seconde = parseInt(tab2[2])+parseInt(tab1[2]);
    var minute = parseInt(tab2[1])+parseInt(tab1[1]);
    var heure = parseInt(tab2[0])+parseInt(tab1[0]);
    while(seconde > 59){
        minute++;
        seconde -= 60;
    }
    while(minute>59){
        heure++;
        minute-=60;
    }
    var resData = heure+":"+minute+":"+seconde;
    alert(resData);
}

function tab5(){
    var heure1 = prompt("Entrez une heure au format HH:MM:SS");
    var heure2 = prompt("Entrez une deuxième horaire au format HH:MM:SS");
    addHour(heure1,heure2);
}

function tab6(){
    alert("Pas compris");
}

//-------------------------------------Partie 2--------------------
//Phase 3
function ObjNat(){
    var somme = 0;
    var moyenne = 0;
    var tab = new Array();
    var i = 0;
    //while exécute les instructions avant de vérifié la condition  
    while(tab[i] != 0){
        //on ajoute la valeur à la fin du tableau
        tab.push(tab[i]= Number(prompt("Entrez un nombre ou 0 pour arrêter la saisie")));
        somme += tab[i];
        i++;
    }
    //On coupe le tableau pour retirer le 0 et modifier la taille du tableau
    tab.pop();
    tab = tab.slice(tab[0], tab[(tab.length)]);
    moyenne = (somme/tab.length);
    alert("Total valeurs saisies = "+tab.length+"\nSomme = "+somme+"\n Moyenne = "+moyenne);
}
