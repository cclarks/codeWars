// write a function that replaces 'two', 'too' and 'to' with the number '2'. Even if the sound is found mid word
// (like in octopus) grandma still thinks that should be replaced with a 2. bless her.
//
// 'I love to text' becomes 'I love 2 text' 'see you tomorrow' becomes 'see you 2morrow' 'look at that octopus' becomes 'look at that oc2pus'
//
// Note that 'too' should become '2', not '2o'.
//


function textin(str){
  console.log(str);
  var patt = /(too|two|to)/gi;
  return str.replace(patt, "2");
}

textin = (str) => {
  console.log(str)
  var pattern = /(too|two|to)/gi

  return str.replace(pattern, "2")
}
