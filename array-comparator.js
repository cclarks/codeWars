// Problem Description: You have two arrays in this kata, every array contain only unique elements. Your task is to
// calcualate number of elements in first array which also are in second array.
//
// -------------------------------------------------------------------------------

function matchArrays( v , r )
{
    let i = 0;
    let count = 0;
    while ( i < v.length )
    {
      if ( r.indexOf(v[i])!== -1 )
        {
          count++;
        }
      i++;
    }
  return count;
}


// changes
