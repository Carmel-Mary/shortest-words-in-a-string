//Simple, given a string of words, return the length of the shortest word(s).

//String will never be empty and you do not need to account for different data types.

//SOLUTION 1
function findShort(s){
    return Math.min.apply(null, s.split(' ').map(w => w.length));
  }

//SOLUTION 2
const findShort = (s) => s
  .split(' ')
  .sort((a, b) => b.length - a.length)
  .pop()
  .length;

//SOLUTION 3
function findShort(s){
    return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
  }