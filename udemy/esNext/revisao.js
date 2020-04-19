//let e const
{
    var a = 1
    let b = 2
    console.log(b) // let tem escopo de bloco é visivel somente dentro do bloco
}
console.log(a) // var é visivel fora por não ter escopo de bloco

//Template String
const produto = 'íPad'
console.log(`${produto} é caro!
    Mas é bom!`)

//Destructuring
const [l, e, ...tras] = "Spina"
console.log(l, e, tras)

const [x , , y] = [1, 2, 3]
console.log(x, y)

const {nome, i: idade} = {nome: "Marcelo" , i: 49}
console.log(`nome: ${nome}, idade: ${idade}`)

//Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

//ES8: Object.values / Object.entries
const obj = { a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notação liteal

const name = "Marcelo"
const pessoa = {
    name,
    ola() {
        return "Olá pessoal!"
    }
} 
console.log(`${pessoa.name} diz ${pessoa.ola()}`)

//Class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return "whoff"
    }
}
console.log(new Cachorro().falar())