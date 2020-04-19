import React from "react";
import TodoItem from "./components/TodoItem";
import TodoData from "./components/todoData";



class TodoList extends React.Component {

    render(){

        	const TodoComponents = TodoData.map(todo => <TodoItem Todos={todo} />);
        return(

            <div>{TodoComponents}</div>
        )

    }

}


// function TodoList() {
// 	const TodoComponents = TodoData.map(todo => <TodoItem Todos={todo} />);

// 	return <div>{TodoComponents}</div>;
// }

export default TodoList