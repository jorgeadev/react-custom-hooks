import React from "react";
import "./App.css";
import UseCoin from "./components/UseCoin";
import useDocumentTitle from "./hooks/useDocumentTitle";
// import UseMemoHook from "./hooks/useMemoHook";

function App() {
	useDocumentTitle("Custom Hook Document Title");

	return (
		<div className="App">
			<h1>Customs Hooks</h1>
			{/*<UseMemoHook />*/}
			<UseCoin />
		</div>
	);
}

export default App;
