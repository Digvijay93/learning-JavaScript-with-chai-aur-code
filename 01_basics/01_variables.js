

const accountId = 144553366; //"const" variable once declared cant be changed.

let accountEmail = "digvijay@gmail.com";
var accountPassword = "123456";

accountCity = "Jaipur";// dont use this way to declare variable.

// accountId = 2; this will throw error, because it is "const" variable.

accountEmail = "hc@gmail.com";
accountPassword = "2121656565";

accountCity = "Bhandara";// this is also variable declaration way in JS,but dont use it.

// console.log(accountId);

/*
Prefer Not To Use "var" variables.Because of Block scope and Functional Scope.
So, only use "let" & "const" variables.
*/

// "console.table" ==> to display all variables in table form.
console.table([accountId, accountEmail, accountPassword, accountCity]);

// to show output simply type "log" and click enter 
console.log(accountEmail);
