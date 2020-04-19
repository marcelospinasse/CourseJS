let numeros = [] 
var numTxt = window.document.getElementById("inptNumber")
var dados = window.document.getElementById('optionInpt')
var btn = window.document.getElementById('btnFinalizar')

function adicionar(){
    //inserindo numeros no array
    numeros.push(Number(numTxt.value))

    //mostrando a caixa do select
    dados.style.visibility = "visible"
    btn.style.visibility = "visible"

    //Criando novo elemento option.
    var item = document.createElement('option')
    //inserindo texto no novo elemento option criado
    item.text = `Valor [${Number(numTxt.value)}] adicionado!`
    dados.appendChild(item)

    //limpa o valor e dá foco em imput
    numTxt.value = ""
    numTxt.focus()

}

function verificar(){
    let indice = numeros.indexOf(Number(numTxt.value))
    
    if (Number(numTxt.value) > 0 && Number(numTxt.value) <= 100){
    if (numeros.length >= 1) {
        //   alert("Maior que 1")
        if(indice == -1) {
            // alert("Numero não existe")
            adicionar()   
        }
            else
            {alert("Número já existe, escolha outro valor!")
            }
    }
    else{
        // alert("Menor que 1")
        // alert("Numero não existe")
        adicionar()
        }

    }else{alert("Escolha um valor maior que 0 e menor ou igual a 100!")}
}

function finalizar() {

    //Total dos itens do array
    var listNum = window.document.getElementById('listArray')
    listNum.innerText = `A quantidade total de números do array é ${numeros.length}!`

    //Maior valor do array
    var maiorNum = window.document.getElementById('MaiorArray')
    var max = Math.max.apply(null, numeros)
    maiorNum.innerText = `O maior valor do array é ${max}!`

    //Menor valor do array
    var menorNum = window.document.getElementById('MenorArray')
    var min = Math.min.apply(null, numeros)
    menorNum.innerText = `O menor valor do array é ${min}!`

    //Somando itens do array
    var total = 0
    for (x = 0; x < numeros.length; x++) {
        total += numeros[x]  
        } 
    var somaNum = window.document.getElementById('SomaArray')
    somaNum.innerText = `A Soma dos números do array é ${total}!`

    //Média do array
    var media = total / numeros.length
    var mediaNum = window.document.getElementById('MediaArray')
    mediaNum.innerText = `A média dos números é ${media}!`

}

