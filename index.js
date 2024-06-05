var partner1 = prompt("What is your name?");
var partner2 = prompt("What is yout partner's name?");
var loveScore = Math.random() * 100;
var loveScore= Math.floor(loveScore + 1);

if (loveScore >= 70) {
    alert("The love between " + partner1 + " and " + partner2 + " is very strong");
} else {
    alert("There is a likelyhood of love between " + partner1 + " and " + partner2 );
}

