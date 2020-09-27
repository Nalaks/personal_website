module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				coding: "url('/images/main.jpg')"
			})
		}
	},
	variants: {},
	plugins: []
}
