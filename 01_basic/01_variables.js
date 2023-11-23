const accountId = 144553
let accountEmail = "praffullgov@gmail.com"
var accountPassword = "123456"
accoutCity = "nagpur"
let accountState;

// accountId = 2 // not allowed
/*
perfer to not use a var
becasue of issue in block scope and functional scope
*/

accountEmail = "punit123@gmail.com"
accountPassword = "12121212"
accoutCity = "raipur"


console.log();
console.table([accountId, accountEmail, accountPassword, accoutCity, accountState])