const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require('axios')

const chineses = c => c.pais = "China"
const mulheres = m => m.genero = "F"
menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual;
};

axios.get(url).then(response => {
    const funcionarios = response.data
    //resulução do curso
    const funcChinesas = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

   console.log(funcChinesas)

    //Ou assim (meu código)
    mulheresChinesas = funcionarios
      .filter(value => (value.pais = "China"))
      .filter(value => (value.genero = "F"));

    menorSalario = (func, funcAtual) => {
      return func.salario < funcAtual.salario ? func : funcAtual;
    };

    console.log(mulheresChinesas.reduce(menorSalario));


})

