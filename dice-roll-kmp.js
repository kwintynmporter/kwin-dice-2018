function diceRoller() {
    var theDie = document.getElementById("die"); 
    var status = document.getElementById("result")
    var die1 = Math.floor(Math.random() * 6) + 1; 
    var dieResult = die1 
    status.innerHTML = "Result is "+dieResult+"."; 
}