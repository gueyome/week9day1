// Fonctionnalité 1

myFooter = document.getElementsByTagName("footer")[0];
let i = 0;

function clique_number(){
  i = i +1;
  console.log("clique n°" + i)
}

myFooter.addEventListener('click',clique_number);

// Fonctionnalité 2

myHeader = document.getElementById("navbarHeader");
myHamburger = document.getElementsByClassName("navbar-toggler")[0];

function clique_hamburger(){
  myHeader.classList.toggle("collapse");
}

myHamburger.addEventListener('click',clique_hamburger);

// Fonctionnalité 3

myButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];

myButton.addEventListener('click',function(){
  document.getElementsByClassName("card-text")[0].style.color = "red";
})

// Fonctionnalité 4

myButton = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];

myButton.addEventListener('click',function(){
  if (document.getElementsByClassName("card-text")[1].style.color === "green"){
    document.getElementsByClassName("card-text")[1].style.color = "";
  } else {
    document.getElementsByClassName("card-text")[1].style.color = "green";
  }
})

// Fonctionnalité 5

myNavBar = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0];
let bootstrap_hidden = false;

myNavBar.addEventListener('dblclick',function(){
  if (bootstrap_hidden){
    document.head.getElementsByTagName("link")[0].href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    bootstrap_hidden = false;
  } else {
  document.head.getElementsByTagName("link")[0].href="";
  bootstrap_hidden = true;
  }
});

// Fonctionnalité 6

viewButton = document.getElementsByClassName('btn btn-sm btn-success')[0];
cardText = document.getElementsByClassName('card-text')[0];
cardImage = document.getElementsByClassName('card-img-top')[0];
contentDisplayed = true;
viewButton.addEventListener('mouseover',function(){
  if (contentDisplayed){
  cardText.style.display="none";
  cardImage.style.width="20%";
  contentDisplayed = false;
  } else {
  cardText.style.display="";
  cardImage.style.width="100%";
  contentDisplayed = true;
  }
});

// Fonctionnalité 7

