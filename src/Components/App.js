import "../CSS/App.scss";

import Modal from "./Modal";

function App() {
	return (
		<div className="App">
			<div className="App_selectButtons">
				<h1>Select dialog</h1>
				<button className="AppBtn AppBtn_alert">Alert</button>
				<button className="AppBtn AppBtn_success">Success</button>
				<button className="AppBtn AppBtn_danger">Danger</button>
			</div>
			<Modal />
		</div>
	);
}

export default App;
