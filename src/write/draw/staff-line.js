var sprintf = require('./sprintf');
const roundNumber = require("./round-number");

function printStaffLine(renderer, x1,x2, pitch, klass) {
	var isIE=/*@cc_on!@*/false;//IE detector
	var dy = 0.35;
	var fill = "#000000";
	if (isIE) {
		dy = 1;
		fill = "#666666";
	}
	var y = renderer.calcY(pitch);
	x1 = roundNumber(x1);
	x2 = roundNumber(x2);
	var y1 = roundNumber(y-dy);
	var y2 = roundNumber(y+dy);
	var pathString = sprintf("M %f %f L %f %f L %f %f L %f %f z", x1, y1, x2, y1,
		x2, y2, x1, y2);
	var options = {path:pathString, stroke:"none", fill:fill};
	if (klass)
		options['class'] = klass;
	var ret = renderer.paper.pathToBack(options);

	return ret;
}

module.exports = printStaffLine;

