var randomnumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice" +randomnumber1 +".png";
var randmImage="images/"+randomDiceImage ;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randmImage)


var randomnumber2=Math.floor(Math.random()*6)+1;
var randomImage2="images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

document.querySelector("h1").innerHTML="Refresh me "


if (randomnumber1>randomnumber2) {
    document.querySelector("h1").innerHTML="player 1 win "
}
else if (randomnumber1<randomnumber2) {
    document.querySelector("h1").innerHTML="player 2 win "
}
else {
    document.querySelector("h1").innerHTML="Match draw"
}