import React from "react";

function Todos() {
	return (
		<div>
			<div style={todosStyle}>
				<h1>Things starting here!!!</h1>
			</div>
		</div>
	);
}

const todosStyle = {
    backgroundColor: "#f4f4f4", 
    height: 80,
    marginTop: 40,
    textAlign: "center"
};

export default Todos;
