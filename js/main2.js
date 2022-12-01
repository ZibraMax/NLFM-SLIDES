const elems = document.body.getElementsByTagName("figcaption");
for (let i = 0; i < elems.length; i++) {
	const element = elems[i];
	element.innerHTML = `<strong>Fig ${i + 1}. </strong>` + element.innerHTML;
}
let notes = false;
const config = {
	history: true,
	katex: {
		version: "latest",
		delimiters: [
			{ left: "$$", right: "$$", display: true },
			{ left: "$", right: "$", display: false },
			{ left: "\\(", right: "\\)", display: false },
			{ left: "\\[", right: "\\]", display: true },
		],
		ignoredTags: ["script", "noscript", "style", "textarea", "pre"],
	},
	// showNotes: true,
	slideNumber: null,
	transition: "fade",
	preloadIframes: true,
	showNotes: notes,
	viewDistance: 1,
	touch: false,
	navigationMode: "linear",
	plugins: [RevealMath.KaTeX, RevealNotes, RevealZoom],
};
Reveal.initialize(config);
// Reveal.configure({ pdfMaxPagesPerSlide: 1, showNotes: true });

const plots_config = { responsive: true, displayModeBar: false };
const plots_layout = {
	margin: { autoexpand: false, b: 0, l: 0, pad: 0, r: 0, t: 0 },
};

const atenu1_div = [...document.querySelectorAll("[id=atenuacion1]")];

const resultados_1 = [...document.querySelectorAll("[id=grafica_res_1]")];
const resultados_2 = [...document.querySelectorAll("[id=grafica_res_2]")];
const resultados_3 = [
	...document.querySelectorAll("[id=resultados-frecuencias-cambiando-l]"),
];

const resultados_5 = [
	...document.querySelectorAll("[id=resultados-frecuencias-cubos]"),
];

const cmap = [
	["0.0", "#f3f3f3)"],
	["1.0", "#dc2c41"],
];

const data_atenua_1 = {
	type: "mesh3d",
	colorscale: cmap,
	x: [
		-5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5,
		1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5,
		-3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0,
		3.5, 4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5,
		-1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0,
		-4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0,
		1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5, -3.0,
		-2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5,
		4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0,
		-0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0, -4.5,
		-4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0,
		2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0,
		-1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0,
		-5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5,
		1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5,
		-3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0,
		3.5, 4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5,
		-1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0,
		-4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0,
		1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5, -3.0,
		-2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5,
		4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0,
		-0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0, -4.5,
		-4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0,
		2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0,
		-1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0,
		-5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5,
		1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5,
		-3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0,
		3.5, 4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5,
		-1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0,
		-4.5, -4.0, -3.5, -3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0,
		1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, -5.0, -4.5, -4.0, -3.5, -3.0,
		-2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5,
		4.0, 4.5, 5.0,
	],
	y: [
		-5.0, -5.0, -5.0, -5.0, -5.0, -5.0, -5.0, -5.0, -5.0, -5.0, -5.0, -5.0,
		-5.0, -5.0, -5.0, -5.0, -5.0, -5.0, -5.0, -5.0, -5.0, -4.5, -4.5, -4.5,
		-4.5, -4.5, -4.5, -4.5, -4.5, -4.5, -4.5, -4.5, -4.5, -4.5, -4.5, -4.5,
		-4.5, -4.5, -4.5, -4.5, -4.5, -4.5, -4.0, -4.0, -4.0, -4.0, -4.0, -4.0,
		-4.0, -4.0, -4.0, -4.0, -4.0, -4.0, -4.0, -4.0, -4.0, -4.0, -4.0, -4.0,
		-4.0, -4.0, -4.0, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5,
		-3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5, -3.5,
		-3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0,
		-3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -3.0, -2.5, -2.5, -2.5,
		-2.5, -2.5, -2.5, -2.5, -2.5, -2.5, -2.5, -2.5, -2.5, -2.5, -2.5, -2.5,
		-2.5, -2.5, -2.5, -2.5, -2.5, -2.5, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0,
		-2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0,
		-2.0, -2.0, -2.0, -1.5, -1.5, -1.5, -1.5, -1.5, -1.5, -1.5, -1.5, -1.5,
		-1.5, -1.5, -1.5, -1.5, -1.5, -1.5, -1.5, -1.5, -1.5, -1.5, -1.5, -1.5,
		-1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0,
		-1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -1.0, -0.5, -0.5, -0.5,
		-0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5, -0.5,
		-0.5, -0.5, -0.5, -0.5, -0.5, -0.5, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
		0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
		0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5,
		0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
		1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0,
		1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5,
		1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0,
		2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0, 2.0,
		2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5,
		2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0,
		3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0, 3.0,
		3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5,
		3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0,
		4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0,
		4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5,
		4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 4.5, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0,
		5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0, 5.0,
	],
	z: [
		0.00085, 0.0012, 0.00166, 0.00224, 0.00294, 0.00373, 0.00458, 0.00541,
		0.0061, 0.00657, 0.00674, 0.00657, 0.0061, 0.00541, 0.00458, 0.00373,
		0.00294, 0.00224, 0.00166, 0.0012, 0.00085, 0.0012, 0.00172, 0.00243,
		0.00334, 0.00448, 0.00581, 0.00727, 0.00871, 0.00995, 0.01081, 0.01111,
		0.01081, 0.00995, 0.00871, 0.00727, 0.00581, 0.00448, 0.00334, 0.00243,
		0.00172, 0.0012, 0.00166, 0.00243, 0.00349, 0.00492, 0.00674, 0.00894,
		0.01142, 0.01395, 0.01619, 0.01775, 0.01832, 0.01775, 0.01619, 0.01395,
		0.01142, 0.00894, 0.00674, 0.00492, 0.00349, 0.00243, 0.00166, 0.00224,
		0.00334, 0.00492, 0.00709, 0.00995, 0.01355, 0.01775, 0.0222, 0.02625,
		0.02914, 0.0302, 0.02914, 0.02625, 0.0222, 0.01775, 0.01355, 0.00995,
		0.00709, 0.00492, 0.00334, 0.00224, 0.00294, 0.00448, 0.00674, 0.00995,
		0.01437, 0.02014, 0.02717, 0.03494, 0.04233, 0.04777, 0.04979, 0.04777,
		0.04233, 0.03494, 0.02717, 0.02014, 0.01437, 0.00995, 0.00674, 0.00448,
		0.00294, 0.00373, 0.00581, 0.00894, 0.01355, 0.02014, 0.02914, 0.0407,
		0.05418, 0.06771, 0.07812, 0.08208, 0.07812, 0.06771, 0.05418, 0.0407,
		0.02914, 0.02014, 0.01355, 0.00894, 0.00581, 0.00373, 0.00458, 0.00727,
		0.01142, 0.01775, 0.02717, 0.0407, 0.05911, 0.08208, 0.10688, 0.12726,
		0.13534, 0.12726, 0.10688, 0.08208, 0.05911, 0.0407, 0.02717, 0.01775,
		0.01142, 0.00727, 0.00458, 0.00541, 0.00871, 0.01395, 0.0222, 0.03494,
		0.05418, 0.08208, 0.11987, 0.16484, 0.20574, 0.22313, 0.20574, 0.16484,
		0.11987, 0.08208, 0.05418, 0.03494, 0.0222, 0.01395, 0.00871, 0.00541,
		0.0061, 0.00995, 0.01619, 0.02625, 0.04233, 0.06771, 0.10688, 0.16484,
		0.24312, 0.32692, 0.36788, 0.32692, 0.24312, 0.16484, 0.10688, 0.06771,
		0.04233, 0.02625, 0.01619, 0.00995, 0.0061, 0.00657, 0.01081, 0.01775,
		0.02914, 0.04777, 0.07812, 0.12726, 0.20574, 0.32692, 0.49307, 0.60653,
		0.49307, 0.32692, 0.20574, 0.12726, 0.07812, 0.04777, 0.02914, 0.01775,
		0.01081, 0.00657, 0.00674, 0.01111, 0.01832, 0.0302, 0.04979, 0.08208,
		0.13534, 0.22313, 0.36788, 0.60653, 1.0, 0.60653, 0.36788, 0.22313,
		0.13534, 0.08208, 0.04979, 0.0302, 0.01832, 0.01111, 0.00674, 0.00657,
		0.01081, 0.01775, 0.02914, 0.04777, 0.07812, 0.12726, 0.20574, 0.32692,
		0.49307, 0.60653, 0.49307, 0.32692, 0.20574, 0.12726, 0.07812, 0.04777,
		0.02914, 0.01775, 0.01081, 0.00657, 0.0061, 0.00995, 0.01619, 0.02625,
		0.04233, 0.06771, 0.10688, 0.16484, 0.24312, 0.32692, 0.36788, 0.32692,
		0.24312, 0.16484, 0.10688, 0.06771, 0.04233, 0.02625, 0.01619, 0.00995,
		0.0061, 0.00541, 0.00871, 0.01395, 0.0222, 0.03494, 0.05418, 0.08208,
		0.11987, 0.16484, 0.20574, 0.22313, 0.20574, 0.16484, 0.11987, 0.08208,
		0.05418, 0.03494, 0.0222, 0.01395, 0.00871, 0.00541, 0.00458, 0.00727,
		0.01142, 0.01775, 0.02717, 0.0407, 0.05911, 0.08208, 0.10688, 0.12726,
		0.13534, 0.12726, 0.10688, 0.08208, 0.05911, 0.0407, 0.02717, 0.01775,
		0.01142, 0.00727, 0.00458, 0.00373, 0.00581, 0.00894, 0.01355, 0.02014,
		0.02914, 0.0407, 0.05418, 0.06771, 0.07812, 0.08208, 0.07812, 0.06771,
		0.05418, 0.0407, 0.02914, 0.02014, 0.01355, 0.00894, 0.00581, 0.00373,
		0.00294, 0.00448, 0.00674, 0.00995, 0.01437, 0.02014, 0.02717, 0.03494,
		0.04233, 0.04777, 0.04979, 0.04777, 0.04233, 0.03494, 0.02717, 0.02014,
		0.01437, 0.00995, 0.00674, 0.00448, 0.00294, 0.00224, 0.00334, 0.00492,
		0.00709, 0.00995, 0.01355, 0.01775, 0.0222, 0.02625, 0.02914, 0.0302,
		0.02914, 0.02625, 0.0222, 0.01775, 0.01355, 0.00995, 0.00709, 0.00492,
		0.00334, 0.00224, 0.00166, 0.00243, 0.00349, 0.00492, 0.00674, 0.00894,
		0.01142, 0.01395, 0.01619, 0.01775, 0.01832, 0.01775, 0.01619, 0.01395,
		0.01142, 0.00894, 0.00674, 0.00492, 0.00349, 0.00243, 0.00166, 0.0012,
		0.00172, 0.00243, 0.00334, 0.00448, 0.00581, 0.00727, 0.00871, 0.00995,
		0.01081, 0.01111, 0.01081, 0.00995, 0.00871, 0.00727, 0.00581, 0.00448,
		0.00334, 0.00243, 0.00172, 0.0012, 0.00085, 0.0012, 0.00166, 0.00224,
		0.00294, 0.00373, 0.00458, 0.00541, 0.0061, 0.00657, 0.00674, 0.00657,
		0.0061, 0.00541, 0.00458, 0.00373, 0.00294, 0.00224, 0.00166, 0.0012,
		0.00085,
	],
	intensity: [
		0.00085, 0.0012, 0.00166, 0.00224, 0.00294, 0.00373, 0.00458, 0.00541,
		0.0061, 0.00657, 0.00674, 0.00657, 0.0061, 0.00541, 0.00458, 0.00373,
		0.00294, 0.00224, 0.00166, 0.0012, 0.00085, 0.0012, 0.00172, 0.00243,
		0.00334, 0.00448, 0.00581, 0.00727, 0.00871, 0.00995, 0.01081, 0.01111,
		0.01081, 0.00995, 0.00871, 0.00727, 0.00581, 0.00448, 0.00334, 0.00243,
		0.00172, 0.0012, 0.00166, 0.00243, 0.00349, 0.00492, 0.00674, 0.00894,
		0.01142, 0.01395, 0.01619, 0.01775, 0.01832, 0.01775, 0.01619, 0.01395,
		0.01142, 0.00894, 0.00674, 0.00492, 0.00349, 0.00243, 0.00166, 0.00224,
		0.00334, 0.00492, 0.00709, 0.00995, 0.01355, 0.01775, 0.0222, 0.02625,
		0.02914, 0.0302, 0.02914, 0.02625, 0.0222, 0.01775, 0.01355, 0.00995,
		0.00709, 0.00492, 0.00334, 0.00224, 0.00294, 0.00448, 0.00674, 0.00995,
		0.01437, 0.02014, 0.02717, 0.03494, 0.04233, 0.04777, 0.04979, 0.04777,
		0.04233, 0.03494, 0.02717, 0.02014, 0.01437, 0.00995, 0.00674, 0.00448,
		0.00294, 0.00373, 0.00581, 0.00894, 0.01355, 0.02014, 0.02914, 0.0407,
		0.05418, 0.06771, 0.07812, 0.08208, 0.07812, 0.06771, 0.05418, 0.0407,
		0.02914, 0.02014, 0.01355, 0.00894, 0.00581, 0.00373, 0.00458, 0.00727,
		0.01142, 0.01775, 0.02717, 0.0407, 0.05911, 0.08208, 0.10688, 0.12726,
		0.13534, 0.12726, 0.10688, 0.08208, 0.05911, 0.0407, 0.02717, 0.01775,
		0.01142, 0.00727, 0.00458, 0.00541, 0.00871, 0.01395, 0.0222, 0.03494,
		0.05418, 0.08208, 0.11987, 0.16484, 0.20574, 0.22313, 0.20574, 0.16484,
		0.11987, 0.08208, 0.05418, 0.03494, 0.0222, 0.01395, 0.00871, 0.00541,
		0.0061, 0.00995, 0.01619, 0.02625, 0.04233, 0.06771, 0.10688, 0.16484,
		0.24312, 0.32692, 0.36788, 0.32692, 0.24312, 0.16484, 0.10688, 0.06771,
		0.04233, 0.02625, 0.01619, 0.00995, 0.0061, 0.00657, 0.01081, 0.01775,
		0.02914, 0.04777, 0.07812, 0.12726, 0.20574, 0.32692, 0.49307, 0.60653,
		0.49307, 0.32692, 0.20574, 0.12726, 0.07812, 0.04777, 0.02914, 0.01775,
		0.01081, 0.00657, 0.00674, 0.01111, 0.01832, 0.0302, 0.04979, 0.08208,
		0.13534, 0.22313, 0.36788, 0.60653, 1.0, 0.60653, 0.36788, 0.22313,
		0.13534, 0.08208, 0.04979, 0.0302, 0.01832, 0.01111, 0.00674, 0.00657,
		0.01081, 0.01775, 0.02914, 0.04777, 0.07812, 0.12726, 0.20574, 0.32692,
		0.49307, 0.60653, 0.49307, 0.32692, 0.20574, 0.12726, 0.07812, 0.04777,
		0.02914, 0.01775, 0.01081, 0.00657, 0.0061, 0.00995, 0.01619, 0.02625,
		0.04233, 0.06771, 0.10688, 0.16484, 0.24312, 0.32692, 0.36788, 0.32692,
		0.24312, 0.16484, 0.10688, 0.06771, 0.04233, 0.02625, 0.01619, 0.00995,
		0.0061, 0.00541, 0.00871, 0.01395, 0.0222, 0.03494, 0.05418, 0.08208,
		0.11987, 0.16484, 0.20574, 0.22313, 0.20574, 0.16484, 0.11987, 0.08208,
		0.05418, 0.03494, 0.0222, 0.01395, 0.00871, 0.00541, 0.00458, 0.00727,
		0.01142, 0.01775, 0.02717, 0.0407, 0.05911, 0.08208, 0.10688, 0.12726,
		0.13534, 0.12726, 0.10688, 0.08208, 0.05911, 0.0407, 0.02717, 0.01775,
		0.01142, 0.00727, 0.00458, 0.00373, 0.00581, 0.00894, 0.01355, 0.02014,
		0.02914, 0.0407, 0.05418, 0.06771, 0.07812, 0.08208, 0.07812, 0.06771,
		0.05418, 0.0407, 0.02914, 0.02014, 0.01355, 0.00894, 0.00581, 0.00373,
		0.00294, 0.00448, 0.00674, 0.00995, 0.01437, 0.02014, 0.02717, 0.03494,
		0.04233, 0.04777, 0.04979, 0.04777, 0.04233, 0.03494, 0.02717, 0.02014,
		0.01437, 0.00995, 0.00674, 0.00448, 0.00294, 0.00224, 0.00334, 0.00492,
		0.00709, 0.00995, 0.01355, 0.01775, 0.0222, 0.02625, 0.02914, 0.0302,
		0.02914, 0.02625, 0.0222, 0.01775, 0.01355, 0.00995, 0.00709, 0.00492,
		0.00334, 0.00224, 0.00166, 0.00243, 0.00349, 0.00492, 0.00674, 0.00894,
		0.01142, 0.01395, 0.01619, 0.01775, 0.01832, 0.01775, 0.01619, 0.01395,
		0.01142, 0.00894, 0.00674, 0.00492, 0.00349, 0.00243, 0.00166, 0.0012,
		0.00172, 0.00243, 0.00334, 0.00448, 0.00581, 0.00727, 0.00871, 0.00995,
		0.01081, 0.01111, 0.01081, 0.00995, 0.00871, 0.00727, 0.00581, 0.00448,
		0.00334, 0.00243, 0.00172, 0.0012, 0.00085, 0.0012, 0.00166, 0.00224,
		0.00294, 0.00373, 0.00458, 0.00541, 0.0061, 0.00657, 0.00674, 0.00657,
		0.0061, 0.00541, 0.00458, 0.00373, 0.00294, 0.00224, 0.00166, 0.0012,
		0.00085,
	],
};

const data_resultados_1 = [
	{
		type: "lines",
		x: [
			0.008059958, 0.016119915, 0.03223983, 0.062277527, 0.078879991,
			0.107473265, 0.168512597,
		],
		y: [
			1.708610266, 1.687043936, 1.639099303, 1.55190175, 1.505339596,
			1.439068439, 1.352192685,
		],
		name: "Si",
		line: { shape: "spline", color: "#dc2c41" },
	},
	{
		type: "lines",
		x: [
			0.008059958, 0.016119915, 0.03223983, 0.062277527, 0.078879991,
			0.107473265, 0.168512597,
		],
		y: [
			1.708224011, 1.67788427, 1.640829469, 1.551334046, 1.504764992,
			1.438544474, 1.351713789,
		],
		name: "C",
		line: { shape: "spline", color: "black" },
	},
	{
		type: "lines",
		x: [
			0.008059958, 0.016119915, 0.03223983, 0.078879991, 0.107473265,
			0.168512597,
		],
		y: [
			1.708571976, 1.678256832, 1.641270946, 1.505255822, 1.441538145,
			1.358465777,
		],
		name: "Ge",
		line: { shape: "spline", color: "#8c8c8c" },
	},
	{
		mode: "lines",
		x: [0.008059958, 0.168512597],
		y: [1.775616523, 1.775616523],
		name: "Local",
		line: { shape: "spline", color: "gray", dash: "dash" },
	},
];

const data_resultados_2 = [
	{
		type: "lines",
		x: [
			0.008059958, 0.016119915, 0.03223983, 0.062277527, 0.078879991,
			0.107473265, 0.168512597, 0.253378104,
		],
		y: [
			1.708224011, 1.67788427, 1.640829469, 1.551334046, 1.504764992,
			1.438544474, 1.351713789, 1.308241897,
		],
		name: "No local",
		line: { shape: "spline", color: "#dc2c41" },
	},
	{
		mode: "lines",
		x: [
			0.008059958, 0.016119915, 0.03223983, 0.062277527, 0.078879991,
			0.107473265, 0.168512597, 0.253378104,
		],
		y: [
			1.775616523, 1.775616523, 1.775616523, 1.775616523, 1.775616523,
			1.775616523, 1.775616523, 1.775616523,
		],
		name: "Local",
		line: { shape: "spline", color: "black", dash: "dash" },
	},
	{
		type: "lines",
		x: [0.09397463, 0.118498943, 0.161627907, 0.253382664],
		y: [1.464757709, 1.416299559, 1.323788546, 1.015418502],
		name: "Ramirez (2006)",
		line: { shape: "spline", color: "#8c8c8c" },
	},
	{
		mode: "lines",
		x: [
			0.00001, 0.0001, 0.0005, 0.00075, 0.001, 0.01, 0.02, 0.03, 0.07,
			0.09, 0.15, 0.2,
		],
		y: [
			1.728727324, 1.728471896, 1.727336661, 1.726627138, 1.725917616,
			1.700374815, 1.671993925, 1.643613035, 1.530089474, 1.473327694,
			1.303042353, 1.161137902,
		],

		name: "Ajuste lineal",
		line: { shape: "spline", color: "#8c8c8c", dash: "dash" },
	},
];

const data_resultados_3 = [
	{
		type: "lines",
		x: [0.062277527, 0.078879991, 0.107473265, 0.168512597],
		y: [1.55190175, 1.505339596, 1.439068439, 1.352192685],
		name: "ℓ=2 Å",
		line: { shape: "spline", color: "#dc2c41" },
	},
	{
		type: "lines",
		x: [0.062277527, 0.078879991, 0.107473265, 0.168512597],
		y: [1.471950435, 1.421030072, 1.362028994, 1.305055885],
		name: "ℓ=3 Å ",
		line: { shape: "spline", color: "#8c8c8c" },
	},
	{
		type: "lines",
		x: [0.062277527, 0.078879991, 0.107473265, 0.168512597],
		y: [1.410222365, 1.365674254, 1.32144849, 1.285840477],
		name: "ℓ=4 Å",
		line: { shape: "spline", color: "black" },
	},
	{
		type: "lines",
		x: [0.062277527, 0.078879991, 0.107473265, 0.168512597],
		y: [1.367914698, 1.33206339, 1.299957905, 1.277516665],
		name: "ℓ=5 Å",
		line: { shape: "spline", color: "#bab9b9" },
	},
	// {
	// 	mode: "lines",
	// 	x: [
	// 		0.008059958, 0.016119915, 0.03223983, 0.062277527, 0.078879991,
	// 		0.107473265, 0.168512597, 0.253378104,
	// 	],
	// 	y: [
	// 		1.775616523, 1.775616523, 1.775616523, 1.775616523, 1.775616523,
	// 		1.775616523, 1.775616523, 1.775616523,
	// 	],
	// 	name: "Local",
	// 	line: { shape: "spline", color: "black", dash: "dash" },
	// },
];

const data_resultados_4 = data_resultados_3.map((obj) => {
	let n = parseFloat(obj["name"].split("=")[1].split(" ")[0]);
	return {
		...obj,
		type: "lines",
		x: obj["x"].map((x) => {
			return x * n;
		}),
		y: obj["y"],
	};
});

const data_resultados_5 = [
	{
		type: "lines",
		x: [
			0.124555053314789, 0.157759982384028, 0.186832579972184,
			0.214946529768651, 0.236639973576042, 0.249110106629578,
			0.311387633286973, 0.315519964768056, 0.322419794652977,
			0.337025193393268, 0.39439995596007, 0.429893059537302,
			0.505537790089902, 0.537366324421628, 0.674050386786536,
			0.842562983483169,
		],
		y: [
			1.3124953237662, 1.20539683164254, 1.12162430874011,
			1.04764451775641, 0.998761767080943, 0.972193282563548,
			0.866194949445412, 0.860401471217057, 0.851005235028537,
			0.831093206742163, 0.771204029212955, 0.7416114428966,
			0.693619115272277, 0.678104377180235, 0.632322786249895,
			0.603141501165467,
		],
		name: "ζ=0.1",
		line: { shape: "spline", color: "#dc2c41" },
	},
	{
		type: "lines",
		x: [
			0.124555053314789, 0.157759982384028, 0.186832579972184,
			0.214946529768651, 0.236639973576042, 0.249110106629578,
			0.311387633286973, 0.315519964768056, 0.322419794652977,
			0.337025193393268, 0.39439995596007, 0.429893059537302,
			0.505537790089902, 0.537366324421628, 0.674050386786536,
			0.842562983483169,
		],
		y: [
			1.44144017909578, 1.36977842304383, 1.31584154378522,
			1.26655114920521, 1.23600543311519, 1.21890711964928,
			1.15125264021733, 1.14761436767065, 1.14171078327249,
			1.12805623293664, 1.09252469401445, 1.07481829273125,
			1.04705433555593, 1.03835787114867, 1.01384019306671,
			0.999163574164201,
		],
		name: "ζ=0.3 ",
		line: { shape: "spline", color: "#8c8c8c" },
	},
	{
		type: "lines",
		x: [
			0.124555053314789, 0.157759982384028, 0.186832579972184,
			0.214946529768651, 0.236639973576042, 0.249110106629578,
			0.311387633286973, 0.315519964768056, 0.322419794652977,
			0.337025193393268, 0.39439995596007, 0.429893059537302,
			0.505537790089902, 0.537366324421628, 0.674050386786536,
			0.842562983483169,
		],
		y: [
			1.65202343835881, 1.62605855147801, 1.6093327169427,
			1.58945562296816, 1.58138695536303, 1.57549177973764,
			1.55262731233982, 1.5514359332126, 1.54947898686787,
			1.54239683802017, 1.53355583699069, 1.52796129164703,
			1.51941468226867, 1.51674161715544, 1.50947352614497,
			1.50520654743285,
		],
		name: "ζ=0.7",
		line: { shape: "spline", color: "black" },
	},
	{
		type: "lines",
		x: [
			0.124555053314789, 0.157759982384028, 0.186832579972184,
			0.214946529768651, 0.236639973576042, 0.249110106629578,
			0.311387633286973, 0.315519964768056, 0.322419794652977,
			0.337025193393268, 0.39439995596007, 0.429893059537302,
			0.505537790089902, 0.537366324421628, 0.674050386786536,
			0.842562983483169,
		],
		y: [
			1.78919803144054, 1.78921922762744, 1.79325245971274,
			1.78920806439719, 1.79327370393148, 1.79325245971275,
			1.79325245971277, 1.79327370393147, 1.79326251540467,
			1.78925902413687, 1.7932737039315, 1.79326251540454,
			1.79331359062215, 1.79326251540454, 1.79331359062215,
			1.79331359062215,
		],
		name: "ζ=1",
		line: { shape: "spline", color: "#bab9b9" },
	},
	// {
	// 	mode: "lines",
	// 	x: [
	// 		0.008059958, 0.016119915, 0.03223983, 0.062277527, 0.078879991,
	// 		0.107473265, 0.168512597, 0.253378104,
	// 	],
	// 	y: [
	// 		1.775616523, 1.775616523, 1.775616523, 1.775616523, 1.775616523,
	// 		1.775616523, 1.775616523, 1.775616523,
	// 	],
	// 	name: "Local",
	// 	line: { shape: "spline", color: "black", dash: "dash" },
	// },
];

const data_resultados_6 = [
	{
		type: "lines",
		x: [
			0.0199999999999999, 0.0199999999999999, 0.02, 0.02, 0.02,
			0.03223983, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06447966,
			0.0666666666666666, 0.0666666666666666, 0.0666666666666666,
			0.0666666666666666, 0.0666666666666666, 0.1, 0.1, 0.1, 0.1, 0.1,
			0.124555053, 0.157759982, 0.21494653, 0.337025193, 0.506756209,
			0.999999999999999, 2,
		],
		y: [
			1.68750106059432, 1.68750106059433, 1.68750106059429,
			1.68750106059437, 1.68750106059422, 1.59334324, 1.56844737612075,
			1.5684473761208, 1.56844737612076, 1.56844737612073,
			1.56844737612083, 1.515968038, 1.51151290139252, 1.51151290139252,
			1.51151290139254, 1.51151290139247, 1.51151290139252,
			1.39986292806422, 1.39986292806423, 1.39986292806424,
			1.39986292806422, 1.39986292806422, 1.311043563, 1.203846351,
			1.046395996, 0.830446607, 0.694179264, 0.60550620550545,
			0.584118065581218,
		],
		name: "ζ=0.1",
		line: { shape: "spline" }, //color: "#dc2c41" },
	},
	{
		type: "lines",
		x: [
			0.0199999999999999, 0.0199999999999999, 0.02, 0.02, 0.02,
			0.03223983, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06447966,
			0.0666666666666666, 0.0666666666666666, 0.0666666666666666,
			0.0666666666666666, 0.0666666666666666, 0.1, 0.1, 0.1, 0.1, 0.1,
			0.124555053, 0.157759982, 0.21494653, 0.337025193, 0.506756209,
			0.999999999999999, 2,
		],
		y: [
			1.6976687491533, 1.69766874915327, 1.69766874915327,
			1.69766874915341, 1.69766874915329, 1.615029394, 1.59408776321338,
			1.5940877632133, 1.59408776321331, 1.59408776321336,
			1.59408776321332, 1.549119622, 1.54585931407972, 1.54585931407976,
			1.54585931407979, 1.54585931407971, 1.54585931407976,
			1.45402620302276, 1.45402620302277, 1.45402620302279,
			1.45402620302278, 1.45402620302278, 1.379369797, 1.292114799,
			1.165568595, 0.993802313, 0.890919379, 0.837888692131059,
			0.824126313522411,
		],
		name: "ζ=0.2 ",
		line: { shape: "spline" }, //color: "#8c8c8c" },
	},
	{
		type: "lines",
		x: [
			0.0199999999999999, 0.0199999999999999, 0.02, 0.02, 0.02,
			0.03223983, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06447966,
			0.0666666666666666, 0.0666666666666666, 0.0666666666666666,
			0.0666666666666666, 0.0666666666666666, 0.1, 0.1, 0.1, 0.1, 0.1,
			0.124555053, 0.157759982, 0.21494653, 0.337025193, 0.506756209,
			0.999999999999999, 2,
		],
		y: [
			1.70774406717884, 1.70774406717877, 1.70774406717885,
			1.7077440671789, 1.70774406717885, 1.636327709, 1.61890056273538,
			1.61890056273537, 1.61890056273538, 1.61890056273537,
			1.61890056273539, 1.580766156, 1.57860296475417, 1.57860296475418,
			1.57860296475422, 1.57860296475416, 1.57860296475417,
			1.50411444462101, 1.50411444462105, 1.50411444462105,
			1.50411444462101, 1.50411444462101, 1.440709079, 1.369049408,
			1.265930716, 1.127586123, 1.049174885, 1.01846064116796,
			1.00854936026696,
		],
		name: "ζ=0.3",
		line: { shape: "spline" }, //color: "black" },
	},
	{
		type: "lines",
		x: [
			0.0199999999999999, 0.0199999999999999, 0.02, 0.02, 0.02,
			0.03223983, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06447966,
			0.0666666666666666, 0.0666666666666666, 0.0666666666666666,
			0.0666666666666666, 0.0666666666666666, 0.1, 0.1, 0.1, 0.1, 0.1,
			0.124555053, 0.157759982, 0.21494653, 0.337025193, 0.506756209,
			0.999999999999999, 2,
		],
		y: [
			1.71773193345322, 1.7177319334532, 1.71773193345328,
			1.71773193345335, 1.71773193345325, 1.657270837, 1.6430456137412,
			1.64304561374142, 1.64304561374137, 1.64304561374141,
			1.64304561374138, 1.611269432, 1.61012654801262, 1.61012654801262,
			1.61012654801255, 1.61012654801247, 1.61012654801264,
			1.55134828027357, 1.55134828027358, 1.55134828027359,
			1.55134828027356, 1.55134828027355, 1.497638226, 1.439272198,
			1.355809469, 1.245153508, 1.185927071, 1.17149983422974,
			1.16411287406525,
		],
		name: "ζ=0.4",
		line: { shape: "spline" }, //color: "#bab9b9" },
	},
	{
		type: "lines",
		x: [
			0.0199999999999999, 0.0199999999999999, 0.02, 0.02, 0.02,
			0.03223983, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06447966,
			0.0666666666666666, 0.0666666666666666, 0.0666666666666666,
			0.0666666666666666, 0.0666666666666666, 0.1, 0.1, 0.1, 0.1, 0.1,
			0.124555053, 0.157759982, 0.21494653, 0.337025193, 0.506756209,
			0.999999999999999, 2,
		],
		y: [
			1.71773193345322, 1.7177319334532, 1.71773193345328,
			1.71773193345335, 1.71773193345325, 1.657270837, 1.6430456137412,
			1.64304561374142, 1.64304561374137, 1.64304561374141,
			1.64304561374138, 1.611269432, 1.61012654801262, 1.61012654801262,
			1.61012654801255, 1.61012654801247, 1.61012654801264,
			1.55134828027357, 1.55134828027358, 1.55134828027359,
			1.55134828027356, 1.55134828027355, 1.497638226, 1.439272198,
			1.355809469, 1.245153508, 1.185927071, 1.17149983422974,
			1.16411287406525,
		],
		name: "ζ=0.5",
		line: { shape: "spline" }, //color: "#bab9b9" },
	},
	{
		type: "lines",
		x: [
			0.0199999999999999, 0.0199999999999999, 0.02, 0.02, 0.02,
			0.03223983, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06447966,
			0.0666666666666666, 0.0666666666666666, 0.0666666666666666,
			0.0666666666666666, 0.0666666666666666, 0.1, 0.1, 0.1, 0.1, 0.1,
			0.124555053, 0.157759982, 0.21494653, 0.337025193, 0.506756209,
			0.999999999999999, 2,
		],
		y: [
			1.73746118110601, 1.73746118110602, 1.73746118110599,
			1.73746118110614, 1.73746118110596, 1.698189075, 1.68968257539047,
			1.68968257539042, 1.68968257539044, 1.68968257539043,
			1.68968257539047, 1.669578502, 1.67030139100916, 1.67030139100918,
			1.6703013910092, 1.67030139100919, 1.67030139100928,
			1.63957801228208, 1.63957801228211, 1.63957801228209,
			1.63957801228208, 1.63957801228208, 1.602476508, 1.566621214,
			1.515898346, 1.450048493, 1.419954567, 1.42921520954444,
			1.42517790676421,
		],
		name: "ζ=0.6",
		line: { shape: "spline" }, //color: "#bab9b9" },
	},
	{
		type: "lines",
		x: [
			0.0199999999999999, 0.0199999999999999, 0.02, 0.02, 0.02,
			0.03223983, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06447966,
			0.0666666666666666, 0.0666666666666666, 0.0666666666666666,
			0.0666666666666666, 0.0666666666666666, 0.1, 0.1, 0.1, 0.1, 0.1,
			0.124555053, 0.157759982, 0.21494653, 0.337025193, 0.506756209,
			0.999999999999999, 2,
		],
		y: [
			1.74720922138403, 1.74720922138406, 1.74720922138378,
			1.74720922138409, 1.7472092213839, 1.718203244, 1.71228968686326,
			1.7122896868631, 1.71228968686287, 1.71228968686299,
			1.71228968686321, 1.697612498, 1.69919887707033, 1.69919887707033,
			1.69919887707044, 1.69919887707036, 1.69919887707013,
			1.68125127529376, 1.68125127529379, 1.68125127529375,
			1.68125127529377, 1.68125127529377, 1.651509258, 1.6255297,
			1.588953345, 1.541888373, 1.523440299, 1.54200075536221,
			1.53919412859041,
		],
		name: "ζ=0.7",
		line: { shape: "spline" }, //color: "#bab9b9" },
	},
	{
		type: "lines",
		x: [
			0.0199999999999999, 0.0199999999999999, 0.02, 0.02, 0.02,
			0.03223983, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06447966,
			0.0666666666666666, 0.0666666666666666, 0.0666666666666666,
			0.0666666666666666, 0.0666666666666666, 0.1, 0.1, 0.1, 0.1, 0.1,
			0.124555053, 0.157759982, 0.21494653, 0.337025193, 0.506756209,
			0.999999999999999, 2,
		],
		y: [
			1.75688336656148, 1.75688336656184, 1.75688336656158,
			1.75688336656198, 1.75688336656176, 1.737942469, 1.73447831174533,
			1.73447831174548, 1.73447831174529, 1.73447831174523,
			1.73447831174547, 1.725005218, 1.72741710173516, 1.72741710173509,
			1.72741710173514, 1.72741710173515, 1.72741710173513,
			1.72159153797052, 1.72159153797055, 1.72159153797057,
			1.72159153797054, 1.72159153797044, 1.698744747, 1.681963066,
			1.658441169, 1.628411449, 1.620295948, 1.64708001020608,
			1.64532824014591,
		],
		name: "ζ=0.8",
		line: { shape: "spline" }, //color: "#bab9b9" },
	},
	{
		type: "lines",
		x: [
			0.0199999999999999, 0.0199999999999999, 0.02, 0.02, 0.02,
			0.03223983, 0.05, 0.05, 0.05, 0.05, 0.05, 0.06447966,
			0.0666666666666666, 0.0666666666666666, 0.0666666666666666,
			0.0666666666666666, 0.0666666666666666, 0.1, 0.1, 0.1, 0.1, 0.1,
			0.124555053, 0.157759982, 0.21494653, 0.337025193, 0.506756209,
			0.999999999999999, 2,
		],
		y: [
			1.76648614003573, 1.76648614003577, 1.76648614003535,
			1.76648614003573, 1.76648614003588, 1.757420649, 1.7562806888274,
			1.75628068882698, 1.75628068882725, 1.75628068882706,
			1.75628068882727, 1.751815607, 1.75501951794585, 1.755019517946,
			1.75501951794595, 1.75501951794596, 1.755019517946,
			1.76075410703995, 1.76075410703994, 1.76075410703998,
			1.76075410703989, 1.76075410703997, 1.744415101, 1.736265655,
			1.724890071, 1.710468353, 1.711657957, 1.74584539141334,
			1.74501903676406,
		],
		name: "ζ=0.9",
		line: { shape: "spline" }, //color: "#bab9b9" },
	},
	{
		mode: "lines",
		x: [0.02, 2],
		y: [1.775616523, 1.775616523],
		name: "Local",
		line: { shape: "spline", color: "black", dash: "dash" },
	},
	{
		mode: "lines",
		x: [0.02, 2],
		y: [1.688815, 1.688815],
		name: "5%",
		line: { shape: "spline", color: "gray", dash: "dash" },
	},
];

atenu1_div.map((x) =>
	Plotly.newPlot(x, [data_atenua_1], plots_layout, plots_config)
);

resultados_1.map((x) =>
	Plotly.newPlot(
		x,
		data_resultados_1,
		{
			xaxis: {
				title: "1/R",
				gridcolor: "#dcdcdc",
				zerolinecolor: "#dcdcdc",
			},
			yaxis: {
				title: "η",
				gridcolor: "#dcdcdc",
				zerolinecolor: "#dcdcdc",
			},
			legend: {
				x: 0.02,
				y: 0.15,
				orientation: "h",
				xanchor: "left",
				borderwidth: 2,
				bordercolor: "lightgray",
			},
			font: { size: 20 },
			margin: { t: 0 },
		},
		plots_config
	)
);

resultados_2.map((x) =>
	Plotly.newPlot(
		x,
		data_resultados_2,
		{
			xaxis: {
				title: "1/R",
				gridcolor: "#dcdcdc",
				zerolinecolor: "#dcdcdc",
				tickvals: [
					0.008059958, 0.016119915, 0.03223983, 0.062277527,
					0.078879991, 0.107473265, 0.168512597, 0.253378104,
				],
				ticktext: [
					"1/62ℓ",
					"1/31ℓ",
					"1/16ℓ",
					"1/8ℓ",
					"1/6ℓ",
					"1/5ℓ",
					"1/3ℓ",
					"1/2ℓ",
				],
				tickangle: 90,
			},
			yaxis: {
				title: "η",
				gridcolor: "#dcdcdc",
				zerolinecolor: "#dcdcdc",
			},
			legend: {
				x: 0.05,
				y: 0.21,
				orientation: "h",
				xanchor: "left",
				borderwidth: 2,
				bordercolor: "lightgray",
				font: { size: 15 },
			},
			font: { size: 20 },
			margin: { t: 0 },
			annotations: [
				{
					x: 0.008059958,
					y: 1.708224011,
					xref: "x",
					yref: "y",
					text: "Δ=3.80%",
					showarrow: true,
					arrowhead: 3,
					ax: 30,
					ay: 70,
				},
				{
					x: 0.016119915,
					y: 1.67788427,
					xref: "x",
					yref: "y",
					text: "Δ=5.50%",
					showarrow: true,
					arrowhead: 3,
					ax: 120,
					ay: -20,
				},
			],
		},
		plots_config
	)
);

function createGraph3() {
	resultados_3.map((x) =>
		Plotly.newPlot(
			x,
			JSON.parse(JSON.stringify(data_resultados_3)),
			{
				xaxis: {
					title: "ℓ/R",
					gridcolor: "#dcdcdc",
					zerolinecolor: "#dcdcdc",
				},
				yaxis: {
					title: "η",
					gridcolor: "#dcdcdc",
					zerolinecolor: "#dcdcdc",
				},
				legend: {
					x: 1 - 0.15,
					y: 0.9,
					orientation: "v",
					xanchor: "left",
					borderwidth: 2,
					bordercolor: "lightgray",
					font: { size: 15 },
				},
				font: { size: 20 },
				margin: { t: 0 },
			},
			plots_config
		)
	);
}

createGraph3();

function createGraph6(b) {
	let m = { t: 0 };
	let xax = {
		title: "ℓ/R",
		gridcolor: "#dcdcdc",
		zerolinecolor: "#dcdcdc",
	};
	if (!b) {
		m = { t: 0, b: 30 };
		xax = {
			gridcolor: "#dcdcdc",
			zerolinecolor: "#dcdcdc",
		};
	}
	resultados_5.map((x) =>
		Plotly.newPlot(
			x,
			data_resultados_6,
			{
				xaxis: xax,
				yaxis: {
					title: "η",
					gridcolor: "#dcdcdc",
					zerolinecolor: "#dcdcdc",
				},
				legend: {
					x: 1 - 0.15,
					y: 0.9,
					orientation: "v",
					xanchor: "left",
					borderwidth: 2,
					bordercolor: "lightgray",
					font: { size: 15 },
				},
				showlegend: b,
				font: { size: 20 },
				margin: m,
			},
			plots_config
		)
	);
}

const activador = document.getElementById("activador");
const activador2 = document.getElementById("activador2");
const activador3 = document.getElementById("activador3");
const activador4 = document.getElementById("activador4");
Reveal.on("fragmentshown", (event) => {
	if (event["fragment"] === activador) {
		sleep(200).then(animacion_l);
	} else if (event["fragment"] === activador2) {
		sleep(200).then(animacion_2);
	} else if (event["fragment"] === activador3) {
		sleep(200).then(animacion_zoom_1);
	} else if (event["fragment"] === activador4) {
		sleep(200).then(animacion_zoom_2);
	}
});
Reveal.on("fragmenthidden", (event) => {
	if (event["fragment"] === activador) {
		sleep(100).then(animacion_l_back);
	} else if (event["fragment"] === activador2) {
		sleep(100).then(animacion_l);
	}
});

function updateGraphs() {
	return new Promise((resolve) => {
		atenu1_div.map((x) => Plotly.update(x));
		resolve("resolved");
	});
}

function update_resultado_1() {
	return new Promise((resolve) => {
		resultados_1.map((x) => Plotly.update(x));
		resolve("resolved");
	});
}

function update_resultado_2() {
	return new Promise((resolve) => {
		resultados_2.map((x) => Plotly.update(x));
		resolve("resolved");
	});
}

function update_resultado_3() {
	return new Promise((resolve) => {
		resultados_3.map((x) => Plotly.update(x));
		resolve("resolved");
	});
}

function update_resultado_5(b) {
	return new Promise((resolve) => {
		createGraph6(b);
		resolve("resolved");
	});
}

Reveal.on("graficas-pesadas", () => {
	updateGraphs();
});

Reveal.on("graficas-resultados-1", () => {
	update_resultado_1();
});

Reveal.on("graficas-pesadas-res-2", () => {
	update_resultado_2();
});
Reveal.on("graficas-pesadas-res-3", () => {
	update_resultado_3();
});

Reveal.on("graficas-pesadas-res-3", () => {
	update_resultado_3();
});

Reveal.on("graficas-pesadas-res-4", () => {
	update_resultado_3();
});

Reveal.on("graficas-pesadas-res-5", () => {
	update_resultado_5(true);
});

Reveal.on("graficas-pesadas-res-6", () => {
	update_resultado_5(false);
});

function toogleNotes() {
	notes = !notes;
	Reveal.configure({ showNotes: notes });
}
function simulateKey(keyCode) {
	document.dispatchEvent(
		new KeyboardEvent("keydown", {
			keyCode: keyCode,
		})
	);
}

function animacion_l() {
	Plotly.animate(
		resultados_3[1],
		{
			layout: {
				yaxis: { range: [1.2, 1.6] },
				xaxis: { range: [0, 0.9] },
			},
		},
		{
			transition: {
				duration: 500,
				easing: "cubic-in-out",
			},
			frame: {
				duration: 1000,
			},
		}
	);
	sleep(300).then(() => {
		Plotly.animate(
			resultados_3[1],
			{
				data: data_resultados_4,
				layout: {
					xaxis: { title: "ℓ/R" },
				},
			},
			{
				transition: {
					duration: 500,
					easing: "cubic-in-out",
				},
				frame: {
					duration: 1000,
				},
			}
		);
	});
}

function animacion_2() {
	Plotly.animate(
		resultados_3[1],
		{
			data: data_resultados_5,
			layout: {
				yaxis: { range: [0.55, 1.85] },
			},
		},
		{
			transition: {
				duration: 500,
				easing: "cubic-in-out",
			},
			frame: {
				duration: 1000,
			},
		}
	);
}
function animacion_l_back() {
	sleep(500).then(() => {
		Plotly.animate(
			resultados_3[1],
			{
				data: data_resultados_3,
				layout: {
					xaxis: { range: [0.05568738506436567, 0.1751027389356343] },
					yaxis: { range: [1.2585550940853658, 1.5708633209146343] },
				},
			},
			{
				transition: {
					duration: 500,
					easing: "cubic-in-out",
				},
				frame: {
					duration: 1000,
				},
			}
		);
	});
}

function animacion_zoom_1() {
	Plotly.animate(
		resultados_5[1],
		{
			data: data_resultados_6,
			layout: {
				xaxis: { range: [0.02, 0.08] },
				yaxis: { range: [1.5, 1.8] },
			},
		},
		{
			transition: {
				duration: 500,
				easing: "cubic-in-out",
			},
			frame: {
				duration: 1000,
			},
		}
	);
}
function animacion_zoom_2() {
	Plotly.animate(
		resultados_5[2],
		{
			data: data_resultados_6,
			layout: {
				xaxis: { range: [0.2, 1.5] },
				yaxis: { range: [0.75, 1.5] },
			},
		},
		{
			transition: {
				duration: 500,
				easing: "cubic-in-out",
			},
			frame: {
				duration: 1000,
			},
		}
	);
}

function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}
