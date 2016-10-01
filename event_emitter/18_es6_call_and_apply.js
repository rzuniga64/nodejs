/**
 *  5.38 .call and .apply
 *
 *  We can take any function and use .call or .apply which will invoke the function like parenthesis does.
 *  Allows me to change what keyword this points to.
 *  The difference is that a variable can be passed to it.
 */
var obj = {
    name: '.call and .apply',
    greet: function() {
        console.log(`\nHello ${this.name }`)
    }
};

obj.greet();

// The object becomes the 'this' keyword.
// I'm borrowing the function and giving it my own object to service as the this keyword.
obj.greet.call({name: '.apply and .call'}); // use comma delimited list of parameters
obj.greet.apply({name: '.Call & .Apply'});  // uses array of parameters