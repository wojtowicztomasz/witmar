const firstname = "WITMAR";
const age = 30;

console.log(firstname);
console.log(age);
console.log(
  `Witaj, na stronie internetowej firmy ${firstname}, jesteśmy na rynku już ${age} lat. `
);

function calculate(myNumber){
  console.log(`Dostałam ${myNumber}`);
  return myNumber*7;

}
const myResult = calculate(2);
console.log(myResult);

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target}destroyed`)
  },
  isOperating:true,
  levels:357,
  name:`deathStar`,
  populatoin:10000,
  isLightOn: true,
  commander: {
    name:`Darth Vader`,
    age:44
  }
}




const myProperty ='name'
console.log(deathStar[myProperty])
deathStar['name']

cost showMeProperty = (myProperty)