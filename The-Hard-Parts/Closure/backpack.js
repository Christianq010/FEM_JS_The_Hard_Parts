// The Closure / Lexical Scope function

function outer (){
    let counter = 0;
    function incrementCounter (){
        counter ++;
    }
    return incrementCounter;
}

let myNewFunction = outer();
myNewFunction();
myNewFunction();

let anotherFunction = outer(); //mynewFunction = incrementCounter
anotherFunction();
anotherFunction();