import React from "react";

class TodoItem extends React.Component {
	render() {
		return (
			<div>
				<div className="d-flex justify-content-betweend align-items-center p-2">
					<input
						className="d-flex justify-content-betweend p-4"
						type="checkbox"
						// checked={this.props.completed}
						onClick={() => (this.props.Ischecked ? this.props.unChecked : this.props.checked)}
					></input>
					<h4 className="m-2">Tarefa: {this.props.task} </h4>
				</div>
				<hr></hr>
			</div>
		);
	}
}

// function TodoItem(props) {
// 	return (
// 		<div>
// 			<div class="d-flex justify-content-betweend align-items-center p-2">
// 				<input
// 					class="d-flex justify-content-betweend "
// 					type="checkbox"
// 					checked={props.Todos.completed}
// 				></input>
// 				<h4 class="m-2">Tarefa: {props.Todos.task} </h4>
// 			</div>
// 			<hr></hr>
// 		</div>
// 	);
// }

export default TodoItem;
