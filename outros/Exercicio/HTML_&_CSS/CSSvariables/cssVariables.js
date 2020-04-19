//para pegar a propriedade "color"
var root = document.querySelector(':root');
console.log('root')
var rootStyles = getComputedStyle(root);
var red = rootStyles.getPropertyValue('--red')
console.log('red ', red)
//para setar a propriedade
root.style.setProperty('--red', 'green')

//changing  / getting the yellow
var yellow = rootStyles.getPropertyValue('--yellow')
//changing the yellow
// root.style.setProperty('--yellow', 'yellow')
