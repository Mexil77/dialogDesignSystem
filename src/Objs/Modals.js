let Modals = [
	{
		icon: "!",
		type: 1,
		class: "warningIcon",
		title: "Cuidado!",
		message: "No podras volver atras.",
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
		icon: "+",
		type: 2,
		class: "successIcon",
		title: "Vamos!",
		message: "Todo ha salido bien",
		btns: [
			{
				type: 0,
				message: "Cerrar pestaña",
				function: 1,
			},
		],
	},
	{
		icon: "x",
		type: 3,
		class: "dangerIcon",
		title: "Upss",
		message: "Algo ha pasado",
		btns: [],
	},
	{
		icon: "~",
		type: 4,
		class: "successIcon",
		title: "Borrado!",
		message: "Se ha eliminado con exito",
		btns: [],
	},
];

export default Modals;
