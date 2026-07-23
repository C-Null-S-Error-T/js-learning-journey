// console.log("THIS LOOP SHOW IS A IVEN NAUMBER")
// for (let l = 0; l < 20; l++){
//     if(l%2==0)
//     {
//         console.log(l)
//     }
// }
// for (const i = 1; i < 20; i += 2) {
//     console.log(i)
// }
// const is not working because const not chang the ballo 
// for (let i = 1; i < 20; i += 2) {
//     console.log(i)
// }
// use the break stetment and pricktis
// let cad = 55; let num = 0;
// while (true) {

//     if (num == cad) break;
//     num += 1;
//     console.log(num);
// }

//problem find the umber in then big one;
const numbers = [12, 25, 40, 51, 70, 90];
const num1 = 69;
let i=0;
while (i<numbers.length) {
    if (num1 <= numbers[i]){console.log(numbers[i]);
        break;} 
    i++;
}

