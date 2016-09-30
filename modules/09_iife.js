/**
 * IMMEDIATE INVOKED FUNCTION EXPRESSION
 *
 *  It is a function that is created and immediately available to us.
 *  () around the function tells the JavaScript Engine that the function is meant to be an expression.
 *  I can invoke it by putting parenthesis before the closing brace.
 *  Any variables created within a function is only accessible within that function.
 */

var firstName = 'Jane';

(function(lastName) {
    var firstName = 'John';
    console.log(firstName + ' '+ lastName);
}('Doe'));

console.log(firstName);