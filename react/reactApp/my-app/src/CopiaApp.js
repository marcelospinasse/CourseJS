import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";
import ContactCard from "./components/ContactCard";

function App() {
	return (
		<div>
			<Header />
			<MainContent />
			<TodoList />
			<ContactCard />
			<Footer />
		</div>
	);
}

export default App;
