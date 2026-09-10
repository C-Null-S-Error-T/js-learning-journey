// const numbers = [2,5,3,7,1,4,6,8];
// console.log(numbers);
// numbers.sort();
// console.log(numbers);
/** very very important in javascript sorting 
 * normally javascript sort is value string based sorting;
 * he is sort value string convert and then sort it;
  */
 /** some examples 
  * this is the string sort in javascript;
 */
 const names=["sakib","jumn","tamim","arif","noman","komar"];
 console.log(names);
 names.sort();
 console.log(names);
 /**the main problem in javascript sorting algorithm
  * is this sort is a number sort;
  */
 const numbers = [33,22,123,212,12,46,323,211,136];
 console.log(numbers);
 numbers.sort();
 console.log(numbers);
 /** and this the solutions of two away in sort 
  * fast use the function in sort method this method is sort (());
  * and the second away is statick away in sort --> use loop or cndition;
 */
numbers.sort((a,b)=>a-b);
console.log(numbers);
