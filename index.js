var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomdice1 = "images/" + "dice" + randomNumber1 + ".png";
var randomdice2 = "images/" + "dice" + randomNumber2 + ".png";

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", randomdice1);
img2.setAttribute("src", randomdice2);

var heading = document.querySelector("h1");




    if (randomNumber1 === randomNumber2)
    {heading.textContent = "Draw";}
    
    else if (randomNumber1 > randomNumber2) 
        {heading.textContent = "Player1 Wins";}
    if (randomNumber1 <  randomNumber2) 
        {heading.textContent = "Player2 Wins";}
      





