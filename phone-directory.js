// John keeps a backup of his old personal phone book as a text file. On each line of the file he can find the phone number (formated as +X-abc-def-ghij where X stands for one or two digits), the corresponding name between < and > and the address.
//
// Unfortunately everything is mixed, things are not always in the same order, lines are cluttered with non-alpha-numeric characters.
//
// Examples of John's phone book lines:
//
// "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"
//
// " 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"
//
// "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"
//
// Could you help John with a program that, given the lines of his phone book and a phone number returns a string for this number : "Phone => num, Name => name, Address => adress"
//
// Examples:
//
// s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"
//
// phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."
// It can happen that, for a few phone numbers, there are many people for a phone number -say nb- , then
//
// return : "Error => Too many people: nb"
//
// or it can happen that the number nb is not in the phone book, in that case
//
// return: "Error => Not found: nb"

let digit = {
	'0': 1,
	'1': 1,
	'2': 1,
	'3': 1,
	'4': 1,
	'5': 1,
	'6': 1,
	'7': 1,
	'8': 1,
	'9': 1
};
let ignore = {
	':': 1,
	';': 1,
	'\\': 1,
	'!': 1,
	'/': 1,
	'*': 1,
	$: 1,
	'?': 1,
	',': 1
};
function phone(strng, num) {
	let dic = {};
	let name = '',
		address = '',
		pnum = '';
	for (let i = 0; i < strng.length; i++) {
		if (strng[i] == '\n') {
			dic[pnum]['address'] = address.trim();
			name = '';
			address = '';
			pnum = '';
		} else if (strng[i] == '+') {
			i += 1;
			let start = i;
			for (; strng[i] == '-' || strng[i] in digit; i++);
			let temp = strng.substring(start, i);
			if (!(temp in dic)) dic[temp] = {};
			else dic[temp] = 'error';
			pnum = temp;
			if (name != '') dic[pnum]['name'] = name;
			if (address != '') dic[pnum]['address'] = address;
			i -= 1;
		} else if (strng[i] == '<') {
			let start = i + 1;
			i += 1;
			for (; strng[i] != '>'; i++);
			let temp = strng.substring(start, i);
			if (pnum != '') dic[pnum]['name'] = temp;
			name = temp;
		} else {
			if (
				strng[i] in ignore ||
				(address == '' && strng[i] == ' ') ||
				(address != '' && address[address.length - 1] == ' ' && strng[i] == ' ')
			)
				continue;
			address += strng[i] == '_' ? ' ' : strng[i];
		}
	}
	return num in dic
		? dic[num] == 'error'
			? 'Error => Too many people: ' + num
			: 'Phone => ' +
				num +
				', Name => ' +
				dic[num]['name'] +
				', Address => ' +
				dic[num]['address']
		: 'Error => Not found: ' + num;
}

// OR

function phone(book, num) {
	let found = book.split('\n').filter(line => line.indexOf(num) > -1);
	let [name, address] = line2data(found[0] || '', num);
	return !name.length
		? `Error => Not found: ${num}`
		: found.length > 1
			? `Error => Too many people: ${num}`
			: `Phone => ${num}, Name => ${name}, Address => ${address}`;
}

const line2data = (line, phone) => {
	let n = line.replace(/^.*</, '').replace(/>.*$/, '');
	line = line
		.replace('<' + n + '>', '')
		.replace(/[^\w\d\s.-]/g, '')
		.replace(/_/g, ' ');
	let a = line
		.replace(phone, '')
		.replace(/  +/g, ' ')
		.trim();
	return [n, a];
};
