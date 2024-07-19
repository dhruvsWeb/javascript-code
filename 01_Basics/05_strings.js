const name="hitesh"
const repocount=50

// console.log(name + repocount + "value" );
console.log(`Hello my name is ${name} my repo count is ${repocount}`);

const gameName= new String ('hiteshhc')
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

// const newStringOne="   hitesh   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const newStringOne="  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sunder'))

console.log(gameName.split('-'));
console.log (gameName.split('-').indexOf(3));