var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
var randomSource1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src",randomSource1)


var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;
var randomSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src",randomSource2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML ="player1 wins";
}else if (randomNumber2> randomNumber1) {
document.querySelector("h1").innerHTML ="player2 wins";
}else{
    document.querySelector("h1").innerHTML ="it is a tie";
}