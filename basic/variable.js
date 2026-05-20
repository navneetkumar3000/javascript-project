const accountId = 144555
let accountEmail = "navneetkumar7888@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState


// accountId = 2 not allowed
accountEmail = "ab@gmail.com"
accountPassword = "3244"
accountCity = "Bengalore"

console.log(accountId)
/*
    Prefer not to use var
    Because of issue in Block scope and Functional scope
    after code write please save the file to get the output otherwise till that previous save that will only show
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

