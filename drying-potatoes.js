// All we eat is water and dry matter.
//
// John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter.
//
// The water content is 99 percent. He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.
//
// At the output there is only 98% moisture.
//
// What is the total weight in kilograms (moisture plus dry matter) coming out of the oven?
//
// He finds 50 kilograms and he thinks he made a mistake: So much weight lost for so little water in less!
//
// Can you help him?
//
// Write function potatoes with
//
// int parameter p0 - initial humidity percent -
// int parameter w0 initial weight -
// int parameter p1 - final humidity percent -
// potatoesshould return the final weight coming out of the oven w1 truncated as an int.

// There are two methods of going about this:

// Method 1
// After the evaporating of the water, the remaining total quantity, x, contains 1 lbs pure potatoes and (98/100)x water. The equation becomes:
//
// {\displaystyle 1+(98/100)x=x}  1 + (98/100)x = x
// resulting in x = 50 lbs.
//
// Method 2

// The weight of water in the fresh potatoes is {\displaystyle 0.99\cdot 100} 0.99\cdot 100.
//
// If {\displaystyle x} x is the weight of water lost from the potatoes when they dehydrate then {\displaystyle 0.98(100-x)} 0.98(100-x) is the weight of water in the dehydrated potatoes. Therefore:
//
// {\displaystyle 0.99\cdot 100-0.98(100-x)=x} 0.99\cdot 100-0.98(100-x)=x
// Expanding brackets and simplifying
//
// {\displaystyle 99-(98-0.98x)=x} 99-(98-0.98x)=x
// {\displaystyle 99-98+0.98x=x} 99-98+0.98x=x
// {\displaystyle 1+0.98x=x} 1+0.98x=x
// Subtracting the smaller {\displaystyle x} x term from each side
//
// {\displaystyle 1+0.98x-0.98x=x-0.98x} 1+0.98x-0.98x=x-0.98x
// {\displaystyle 1=0.02x} 1=0.02x
// And solving:
//
// {\displaystyle 1/0.02=0.02x/0.02} 1/0.02=0.02x/0.02
// Which gives the lost water as:
//
// {\displaystyle 50=x} 50=x
// And the dehydrated weight of the potatoes as:
//
// {\displaystyle 100-x=100-50=50} 100-x=100-50=50

// -------------------------------------------------------------------------------

// {\displaystyle 1+(98/100)x=x}  1 + (98/100)x = x
// resulting in x = 50 lbs.
