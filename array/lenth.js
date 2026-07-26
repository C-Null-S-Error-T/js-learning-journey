//the array in lent;
// const array=[1,2,3,4,5,6,7,8,9,10,11,12];
// console.log(array.length);
// console.log(array[4]);

//change the array index balue in a one spatcik number;
// let arra=[22,23,32,21,33,34,38,27];
// console.log("not change the balue");

// for(let i=0;i<arra.length;i++)
// {
//     console.log(arra[i]);
// }
// console.log("not change the balue");
// arra[3]=300;
// for(let i=0;i<arra.length;i++)
// {
//     console.log(arra[i]);
// }

//sword in array som worked
let arra = [22, 23, 32, 21, 33, 34, 38, 27];
for (let i = 0; i < arra.length; i++) {
    for (let j = i+1; j < arra.length; j++) {
        if (arra[i] > arra[j]) {
            let temp = arra[i];
            arra[i] = arra[j];
            arra[j] = temp;
        }
    }
    console.log(arra[i]);
}