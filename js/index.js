var randomName = ["Jackson","Sashi","Monika","Stephen","Rani","Ayutanger","Keneideo","Kholu","Wanyelo","Sindhu","Pinky"];
var size = randomName.length;
var randomNumber = Math.floor((Math.random() * size));
document.getElementsByTagName("h1")[1].innerHTML = randomName[randomNumber];

var randomImage = Math.floor((Math.random() * 14) + 1);
var animalName = "img/pic" + randomImage + ".jpg";
var namean = document.getElementsByTagName("img")[0];
namean.setAttribute("src", animalName);
