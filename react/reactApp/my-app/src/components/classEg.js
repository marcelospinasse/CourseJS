import React from "react";

class ClassEg extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "Mateo",
			isloggedIn: true,
			count: 0
		};
		// this.handleClick = this.handleClick.bind(this);
	}

	handleClick = () => {
	
		this.setState(prevState => {
			return{
				count: prevState.count + 1
			}
		})
	}
	render() {
		let IsLogged;
		if (this.state.isloggedIn) {
			IsLogged = "in";
		} else {
			IsLogged = "out";
		}

		return (
			<div>
				<h1>Hello {this.state.name},</h1>
				<h3>
					You are currently logged {this.state.isloggedIn ? "in" : "out"}!
				</h3>
				<h6>Another you are currently logged {IsLogged} using IF!</h6>
				<hr />
				<div className="d-flex">
					<button className="btn btn-primary p-2 m-2" onClick={this.handleClick}>
						Click to count
					</button>
					<h1 className="p-2">{this.state.count}</h1>
				</div>

				<hr />

				<a
					name=""
					id=""
					className="btn btn-primary p-2 m-2"
					href="#"
					role="button"
					onClick={() => alert("Clicked")}
				>
					Click here!
				</a>
				<img
					src="https://picsum.photos/100/100"
					name="IMG"
					onMouseOver={() => alert("Hi You!!!")}
				></img>
				<hr />
				
			</div>
		);
	}
}

export default ClassEg;

// class ClassEg extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			name: "Mateo",
// 			age: 11
// 		};
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>{this.state.name}</h1>
// 				<h3>is a {this.state.age} years old handsome boy!</h3>
// 			</div>
// 		);
// 	}
// }

