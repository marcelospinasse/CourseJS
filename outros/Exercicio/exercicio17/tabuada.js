

function calcular() {



    var num = window.document.getElementById('txtnumero')
    var resultado = window.document.getElementById('result')
    

    if (num.value.length == 0){
        window.alert("Por favor digite um número!")}
    else {
        
        var number = Number(num.value)
  
        resultado.innerHTML = "" 
        

    for (x=1; x<=10; x++) {
        tabuada = x * number
        var item = document.createElement('option')
        item.text = `${x} x ${number} =` + tabuada
        item.value = `tab${x}`
        resultado.appendChild(item)
    }
    
}
    num.innerHTML = ''
}
function entrar(){
    var num = window.document.getElementById('txtnumero')
    if (num.value.length != "")
        calcular()
        }