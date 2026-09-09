export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Inicio",
		link: "/",
	},
	{
		text: "Ilustraciones",
		link: "/#ilustraciones/",
	},
	{
		text: "Comisiones",
		link: "/#comisiones",
	},
	{
		text: "Comics",
		dropdown: [
			{
				text: "Anemoia",
				link: "/comics/anemoia",
			},
			{
				text: "El secreto entre nosotros",
				link: "/comics/el-secreto-entre-nosotros",
			},
			{
				text: "Máscara de Coyote",
				link: "/comics/mascara-de-coyote",
			},
			{
				text: "Tinkunakama",
				link: "/comics/tinkunakama",
			},
		],
	},
	{
		text: "Blog",
		link: "/blog",
	},
	{
		text: "About",
		link: "/#about",
	},
];

export default navConfig;
