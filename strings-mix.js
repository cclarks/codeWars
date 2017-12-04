// Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.
//
// s1 = "A aaaa bb c"
//
// s2 = "& aaa bbb c d"
//
// s1 has 4 'a', 2 'b', 1 'c'
//
// s2 has 3 'a', 3 'b', 1 'c', 1 'd'
//
// So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.
//
// We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.
//
// The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.
//
// In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'. See examples and "Example Tests".

function mix(s1, s2) {
	const alpha = 'abcdefghijklmnopqrstuvwxyz'.split(''),
		arr1 = [],
		arr2 = [];
	alpha.map(function(x) {
		let letter = x,
			reg = new RegExp(letter, 'g');
		arr1.push(s1.match(reg) || []);
		arr2.push(s2.match(reg) || []);
	});
	const max1 = [],
		max2 = [],
		eql = [];
	arr1.forEach(function(x, ind) {
		if (x.length > arr2[ind].length && x.length > 1)
			max1.push('1:' + x.join(''));
		if (x.length < arr2[ind].length && arr2[ind].length > 1)
			max2.push('2:' + arr2[ind].join(''));
		if (x.length == arr2[ind].length && x.length > 1)
			eql.push('=:' + x.join(''));
	});
	let str = max1
		.concat(max2)
		.concat(eql)
		.sort(function(a, b) {
			if (b.length == a.length) {
				if (a.charCodeAt(0) == b.charCodeAt(0))
					return a.charCodeAt(2) - b.charCodeAt(2);
				else return a.charCodeAt(0) - b.charCodeAt(0);
			} else return b.length - a.length;
		});
	return str.join('/');
}

// OR

function mix(s1, s2) {
	var counter = s =>
		s
			.replace(/[^a-z]/g, '')
			.split('')
			.sort()
			.reduce((x, y) => ((x[y] = 1 + (x[y] || 0)), x), {});
	s1 = counter(s1);
	s2 = counter(s2);
	var res = [],
		keys = new Set(Object.keys(s1).concat(Object.keys(s2)));
	keys.forEach(key => {
		var c1 = s1[key] || 0,
			c2 = s2[key] || 0,
			count = Math.max(c1, c2);
		if (count > 1) {
			var from = [1, '=', 2][Math.sign(c2 - c1) + 1];
			var str = [...Array(count)].map(_ => key).join('');
			res.push(from + ':' + str);
		}
	});
	return res.sort((x, y) => y.length - x.length || (x < y ? -1 : 1)).join('/');
}
