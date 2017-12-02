
function getPoint (order, pos) {
	var x = 0;
	var y = 0;
	var tmp;
	var n = 1 << order;

	for (var s = 1; s < n; s *= 2) {
		var rx = 1 & (pos / 2);
		var ry = 1 & (pos ^ rx);

		if (ry == 0) {
			if (rx == 1) {
				x = s - 1 - x;
				y = s - 1 - y;
			}

			tmp = x;
			x = y;
			y = tmp;
		}

		x += s * rx;
		y += s * ry;

		pos /= 4;
	}

	return [x, y];
}
