// usar spread com objeto
const funcionario = { nome: 'Marcelo' , salario: 100000}
const clone = { ativo: true, ... funcionario}
console.log(clone) //spread "copia" todos atributos de funcionarios para clone

//usar spread com array
const grupoA = ["João" , "Pedro" , "Maria"]
const grupoFinal = ['José' , ...grupoA , 'Carlos']
console.log(grupoFinal)