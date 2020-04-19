function    verificar(){
var data = new Date()
var anoAtual = data.getFullYear()
var anoNasc = window.document.getElementById('ano')
var idade = anoAtual - Number(anoNasc.value)
var result = window.document.getElementById('resultado')
 
if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual ||Number(anoNasc.value) < 1850 )
        {result.innerText ='Idade não suportada!'}
         else {
            
            var fsex = document.getElementsByName('radSex')
            var genero = ""
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if(fsex[0].checked) {
                genero = 'homem'
                    if(idade >0 && idade <=14) {
                result.innerText = `Você é ${genero} e sua idade é de ${idade} anos!`
                img.setAttribute('src' , 'homemcrianca.png')}
                    else if(idade >=15 && idade <=49) {
                         result.innerText = `Você é ${genero} e sua idade é de ${idade} anos!`
                         img.setAttribute('src' , 'homemjovem.png')}
                         else if(idade >=50) {
                            result.innerText = `Você é ${genero} e sua idade é de ${idade} anos!`
                            img.setAttribute('src' , 'homemvelho.png')}
                                }

                else if (fsex[1].checked) {
                genero = 'mulher'
                    if(idade >0 && idade <=14) {
                result.innerText = `Você é ${genero} e sua idade é de ${idade} anos!`
                img.setAttribute('src' , 'mulhercrianca.png')}
                    else if(idade >=15 && idade <=49) {
                         result.innerText = `Você é ${genero} e sua idade é de ${idade} anos!`
                         img.setAttribute('src' , 'mulherjovem.png')}
                         else if(idade >=50) {
                            result.innerText = `Você é ${genero} e sua idade é de ${idade} anos!`
                            img.setAttribute('src' , 'mulhervelha.png')}
                                            }      
                    
                result.appendChild(img)
                img.setAttribute('height' , '300px)')
                img.setAttribute('width' , '300px')
                img.setAttribute('padding' , '10px')
                result.style.textAlign = 'center'
            }  

}