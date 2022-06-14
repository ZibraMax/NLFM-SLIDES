const config = {
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
	plugins: [RevealMath.MathJax3, RevealNotes, RevealZoom],
};
Reveal.initialize(config);

const plots_config = { responsive: true, displayModeBar: false };
const plots_layout = {
	margin: { autoexpand: false, b: 20, l: 20, pad: 0, r: 20, t: 0 },
};

const atenu1_div = document.getElementById("atenuacion1");
const atenu2_div = document.getElementById("atenuacion2");
const atenu3_div = document.getElementById("atenuacion3");

const data_atenua_1 = {
	type: "mesh3d",
	x: [0, 0, 0, 1, 1, 1],
	y: [0, 1, 0, 1, 0, 1],
	z: [0, 1, 2, 3, 4, 5],
};

Plotly.newPlot(atenu1_div, [data_atenua_1], plots_layout, plots_config);

Plotly.newPlot(
	atenu2_div,
	[
		{
			x: [1, 2, 3, 4, 5],
			y: [1, 2, 4, 8, 16],
		},
	],
	plots_layout,
	plots_config
);

Plotly.newPlot(
	atenu3_div,
	[
		{
			x: [1, 2, 3, 4, 5],
			y: [1, 2, 4, 8, 16],
		},
	],
	plots_layout,
	plots_config
);
