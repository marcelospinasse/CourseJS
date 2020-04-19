function real(partes, ...valores) {
  const resultado = [];
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
    resultado.push(partes[indice], valor);
  });
  return resultado.join("");
}

const preco = 29.9;
const parcela = 11;
console.log(`1x de ${preco} ou 3x de ${parcela}.`);
//aplicando a template string
console.log(real`1 x de ${preco} ou 3 x de ${parcela}.`);
