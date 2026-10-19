//math.js(exports a function that adds two numbers and a function that subtracts two numbersfunction add (a, b) {
    function add (a,b) {
     if (typeof a !== 'number' || typeof b !== 'number')  {
        throw new Error('Both arguments must be numbers'); //error handling to ensure that both arguments are numbers
    }
    return a + b;
    }
    
function subtract (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }   return a - b;
}

//module.exports = { add, subtract }; //add the export statement to make the functions available for import in other files     