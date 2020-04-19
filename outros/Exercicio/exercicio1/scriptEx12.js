function    carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >=0 && hora <12){ 
         img.src = 'bomdia.jpg'
         msg.innerHTML = `Bom dia!  Agora são ${hora} horas!`
        }
        else if (hora >=12 && hora  < 18) {
        img.src = 'boatarde.jpg'
        msg.innerHTML = `Boa tarde!  Agora são ${hora} horas!`
        }
            else{
            img.src ='boanoite.jpg'
            msg.innerHTML = `Boa noite!  Agora são ${hora} horas!`
            }



}