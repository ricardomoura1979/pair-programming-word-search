const horizontalWordSearch = (letters, word) => {
  if (!letters) {
    return false
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
      //console.log("l = " + l); console.log("word = " + word);
      if (l.includes(word)) {
          return true;
      }
  }
  return false;
};

const transpose2DArray = (letters) => {
  let result = [];

  if (!letters[0]) {
    return false
  }

  for (let i = 0; i < letters[0].length; i++) {
      result.push([]);
      for (let j = 0; j < letters.length;
    j++) {
          result[i][j] = letters[j][i];
      }
  }
  console.log (result);
  return result;
};

const wordSearch = (letters, word) => {
  let result = horizontalWordSearch(letters, word);
  if (!result) {
    let allTransposeLetters = transpose2DArray(letters);
    result = horizontalWordSearch(allTransposeLetters, word);
  }
  return result;

};

module.exports = wordSearch;