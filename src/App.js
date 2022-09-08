import React from "react";
import "./App.css";
import UseCoin from "./components/UseCoin";
// import UseMemoHook from "./hooks/useMemoHook";

function App() {
	return (
		<div className="App">
			<h1>Customs Hooks</h1>
			{/*<UseMemoHook />*/}
			<UseCoin />
		</div>
	);
}

export default App;
