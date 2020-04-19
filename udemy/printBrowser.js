//Function "print" bellow replaces documento.write that has issues in browsers!
// Os ... faz com que seja possível fazer esta função varias vezes usando multiplos argumentos - não só t
function print(...t) {
  var p = document.createElement("p");
  var texto = document.createTextNode(t);
  p.appendChild(texto);
  document.getElementById("pList").appendChild(p);
}
// print(`  ${ }.`)

// Todos os exercícios e projetos estão em...
// https://github.com/cod3rcursos/web-moderno
