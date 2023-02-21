/* Declare variables below to save the different sections (divs) of your story*/
let title=document.querySelector(".title");
let button1=document.querySelector(".option-one");
let button2=document.querySelector(".option-two");
let button3=document.querySelector(".option-three");
let storyOpening=document.querySelector(".story-opening");
let option1screen=document.querySelector(".option-one-screen");

let option2screen=document.querySelector(".option-two-screen");

let open1end=document.querySelector(".open-one-end");

let option1end=document.querySelector(".option-one-end");

let option2end=document.querySelector(".option-two-end");

let option3end=document.querySelector(".option-three-end");

let open2end=document.querySelector(".open-two-end");

let buttons=document.querySelector(".buttons");

let two=document.querySelector(".two");
let one=document.querySelector(".one");
let sad=document.querySelector(".sad");
let NameInput=document.querySelector(".name-input");
let nameButton=document.querySelector(".name-button");
let openingText=document.querySelector(".opening-text");

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables! */
nameButton.onclick=function(){
    openingText.innerHTML= `Congrats ${NameInput.value}! You won free tickets to a Kpop concert! Would you like to go?`;
};

button1.onclick=function(){
option1screen.style.display="block";
    storyOpening.style.display="none";
    buttons.style.display="none";
    title.innerHTML="- Yes please!";
};


button2.onclick=function(){
option2screen.style.display="block";
    storyOpening.style.display="none";
    buttons.style.display="none";
    title.innerHTML="- No thanks!";

};

one.onclick=function(){
option1end.style.display="block";
    option1screen.style.display="none";
    storyOpening.style.display="none";
    buttons.style.display="none";
    title.innerHTML="Option 1";
};
two.onclick=function(){
option3end.style.display="block";
    option1screen.style.display="none";
    storyOpening.style.display="none";
    buttons.style.display="none";
    title.innerHTML="Option 2";
};
sad.onclick=function(){
option2end.style.display="block";
    option1screen.style.display="none";
    storyOpening.style.display="none";
    buttons.style.display="none";
    title.innerHTML=":)";
        option2screen.style.display="none";

};
