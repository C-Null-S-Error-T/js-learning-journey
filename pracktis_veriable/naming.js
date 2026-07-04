//1. no keyword in variable name
var var = 1; // ❌ Error: Unexpected token 'var'
var let = 2; // ❌ Error: Unexpected token 'let'
//2.no special characters in variable name
var my number = 5; // ❌
var my-var = 3; // ❌ Error: Unexpected token '-'
var my_var = 4; // ✅ Valid
//3.no quotes in variable name
var "name" = "John"; // ❌ Error: Unexpected string
var 'name' = "John"; // ❌ Error: Unexpected string
//4.cannot start with a number
var 1name = "John"; // ❌ Error: Unexpected number
var name1 = "John"; // ✅ Valid;
//.5 name is case sensitive
var Name = "John"; // ✅ Valid
var name = "John"; // ✅ Valid
console.log(Name); // "John"
console.log(name); // "John"
//6.how to write a long variable name
var myVeryLongVariableName = "This is a long variable name";//camel case;
var my_very_long_variable_name = "This is a long variable name";//snake case;
var MyVeryLongVariableName = "This is a long variable name";//Pascal case;
