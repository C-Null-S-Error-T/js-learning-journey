// const numbers=[1, 2, 3, 4, 5, 6];
// const rever_numbers=[];
// for(let i=0; i<numbers.length; i++)
// {
//     console.log(numbers[i]);
//     rever_numbers.unshift(numbers[i]);
// }
// for(let j=0; j<rever_numbers.length; j++)
// {
//     console.log(rever_numbers[j]);
// }

const numbers=[1, 2, 3, 4, 5, 6];
for(let i=numbers.length-1;i>=0;i--)
{
    console.log(numbers[i]);
}
for(const number of numbers)
{
    console.log(number);
}
numbers.reverse();
for(const number of numbers)
{
    console.log(number);
}