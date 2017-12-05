// A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
// Within that sequence, he chooses two numbers, a and b.
// He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
// Given a number n, could you tell me the numbers he excluded from the sequence?
// The function takes the parameter: n (don't worry, n is always strictly greater than 0 and small enough so we shouldn't have overflow) and returns an array of the form:
//
// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
// with all (a, b) which are the possible removed numbers in the sequence 1 to n.
//
// [(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ...will be sorted in increasing order of the "a".
//
// It happens that there are several possible (a, b). The function returns an empty array if no possible numbers are found which will prove that my friend has not told the truth! (Go: in this case return nil).
//
// (See examples for each language in "RUN EXAMPLES")

function removeNb(n) {
	let sum = (n + 1) * n / 2;
	let res = [];
	let minx1 = Math.floor((n - 1) * n / 2 / (n + 1));
	let maxx1 = Math.floor(Math.sqrt(sum + 1) - 1);
	for (let x1 = minx1; x1 <= maxx1; x1++) {
		let x2 = Math.floor((sum - x1) / (x1 + 1));
		if (x1 + x2 + x1 * x2 == sum) {
			res.push([x1, x2]);
			res.push([x2, x1]);
		}
	}
	return res.sort(function(a, b) {
		return a[0] >= b[0] ? 1 : -1;
	});
}

// OR

function removeNb(n) {
	// from the instruction:
	// a * b = S(n) - a - b

	// and the sum of all first n natural numbers is
	// S(n) = n * (n + 1) / 2

	// so we can refrase the first formula like this:
	// a * b = n * (n + 1) / 2 - a - b
	// a * b + b = n * (n + 1) / 2 - a
	// b * (a + 1) = n * (n + 1) / 2 - a
	// b = (n * (n + 1) / 2 - a) / (a + 1)

	// but a and b are natural and up to n

	var results = [];
	for (var a = 1; a <= n; a++) {
		var b = (n * (n + 1) / 2 - a) / (a + 1);
		if (b % 1 === 0 && b <= n) results.push([a, b]);
	}
	return results;
}
