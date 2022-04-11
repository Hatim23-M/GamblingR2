document.querySelectorAll("[type=checkbox]").forEach(checkbox =>{
    checkbox.addEventListener("click",function(e){
        if(this.checked){
            this.parentElement.setAttribute("aria-checked", "true");
        }
        else{
            this.parentElement.setAttribute("aria-checked", "false");
        }
        e.stopPropagation();
    })
})

let dresult = document.getElementById("res")

let y = 0;
let arr = [];
function match() {
    if (arr.includes(y)){
       document.getElementById("match").innerHTML="Matched with the dice";
       localStorage.setItem("Genre",y);
       document.getElementById("see_question").setAttribute('href','/question')
       document.getElementById("see_question").innerHTML="move to question";
       console.log(localStorage.getItem("Genre"))
    }
    else {
        if(arr.length!=0)
        document.getElementById("match").innerHTML="try again, no value matched";
        else
        alert("Atleast tick one tickbox")
    }
}
let z = 0;
let coins =localStorage.getItem("coin");
document.getElementById("money1").innerHTML=coins;
document.getElementById("LEVEL").innerHTML ="Level "+localStorage.getItem("level");
if(localStorage.getItem("level")==7)
{
    window.location.href = "/completed";
}
const rollDice = document.getElementById("roll-button")
rollDice.addEventListener("click", function (e) {
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach(die => {
        die.dataset.roll = getRandomNumber(1, 7);
        console.log(die.dataset.roll)
        y = die.dataset.roll
    });
    const x = document.querySelectorAll("[aria-checked=true]")
    z = x;
    for (let i = 0; i < x.length; i++) {
        console.log(x[i].getAttribute("option"))
        arr.push(x[i].getAttribute("option"));
    }
    coins= updateCoins(coins);
    document.getElementById("money1").innerHTML=coins;
    localStorage.setItem("coin",coins);
    match();
    document.getElementById("res").innerHTML= "Result of dice is "+y;
})

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function updateCoins(value) {
        console.log(value);
        value = value - (z.length * 50);
        console.log(z.length);
        if(value<0)
        window.location.href = "/disqualified";
        return value;     
}