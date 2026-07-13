//node .\loop_in_jabascript\Introduction_loop.js
// Introduction to Loops in JavaScript
/* name of the loop: for loop, while loop, 
do while loop, for in loop, for of loop
--------------------------------------
syntax of all loops:
1. for loop:
for(initialization; condition; increment/decrement){
    // code to be executed
} 
2. while loop:
while(condition){
    // code to be executed
}
3. do while loop:
do{
    // code to be executed
}while(condition);
*/
const number = [33, 44, 55, 66, 77, 88, 99];
console.log(number)
    for(const  num of number)
    {
        console.log(num);
    }