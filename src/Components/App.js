// Hooks
import React, { useState } from "react";

// Styles
import "../CSS/App.scss";

// Components
import Modal from "./Modal";

// Data
import Modals from "../Objs/Modals.js";

function App() {
	const [modalSelected, setModalSelected] = useState(0);
	const [modalDisplaied, setModalDisplaied] = useState(0);

	function selectAndDisplayModal(selection) {
		setModalSelected(selection);
		if (modalDisplaied === 0) setModalDisplaied(1);
	}

	function selectFunction(choice) {
		switch (choice) {
			case 1:
				hideModal();
				break;
			case 2:
				changeModal(4);
				break;
			default:
				break;
		}
	}

	function hideModal() {
		setModalDisplaied(0);
	}

	function changeModal(newModal) {
		console.log(`newModal: ${newModal}`);
		setModalSelected(newModal);
	}

	return (
		<div className="App">
			<div className="App_selectButtons">
				<h1>Select dialog</h1>
				<button
					onClick={() => selectAndDisplayModal(0)}
					className="AppBtn AppBtn_alert"
				>
					Alert
				</button>
				<button
					onClick={() => selectAndDisplayModal(1)}
					className="AppBtn AppBtn_success"
				>
					Success
				</button>
				<button
					onClick={() => selectAndDisplayModal(2)}
					className="AppBtn AppBtn_danger"
				>
					Danger
				</button>
			</div>
			<Modal
				mod={Modals[modalSelected]}
				onScreen={modalDisplaied}
				hideModal={hideModal}
				selectFunction={selectFunction}
			/>
		</div>
	);
}

export default App;
