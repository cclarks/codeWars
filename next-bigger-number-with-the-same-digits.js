// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:
//
// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:
//
// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1

function nextBigger(n) {
	var digitSort = n =>
		n
			.toString()
			.split('')
			.sort((a, b) => b - a)
			.join('');
	if (n.toString() === digitSort(n)) return -1;
	for (i = n + 1; i <= parseInt(digitSort(n)); i++) {
		if (digitSort(i) === digitSort(n)) return i;
	}
}

// OR

function nextBigger(n) {
	console.log(n);
	var chars = n.toString().split('');
	var i = chars.length - 1;
	while (i > 0) {
		if (chars[i] > chars[i - 1]) break;
		i--;
	}
	if (i == 0) return -1;
	var suf = chars.splice(i).sort();
	var t = chars[chars.length - 1];
	for (i = 0; i < suf.length; ++i) {
		if (suf[i] > t) break;
	}
	chars[chars.length - 1] = suf[i];
	suf[i] = t;
	var res = chars.concat(suf);
	var num = parseInt(res.join(''));
	console.log('->' + num);
	return num;
}
