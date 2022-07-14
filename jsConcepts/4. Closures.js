// Closures are function inside a function

function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log('Outer variable>> ',outerVariable);
        console.log('Inner variable>> ',innerVariable);
    }
}

const newFunction = outerFunction("outer")("inner")
// newFunction('inner')
newFunction
