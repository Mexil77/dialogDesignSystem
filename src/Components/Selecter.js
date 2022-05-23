import React, { useState } from "react";

// CSS
import "../CSS/Selecter.scss";

// Components
import Modal from "./Modal";

// Data
import Modals from "../Objs/Modals.js";

export default function Selecter() {
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
				selectAndDisplayModal(3);
				break;
			default:
				break;
		}
	}

	function hideModal() {
		setModalDisplaied(0);
	}

	return (
		<>
			<div className="selecter">
				<h1>Select dialog</h1>
				{Modals.map((modal, index) => {
					if (Object.keys(modal.btnTriger).length > 0) {
						return (
							<button
								key={modal.btnTriger.title}
								onClick={() => selectAndDisplayModal(index)}
								className={`selecterBtn ${modal.btnTriger.class}`}
							>
								{modal.btnTriger.title}
							</button>
						);
					}
					return "";
				})}
			</div>
			<Modal
				mod={Modals[modalSelected]}
				onScreen={modalDisplaied}
				hideModal={hideModal}
				selectFunction={selectFunction}
			/>
		</>
	);
}
