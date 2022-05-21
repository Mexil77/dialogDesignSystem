import React from "react";

// Styles
import "../CSS/Modal.scss";

export default function Modal(props) {
	return (
		<div
			className={`BackgroundModal ${props.onScreen !== 0 ? "onScreen" : ""}`}
		>
			<div className={`Modal`}>
				<div className="Modal_cross" onClick={props.hideModal}>
					x
				</div>
				<div className={`Modal_icon ${props.mod.class}`}>{props.mod.icon}</div>
				<p>{props.mod.title}</p>
				<p>{props.mod.message}</p>
				<div className="Modal_buttons">
					{props.mod.btns.map((btn) => (
						<button
							className={`btn ${!btn.type ? "btnActive" : ""}`}
							onClick={() => props.selectFunction(btn.function)}
						>
							{btn.message}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
