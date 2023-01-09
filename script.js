let arrObj = [
    {"person" : "Mark","age": 25, "avatar":"https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Blank&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Gray01&eyeType=Close&eyebrowType=UpDown&mouthType=Sad&skinColor=Black"},
    {"person" : "Bill", "age": 65, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light"},
    {"person" : "Spencer", "age" : 34, "avatar" : "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Sad&skinColor=Yellow"}
];

let elem = $('#person')
let currentIndex = 0; // Ajoutez cette ligne

//Methode js native pour parcourir un tableau d'objets ( avec for...in )
for(let i in arrObj) {
    let createImg = document.createElement("img");
    let next = document.createElement("button")
    let prev = document.createElement("button")
    let name = document.getElementById("name")

    function Person() {
        let obj = arrObj[currentIndex];
        elem.append(createImg)
        createImg.src = obj.avatar;
        name.innerHTML = obj.person + "(" + obj.age + ")"


        elem.append(next)
        next.innerHTML = ">"

        elem.append(prev)
        prev.innerHTML = "<"

        next.addEventListener("click", function (){
            if (currentIndex < arrObj.length - 1) {
                currentIndex+=1;
                Person();
            }
        });
        prev.addEventListener("click", function (){
            if (currentIndex > 0) {
                currentIndex--;
                Person();
            }
        });
    }
}


//Autre méthode : utilisation de forEach
arrObj.forEach(function(arr) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
    //console.log("Résultat avec foreach = " + arr.age);

});

//Méthode utilisant jQuery
$.each(arrObj, function(index, value) {
    //Afficher la propriété age pour chaque objet contenu dans mon tableau
    //console.log("Affichage age utilisant jQuery = " + value.age);
});

Person()
