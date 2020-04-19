import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../App.css";

function Footer() {
	return (
		<div class="card text-center">
			<div class="card-header">Featured</div>
			<div class="card-body">
				<h5 class="card-title">Special title treatment</h5>
				<p class="card-text">
					With supporting text below as a natural lead-in to additional content.
				</p>
				<a href="#" class="btn btn-primary">
					Go somewhere
				</a>
			</div>
			<div class="card-footer text-muted">MSN <i class="fa fa-copyright" aria-hidden="true"></i></div>
		</div>
	);
}

export default Footer;
