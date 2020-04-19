   function carregar(){
   var agora = new Date()
    var momento = window.document.getElementById('momento')
    var hora = agora.getHours()
    var imagem = window.document.getElementById('img')
    if (hora <12){ var b = 'Bom dia!'
         document.body.style.background = '#5ab4fa' 
         imagem.src = 'bomdia.png'
        }
        else if (hora <18) {var b ='Boa Tarde!'
        document.body.style.background = '#e3aa2e'
        imagem.src = 'boatarde.png'
        }
            else{var b = 'Boa noite!'
            document.body.style.background = '#354c54'
            imagem.src = 'boanoite.png'
            }

    var minuto= agora.getMinutes()
    if (minuto <10){ var m = '0' + agora.getMinutes()}
        else{var m = agora.getMinutes()}
 
    switch (agora.getDay()) {

        case 0: var dia = ('Domingo')
        break
        case 1: var dia = ('Segunda-feira')
        break
        case 2: var dia = ('Terça-feira')
        break
        case 3: var dia = ('Quarta-feira')
        break
        case 4: var dia = ('Quinta-feira')
        break
        case 5: var dia = ('Sexta-feira')
        break
        case 6: var dia = ('Sábado')
        break
        default: var dia = ('Dia inválido')
        break}

var horaAtual = window.document.querySelector('div#msg')
horaAtual.innerText = b + ' Hoje é ' + dia + ' e agora são ' + hora + ':' + m + ' horas!'
    }


