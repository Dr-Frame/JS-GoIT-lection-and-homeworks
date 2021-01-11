function findLongestWord(string) {
  // Пиши код ниже этой строки
  const words = string.split(' ');
  let longest = '';
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
  // Пиши код выше этой строки
}
console.log(findLongestWord('The quick brown fox  jumped over the lazy dog'));
