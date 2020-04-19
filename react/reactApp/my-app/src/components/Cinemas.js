import React from "react";

function Cinemas(props) {
	return (
		<div>
			<h4> Cinema: {props.cine.cinema}</h4>
			<h5> Circuito: {props.cine.circuito}</h5>
			<h5> Cidade: {props.cine.cidade}</h5>
			<h6> Estado: {props.cine.estado}</h6>
			<h6> Cinema: {props.cine.cinema}</h6>
			<hr></hr>

		</div>
	);
}

export default Cinemas;


	// id: "1",
	// 		rentrak: "64657",
	// 		cinema: "Cine Gama 2",
	// 		salas: "2",
	// 		circuito: "AFA",
	// 		cidade: "Colatina",
	// 		estado: "ES",
	// 		regiao: "SAO PAULO",
	// 		endereco: "Rua Capit�o Avelino Bastos, 837, Cruzeiro",