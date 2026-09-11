import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

// Type-check frontmatter using a schema
// portfolios
const portfolios = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/portfolios",
	}),
	schema: ({ image }) =>
	z.object({
		title: z.string(),
		image: image(),
		type: z.enum(["comisión", "original", "fanart"]),
		order: z.number(),
		draft: z.boolean().optional(),
	}),
});

// testimonials
const testimonials = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/testimonials",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			testimonial: z.string(),
			image: image(),
			order: z.number(),
			// will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// other pages
const otherPages = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/otherPages",
	}),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			draft: z.boolean().optional(),
		}),
});

const comics = defineCollection({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/comics",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			coverImage: image(),
			status: z.enum(["próximamente", "en curso", "completo", "cancelado"]),
			links: z.array(
				z.object({
					label: z.string(),
					url: z.string().url(),
				}),
			),
			order: z.number(),
			draft: z.boolean().optional(),
		}),
});

export const collections = {
	portfolios,
	testimonials,
	otherPages,
	comics,
};
