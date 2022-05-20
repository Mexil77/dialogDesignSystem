import React from "react";

import "../CSS/Modal.scss";

export default function Modal() {
	return (
		<div className="Modal onScreen">
			<div className="Modal_cross">x</div>
			<div className="Modal_icon">!</div>
			<p>Title</p>
			<p>Mesage</p>
			<div className="Modal_buttons">
				<button className="btn btnActive btnDisplayble">Cerrar Pestaña</button>
				<button className="btn btnActive">Borrar</button>
				<button className="btn">Cancelar</button>
			</div>
		</div>
	);
}
