import { MdDangerous } from "react-icons/md";
import { AiFillWarning, AiFillCheckCircle } from "react-icons/ai";

let Modals = [
	{
		icon: <AiFillWarning />,
		type: 1,
		class: "warningIcon",
		title: "Cuidado!",
		message: "No podras volver atras.",
		btnTriger: {
			title: "Alert Button",
			class: "selecter_alert",
		},
		btns: [
			{
				type: 0,
				message: "borrar",
				function: 2,
			},
			{
				type: 1,
				message: "Cancelar",
				function: 1,
			},
		],
	},
	{
		icon: <AiFillCheckCircle />,
		type: 2,
		class: "successIcon",
		title: "Vamos!",
		message: "Todo ha salido bien",
		btnTriger: {
			title: "Success Button",
			class: "selecter_success",
		},
		btns: [
			{
				type: 0,
				message: "Cerrar pestaña",
				function: 1,
			},
		],
	},
	{
		icon: <MdDangerous />,
		type: 3,
		class: "dangerIcon",
		title: "Upss",
		message: "Algo ha pasado",
		btnTriger: {
			title: "Danger Button",
			class: "selecter_danger",
		},
		btns: [],
	},
	{
		icon: <AiFillCheckCircle />,
		type: 4,
		class: "successIcon",
		title: "Borrado!",
		message: "Se ha eliminado con exito",
		btnTriger: {},
		btns: [],
	},
	// New button to practice add newone
	// {
	// 	icon: <AiFillCheckCircle />,
	// 	type: 5,
	// 	class: "warningIcon",
	// 	title: "puta que oferton!",
	// 	message: "Compra yaaaaa!!!!",
	// 	btnTriger: {
	// 		title: "Comprar",
	// 		class: "selecter_fanci",
	// 	},
	// 	btns: [
	// 		{
	// 			type: 0,
	// 			message: "comprar",
	// 			function: 2,
	// 		},
	// 	],
	// },
];

export default Modals;
