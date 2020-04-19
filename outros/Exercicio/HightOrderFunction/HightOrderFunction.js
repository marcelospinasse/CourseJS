var animals = [
	{ name: "Mel", especies: "dog" },
	{ name: "Nina", especies: "cat" },
	{ name: "Rob", especies: "dog" },
	{ name: "Doll", especies: "cat" },
	{ name: "Blu", especies: "bird" },
	{ name: "Mike", especies: "dog" },
	{ name: "Piu", especies: "bird" }
];

// var dog = animals.filter(function(animal){
//   return animal.especies ==="dog"
// })
// console.log(dog)

//--------------------------------------------

var isDog = function(animal) {
	return animal.especies === "dog";
};
// console.log(isDog)

var dogs = animals.filter(isDog);
console.log(dogs);

//prototype to reject
Array.prototype.reject = function(fn) {
	return this.filter(x => !fn(x));
};

var notDog = animals.reject(isDog);
console.log(notDog);

//--------------------------------------

var names = animals.map(myfunction);
function myfunction(name) {
	return name.name;
}
console.log(names);

//ou
var animalNames = animals.map(function(animal) {
	return animal.name + "ia a " + animal.especies;
});
console.log(animalNames);

//map arrow function
var nomes = animals.map(name => name.name);
console.log(nomes);

var especies = animals.map(especies => especies.especies);
console.log(especies);

//reduce

var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce((total, valor) => total + valor);
console.log("A soma é igual a " + sum);

var letras = ["M", "A", "R", "C", "E", "L", "O"];
var sum = letras.reduce((letra, nome) => letra + nome);
console.log("O nome é " + sum);

var numero = [
	{ amount: 100 },
	{ amount: 200 },
	{ amount: 100 },
	{ amount: 150 },
	{ amount: 100 },
	{ amount: 150 }
];

var soma = numero.reduce(function(total, valor) {
	console.log("Amount", total, valor);
	return total + valor.amount;
}, 0);
console.log("Soma: " + soma);

var soma2 = numero.reduce((total, valor) => total + valor.amount, 0);
console.log("O total de soma 2 é " + soma2);

var soma3 = numero.map(a => a.amount).reduce((total, valor) => total + valor);
console.log("E soma 3: " + soma3);

//Currying
let dragon = name => size => element =>
	name + " is a " + size + " dragon that breathes " + element + "!";

let output = dragon("Karo")("large")("ice");

console.log(output);

// Recursion
let countDown = num => {
	if (num === 0) return;
	console.log(num);
	countDown(num - 1);
};

countDown(10);
