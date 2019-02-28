/*
    Symbols are new data types introduced by ES6 to represent unique tokens.
    If you need a unique identifier that should not be confused with another identifier by accident, use a symbol.
*/

const RED = Symbol("The color of a sunset!")
const ORANGE = Symbol("The color of a sunset!")
console.log(RED===ORANGE) // false: The symbols are all different.
