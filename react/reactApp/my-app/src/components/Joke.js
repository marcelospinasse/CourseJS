import React from "react";

function Joke(props) {
	return (
		<div>
			<h4 style={{ display: props.pergunta ? "block" : "none" }}>
				Pergunta:{props.pergunta}
			</h4>
			<h6
				style={{ fontSize: !props.pergunta && 30}}>
				Resposta:{props.resposta}
			</h6>
		</div>
	);
}

export default Joke;
