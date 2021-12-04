



let currencyType = prompt('Currency Type: ( cad | usd | euro | pound )');
let currncyAmount = Number(prompt('Amount:'));

let yourName = prompt('Type your Name: ');
let birthYear = Number(prompt('Type Your Birth Year: '));


let areaType = prompt(  ' area type : ( t | s | r ) ');
let areaWidth = Number(prompt(' Width '));
let areaHeight = Number(prompt( 'Height '));

let userAge = Number(prompt('Type Your Age '));



let merja_shourov = new MerjaShourov();

console.log(merja_shourov.currencyConvert( currencyType, currncyAmount));

console.log(merja_shourov.ageCal(yourName, birthYear));

console.log(merja_shourov.calculateArea(areaType, areaWidth, areaHeight));

console.log(merja_shourov.ageName(yourName, userAge));