import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";

function ContactCard(props) {
	return (
		<div>
			<img src={props.contact.imgUrl}></img>
			<h3>{props.contact.name}</h3>
			<p>Phone: {props.contact.phone}</p>
			<p>e-mail: {props.contact.email}</p>
			<h6></h6>
		</div>
	);
}

export default ContactCard;
