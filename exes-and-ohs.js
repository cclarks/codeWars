// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.

// -------------------------------------------------------------------------------

function XO(str) {

    // make the string lowercase because we are case insensitive
    str = str.toLowerCase();

    // put the string into an array
    var arrayOfCharacters = str.split("");

    //count the x's
    var countX = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'x');
      }, 0);

    // count the o's
    var countO = arrayOfCharacters.reduce( function( n, val ) {
        return n + (val === 'o');
      }, 0);

    // do these numbers match? if so return true and if not return false
    if ( countX == countO ) {
      return true;
    } else {
      return false;
    }
}
