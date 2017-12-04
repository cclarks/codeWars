
// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying F(n) * F(n+1) = prod
// My solution to the code wars challenge https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

// Not used for this, but here's some code to test if a number is in the Fibonacci sequence.
// const isPerfectSquare = num => {
//   const sq = Math.sqrt(num);
//   return sq * sq === num;
// }
// const isFib = num => {
//   return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
// }

const phi = (Math.sqrt(5) + 1) / 2;

const getF = num => {
  return Math.round(((Math.pow(phi, num)) - (-Math.pow(phi, -num))) / Math.sqrt(5))
}

const testProduct = (f) => {
  return getF(f) * getF(f + 1);
}

const productFib = prod => {
  let fib = 0;
  let candidate = 0;
  let match = false;

  while(candidate < prod + 1){
    fib += 1;
    candidate = testProduct(fib);
    if(candidate === prod){
      match = true;
      break;
    }
  }

  return [getF(fib), getF(fib + 1), match];
}
