function instructions(){
    document.getElementById("landing").style.display = "none";
    document.getElementById("instr").style.display = "inline-block";
    document.getElementById("game").style.display = "none";
    document.getElementById("result").style.display = "none";
}

function gameplay(){
    document.getElementById("landing").style.display = "none";
    document.getElementById("instr").style.display = "none";
    document.getElementById("game").style.display = "inline-block";
    document.getElementById("result").style.display = "none";
}

function result(element){
    player = document.getElementsByClassName('player');
    opponents = document.getElementsByClassName('computer');
    for(i = 0; i < opponents.length; i++){
        opponents[i].style.display = 'none';
        player[i].style.display = 'none';
    }
    x = Math.floor(Math.random() * 5);
    var score = 0;
    if(element.id == 'rock'){
        if(x == 2 || x == 3){
            score = 1;
        }
        else if(x == 0){
            score = 2;
        }
    }
    if(element.id == 'paper'){
        if(x == 0 || x == 4){
            score = 1;
        }
        else if(x == 1){
            score = 2;
        }
    }
    if(element.id == 'scissors'){
        if(x == 1 || x == 3){
            score = 1;
        }
        else if(x == 2){
            score = 2;
        }
    }
    if(element.id == 'lizard'){
        if(x == 1 || x == 4){
            score = 1;
        }
        else if(x == 3){
            score = 2;
        }
    }
    if(element.id == 'spock'){
        if(x == 0  || x == 2){
            score = 1;
        }
        else if(x == 4){
            score = 2;
        }
    }
    opponents[x].style.display = 'inline-block';
    for(i = 0; i < player.length; i++){
        if(player[i].alt == element.id){
            player[i].style.display = 'inline-block'
        }
    }
    document.getElementById("landing").style.display = "none";
    document.getElementById("instr").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("result").style.display = "inline-block";
    if(score == 0){
        alert("YOU LOSE");
    }
    else if(score == 1){
        alert("YOU WIN!!");
    }
    else{
        alert("DRAW");
    }
}