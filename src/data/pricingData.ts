export interface pricingItem {
	name: string;
	featured?: boolean;
	price: number;
	features: string[];
	image: ImageMetadata;
}

import image3 from "@assets/images/full.jpg";
import image1 from "@assets/images/bust.jpg";
import image2 from "@assets/images/Aioros.png";

export const pricingData: pricingItem[] = [
	{
		name: "Busto",
		featured: false,
		price: 34,
		features: [
			"A color y con sombras",
			"Fondo sencillo",
			"*Personajes y ropa detallada tienen costo extra.",
		],
		image: image1,
	},
	{
		name: "Medio cuerpo",
		featured: true,
		price: 44,
		features: [
			"A color y con sombras",
			"Fondo sencillo",
			"*Personajes y ropa detallada tienen costo extra.",
		],
		image: image2,
	},
	{
		name: "Cuerpo completo",
		featured: false,
		price: 54,
		features: [
			"A color y con sombras",
			"Fondo sencillo",
			"*Personajes y ropa detallada tienen costo extra.",
		],
		image: image3,
	},
];