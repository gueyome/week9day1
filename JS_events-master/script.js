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

let contentDisplayed=[true,true,true,true,true,true];

for (let image=0; image<=5;image++){
  viewButton = document.getElementsByClassName('btn btn-sm btn-success')[image];
  viewButton.addEventListener('mouseover',function(){
    cardText = document.getElementsByClassName('card-text')[image];
    cardImage = document.getElementsByClassName('card-img-top')[image];
    if (contentDisplayed[image]){
    cardText.style.display="none";
    cardImage.style.width="20%";
    contentDisplayed[image] = false;
    } else {
    cardText.style.display="";
    cardImage.style.width="100%";
    contentDisplayed[image] = true;
    }
  });
}

// Fonctionnalité 7

let orderButton = document.getElementsByClassName("btn btn-secondary my-2")[0];
let elements = [];

function save_positions(){
  for (let pos=0; pos<=5;pos++){
    elements[pos] = document.getElementsByClassName("col-md-4")[pos];
  }
}

save_positions();

orderButton.addEventListener('click',function(){
  for (let position=1; position<=5;position++){
  document.getElementsByClassName("col-md-4")[position] = elements[position-1];
  }
  document.getElementsByClassName("col-md-4")[0] = elements[5];
  save_positions();
});