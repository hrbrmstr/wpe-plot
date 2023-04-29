import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

const mtcars = await d3.csv('./data/mtcars.csv', d3.autoType)
const mpg = await d3.csv('./data/mpg.csv', d3.autoType)
const diamonds = await d3.csv('./data/diamonds.csv', d3.autoType)
const faithfuld = await d3.csv('./data/faithfuld.csv', d3.autoType)
const faithful = await d3.csv('./data/faithful.csv', d3.autoType)
const economics = await d3.csv('./data/economics.csv', d3.autoType)
const economicsLong = await d3.csv('./data/economics-long.csv', d3.autoType)

const defaultStyle = {
	backgroundColor: "#00000000"
}

const geomText01 = document.getElementById("geom-text-01")

geomText01.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		grid: true,
		marks: [
			Plot.text(
				mtcars,
				{ x: "wt", y: "mpg", text: "vehicle" }
			)
		]
	})
)

const geomText02 = document.getElementById("geom-text-02")

geomText02.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		grid: true,
		marks: [
			Plot.text(
				mtcars,
				{ x: "wt", y: "mpg", text: "vehicle", fontSize: "14pt" }
			)
		]
	})
)

const geomText03 = document.getElementById("geom-text-03")

geomText03.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		grid: true,
		marks: [
			Plot.dot(
				mtcars,
				{ x: "wt", y: "mpg", fill: "#3a579a" }
			),
			Plot.text(
				mtcars,
				{ x: d => d.wt + 0.05, y: "mpg", text: "vehicle", textAnchor: "start" }
			)
		]
	})
)

const geomText04 = document.getElementById("geom-text-04")

geomText04.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		grid: true,
		marks: [
			Plot.dot(
				mtcars,
				{ x: "wt", y: "mpg", fill: "#3a579a" }
			),
			Plot.text(
				mtcars,
				{ x: "wt", y: d => d.mpg + 0.75, text: "vehicle", textAnchor: "middle" }
			)
		]
	})
)

const geomText05 = document.getElementById("geom-text-05")

geomText05.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		grid: true,
		marks: [
			Plot.dot(
				mtcars,
				{ x: "wt", y: "mpg", fill: "#3a579a" }
			),
			Plot.text(
				mtcars,
				{ x: "wt", y: "mpg", text: "vehicle", rotate: -45}
			)
		]
	})
)

const geomText06 = document.getElementById("geom-text-06")

geomText06.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		grid: true,
		color: {
			type: "ordinal",
			range: [ "#88a2bc", "#d99477", "#586c5c"],
			legend: true
		},
		marks: [
			Plot.text(
				mtcars.map(d => { d.cyl = `${d.cyl}`; return d }),
				{ x: "wt", y: "mpg", text: "vehicle", fill: "cyl" }
			)
		]
	})
)

const geomText07 = document.getElementById("geom-text-07")

geomText07.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		grid: true,
		marks: [
			Plot.text(
				mtcars,
				{ x: "wt", y: "mpg", text: "vehicle", fontSize: d => d.wt * 2 * Math.sqrt(d.wt) }
			)
		]
	})
)

const geomCol01 = document.getElementById("geom-col-01")

geomCol01.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		y: {
			grid: true,
		}, 
		marks: [
			Plot.auto(mpg, { x: "class", y: { reduce: "count" }, mark: "bar" })
		]
	})
)

const geomCol02 = document.getElementById("geom-col-02")

geomCol02.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		y: {
			grid: true,
		},
		marks: [
			Plot.auto(mpg, { y: "class", x: { reduce: "count" }, mark: "bar" })
		]
	})
)

const geomCol03 = document.getElementById("geom-col-03")

geomCol03.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		color: {
			legend: true
		},
		y: {
			grid: true,
		},
		marks: [
			Plot.auto(mpg, { x: "class", y: { reduce: "count" }, color: "drv", mark: "bar" })
		]
	})
)

const geomPoint01 = document.getElementById("geom-point-01")

geomPoint01.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		grid: true,
		marginLeft: 100,
		marks: [
			Plot.dot(
				diamonds,
				{ x: "carat", y: "price", opacity: 1 / 10 }
			)
		]
	})
)

const geomRaster01 = document.getElementById("geom-raster-01")

geomRaster01.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		marks: [
			Plot.raster(
				faithfuld,
				{ x: "waiting", y: "eruptions", fill: "density", interpolate: "nearest" }
			)
		]
	})
)

const geomBoxplot01 = document.getElementById("geom-boxplot-01")

geomBoxplot01.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		marks: [
			Plot.boxY(
				mpg,
				{ x: "class", y: "hwy" }
			)
		]
	})
)

const geomSmooth01 = document.getElementById("geom-smooth-01")

geomSmooth01.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		marks: [
			Plot.dot(
				mpg,
				{ x: "displ", y: "hwy" }
			),
			Plot.linearRegressionY(
				mpg, {
				x: "displ",
				y: "hwy",
				stroke: "red",
			}),
		],
	})
)

const geomHexbin = document.getElementById("geom-hexbin-01")

geomHexbin.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		marginLeft: 50,
		marginBottom: 50,
		marks: [
			Plot.hexgrid(),
			Plot.dot(
				diamonds,
				Plot.hexbin(
					{ r: "count" },
					{ x: "carat", y: "price", fill: "currentColor" }
				)
			),
		],
	})
)

const geomDensity01 = document.getElementById("geom-density-01")

geomDensity01.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		marginLeft: 50,
		marginBottom: 50,
		marks: [
			Plot.density(
				faithful,
				{ x: "eruptions", y: "waiting"	}
			),
			Plot.dot(
				faithful,
				{ x: "eruptions", y: "waiting" }
			),
		],
	})
)

const geomLine01 = document.getElementById("geom-line-01")

geomLine01.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		grid: true,
		marks: [
			Plot.line(
				economics,
				{ x: "date", y: "unemploy" }
			)
		],
	})
)

const geomLine02 = document.getElementById("geom-line-02")

geomLine02.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		grid: true,
		color: {
			legend: true
		},
		marks: [
			Plot.line(
				economicsLong,
				{ x: "date", y: "value01", stroke: "variable" }
			)
		],
	})
)

const geomLine03 = document.getElementById("geom-line-03")

geomLine03.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		grid: true,
		color: {
			legend: true
		},
		marks: [
			Plot.line(economics, {
				x: (d) => d.unemploy / d.pop,
				y: "psavert",
				z: null,
				stroke: (d) => d.date
			})
		]
	})
)

const geomSegment01 = document.getElementById("geom-segment-01")

geomSegment01.replaceChildren(
	Plot.plot({
		style: defaultStyle,
		grid: true,
		color: {
			legend: true
		},
		marks: [
			Plot.dot(mtcars, { x: "wt", y: "mpg" }),
			Plot.link([ { x1: 2.62, x2: 3.57, y1: 21.0, y2: 15.0 } ], {
				x1: "x1",
				x2: "x2",
				y1: "y1",
				y2: "y2"
			})
		]
	})
)


// In case you need to debug anything

globalThis.mtcars = mtcars
globalThis.faithfuld = faithfuld
globalThis.mpg = mpg
globalThis.d3 = d3
globalThis.Plot = Plot
