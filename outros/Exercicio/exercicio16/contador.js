   function calcular() {

       if (inptInicio.value.length == 0 || inptFim.value.length == 0 || inptPasso.value.length == 0) {
           window.alert("Por favor digite um número!")
       }
       else {

        var resultado = window.document.getElementById('result')
        var Inicio = window.document.getElementById("inptInicio")
        var i = Number(Inicio.value)
        var Fim = window.document.getElementById("inptFim")
        var f = Number(Fim.value)
        var Passo = window.document.getElementById('inptPasso')
        var p = Number(Passo.value)

           var dialo = window.document.getElementById('dialog')
           dialo.innerHTML = "Contando &#8987 &#8987 &#8987..."
           resultado.innerHTML = "Aqui vai o resultado:"
           //verificando se o passo é igual a zero!
        if(p <=0){
            window.alert('Passo dever ser igual ou superior a 1 - condiderando1')
            p = 1
            }

        if(f>i){
            //contagem crescente!
        for(x=i; x<=f; x+=p){
            resultado.innerHTML += `&#128073 ${x} `
            }
        }else{
            //contagem decrescente!
            for (x = i; x >= f; x -= p) {
                resultado.innerHTML += `&#128073 ${x} `
        }
    }

           resultado.innerHTML += `&#128540`
    //    var mySpan = window.document.getElementById('mySpan')
    //     mySpan.innerHTML = `&#128540`
    }

}

