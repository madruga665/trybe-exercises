const biggestWord = (phrase) => {
  const phraseToArray = phrase.split(' ');
  let biggest = 0;
  let result = '';
  
  for (const index of phraseToArray) {
    if (index.length > biggest) {
      biggest = index.length;
      result = index;
    }
  }
  return result;
}

console.log(biggestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

