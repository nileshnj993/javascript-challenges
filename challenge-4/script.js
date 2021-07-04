var allButtons = document.getElementsByTagName('button');
var copyAllButtons = [];

for(let i=0; i<allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[1]);
}

function buttonColorChange(buttonChange){
    if(buttonChange.value === 'red'){
        buttonRed();
    }
    else if(buttonChange.value === 'green'){
        buttonGreen();
    }
    else if(buttonChange.value === 'reset'){
        buttonReset();
    }
    else{
        buttonRandom();
    }
}

function buttonRed(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]); // access each button and remove the btn-primary etc class 
        allButtons[i].classList.add('btn-danger');
    }    
}

function buttonGreen(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]); // access each button and remove the btn-primary etc class 
        allButtons[i].classList.add('btn-success');
    }   
}

function buttonReset(){
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]); // access each button and remove the btn-primary etc class 
        allButtons[i].classList.add(copyAllButtons[i]);
    }   
}

function buttonRandom(){
    let choices = ['btn-success', 'btn-danger', 'btn-warning', 'btn-primary'];
    for(let i=0; i<allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]); // access each button and remove the btn-primary etc class 
        let choice = choices[Math.floor(Math.random()*4)];
        allButtons[i].classList.add(choice);
    }   
}