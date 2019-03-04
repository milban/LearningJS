const multiline1 = "line1\
line2"
console.log(multiline1) // don't line break

const multiline2 = "line1\n\
line2"
console.log(multiline2) // do line break

const multiline3 = `line1
line2`
console.log(multiline3) // do line break

const multiline4 = `line1
line2
line3`
console.log(multiline4)

/*
    do not recommend the above methods.
    recommend the following method.
*/

const multiline5 = "line1\n" +
    "line2\n" +
    "line3"
console.log(multiline5)

// can mix quotes and backticks.
const temperature = 27.5
const multiline6 = 'Current temperature:\n' +
    `\t${temperature}\u00b0C\n` +
    "Don't worry...the heat is on!"
console.log(multiline6)