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
// const numbers = [12, 25, 40, 51, 70, 90];
// const num1 = 69;
// let i = 0;
// while (i < numbers.length) {
//     if (num1 <= numbers[i]) {
//         console.log(numbers[i]);
//         break;
//     }
//     i++;
// }


//------------------------------------------
// the main memoribul pont in the loop is prefix / postfix ++i or i++;

// console.log("this is postfix in the loop");
// let i = 0;
// while (i++ < 5)
// {
//     console.log(i);

// }
// console.log("this is prefix in the loop");
// let j = 0;
// while (++j < 5) {

//     console.log(j);
// }

let vn = 10;
for (let i = 2; i <= vn; i++) {
    let count = 0;
    console.log(`i = ${i}`);
    for (let j = 2; j <= i; j++) {
        console.log(`j = ${j}`);
        if (i % j == 0) ++count;
        console.log(`count =${count}`);
        if (count > 1) break;
    }
    if (count == 1) console.log(i);
}