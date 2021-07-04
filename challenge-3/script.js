function rpsGame(choice){
    var humanChoice, pcChoice;
    humanChoice = choice.id;
    choices = ['rock', 'paper', 'scissors']
    pcChoice = choices[choiceGenerator()];   
    results = decideWinner(humanChoice, pcChoice); 
    message = finalMessage(results) // to print final result after user has chosen. Also contains colour of result.
    frontEnd(humanChoice,pcChoice,message);
}

function choiceGenerator(){
    return Math.floor(Math.random()*3); // picks random number between 0 and 3 (3 not included). Floor ensures the values are only 0,1,2.
}

function decideWinner(humanChoice, pcChoice){  // [0,1] if pc won, [1,0] if you won, [0.5,0.5] if tie
    if(humanChoice==pcChoice){ // tie
        return [0.5,0.5];
    }
    var resultDatabase = { // more organized then if else
        'rock': {
            'scissors':1,
            'paper':0
        },
        'paper': {
            'scissors':0,
            'rock':1
        },
        'scissors': {
            'rock':0,
            'paper':1
        }
    };
    if(resultDatabase[humanChoice][pcChoice]==1){ // win
        return [1,0];
    }
    else{ // lose
        return [0,1];
    }
}

function finalMessage(results){
    if(results[0]==0){
        return {
            'message': 'You lost!',
            'color': 'red'
        }
    }
    else if(results[0]==1){
        return {
            'message': 'You won!',
            'color': 'green'
        }
    }
    else{
        return {
            'message': 'Tie!',
            'color': 'yellow'
        }
    }
}

function frontEnd(humanChoice, pcChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // removing all images on click and display only human and pc choice
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var pcDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanChoice] + "' height=250 width=250>";
    document.getElementById('result').appendChild(humanDiv);

    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>";
    document.getElementById('result').appendChild(messageDiv);
    
    pcDiv.innerHTML = "<img src='" + imagesDatabase[pcChoice] + "' height=250 width=250>";
    document.getElementById('result').appendChild(pcDiv);

    var resetButton = document.createElement('button');
    resetButton.innerHTML = 'Reset';
    resetButton.className = 'btn btn-danger btn-lg';
    resetButton.onclick = function homepage(){
        location.href = "";
    }
    document.getElementById('reset').appendChild(resetButton);
}

