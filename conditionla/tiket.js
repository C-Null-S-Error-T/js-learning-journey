const age = 40;
let student = true;
if(age <= 10){
    console.log("free ticket");
}
else if(student){
    console.log("50% discount ticket");
}
else if(age >= 60){
    console.log("15% discount ticket");
}
else
{
    console.log("Regular ticket fare 800 tk")
}

/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/