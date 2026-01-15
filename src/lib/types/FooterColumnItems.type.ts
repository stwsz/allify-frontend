export type FooterColumnItems = {
	title: string;
	items: { text: string; href: string }[] | { image: unknown; href: string; altText: string }[];
};
