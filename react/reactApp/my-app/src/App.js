import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Users from "./components/Users";
import UsersData from "./components/usersData";
import TodoItem from "./components/TodoItem";
import todoData from "./components/todoData";
import ClassEg from "./components/classEg";
import Cinemas from "./components/Cinemas";
import cinemasData from "./components/cinemasData";



class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: todoData,
		};
	}

	render() {
		const todoItem = this.state.todos.map((todo) => (
			<TodoItem key={todo.id} completed={todo.completed} task={todo.task} />
		));
		const UsersComponents = UsersData.map((data) => (
			<Users key={data.id} user={data} />
		));

		const CinemasComponents = cinemasData.map((data) => (
			<Cinemas key={data.id} cine={data} />
		));

		return (
			<div>
				
				<ClassEg />
				{todoItem}
				{UsersComponents}
				{CinemasComponents}
				
			</div>
		);
	}
}

export default App;

// function App() {
// 	const UsersComponents = UsersData.map(data => (
// 		<Users key={data.id} user={data} />
// 	));

// 	const TodoComponents = TodoData.map(todo => (
// 		<TodoItem key={todo.id} Todos={todo} />
// 	));

// 	return (
// 		<div>
// 			{TodoComponents}
// 			{UsersComponents}

// 		</div>
// 	);
// }
