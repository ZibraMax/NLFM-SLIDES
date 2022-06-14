let config = {
	history: true,
	mathjax3: {
		mathjax: "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js",
		loader: { load: ["[tex]/color"] },
		tex: {
			inlineMath: [
				["$", "$"],
				["\\(", "\\)"],
			],
			displayMath: [
				["$$", "$$"],
				["\\[", "\\]"],
			],
			processEscapes: false,
			packages: { "[+]": ["color"] },
		},
		options: {
			skipHtmlTags: ["script", "noscript", "style", "textarea", "pre"],
		},
	},
	plugins: [RevealMath.MathJax3],
};
Reveal.initialize(config);
