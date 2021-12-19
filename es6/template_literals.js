// 9. Template Literals
// Back- Ticks Syntax - Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

//     I. Quotes Inside Strings - With template literals, you can use both single and double quotes inside a string:
//     II. Multiline string - Template literals allows multiline strings:
//     III. Interpolation - Template literals provide an easy way to interpolate variables and expressions into strings.  Syntax ${...}
//     IV. Variable substitutions - Template literals allow variables in strings:
//     V. Experession substitution - Template literals allow expressions in strings:
//     VI. Html templates 

// Quotes Inside Strings
let text = `Hi's often called "Prashant"`
console.warn("Quotes Inside Strings", text);


// multiline String
let text1 = `Hi I am prashant Katiyar.\n\Belongs to kanpur uttar pradesh`;
console.warn("multiline String",text1);

// Interpolation 
// ${...}


// Variable substitutions

let localhost = "http://localhost";
let port = "4200";
let url = `${localhost}:${port}`
console.warn(url);

// Expression Substitution
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`
console.log(total);

// HTML Templates
let header = "Templates Literals";

let html = `<h2>${header}</h2>`;
