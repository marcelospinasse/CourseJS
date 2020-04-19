import React from "react";

function Users(props) {
	return (
		<div>
			<h4> Nome: {props.user.name}</h4>
			<h6> Usuário: {props.user.username}</h6>
			<h6> Email: {props.user.email}</h6>
			<h6>
				{" "}
				Endereço: {props.user.address.street}, {props.user.address.suite}
			</h6>
			<h6>
				{" "}
				Cidade: {props.user.address.city} - {props.user.address.zipcode}
			</h6>
			<h6> Telefone: {props.user.phone}</h6>
			<h6> Empresa: {props.user.company.name}</h6>

			{/* <h6> Usuário: {props.username}</h6>
			<h6> Email: {props.email}</h6>
			<h6>
				{" "}
				Endereço: {props.address.street}, {props.address.suite}
			</h6>
			<h6>
				{" "}
				Cidade: {props.address.city} - {props.address.zipcode}
			</h6>
			<h6> Telefone: {props.phone}</h6>
			<h6> Empresa: {props.company.name}</h6> */}
			<hr></hr>
		</div>
	);
}

export default Users;
