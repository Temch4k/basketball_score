let home_score = 0
let guest_score = 0
let period = 0

function plus_home(amount){
    home_score+=amount
    document.getElementById("home_score-id").innerText = home_score
    guest_score_display=document.getElementById("guest_score_div-id")
    home_score_display=document.getElementById("home_score_div-id")
    
    if(home_score > guest_score){
        home_score_display.classList.add("winning"); 
        guest_score_display.classList.remove("winning");
    }else if (home_score == guest_score){
        guest_score_display.classList.remove("winning");
        home_score_display.classList.remove("winning");
    }
}

function plus_guest(amount){
    guest_score+=amount
    document.getElementById("guest_score-id").innerText = guest_score
    guest_score_display=document.getElementById("guest_score_div-id")
    home_score_display=document.getElementById("home_score_div-id")

    if(guest_score > home_score){
        guest_score_display.classList.add("winning"); 
        home_score_display.classList.remove("winning");
    }else if (home_score == guest_score){
        guest_score_display.classList.remove("winning");
        home_score_display.classList.remove("winning");
    }
}

function reset_game(){
    document.getElementById("home_score-id").innerText = 0
    home_score = 0
    document.getElementById("guest_score-id").innerText = 0
    guest_score = 0
    document.getElementById("period-id").innerText = "Period: 0"
    period = 0
    
    guest_score_display=document.getElementById("guest_score_div-id")
    home_score_display=document.getElementById("home_score_div-id")
    guest_score_display.classList.remove("winning");
    home_score_display.classList.remove("winning");
}

function plus_period(){
    period += 1
    console.log(period)
    period_display=document.getElementById("period-id")
    period_display.innerText = "Period: "+ period
}