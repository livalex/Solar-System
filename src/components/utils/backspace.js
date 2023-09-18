let humanize = Math.round(Math.random() * 100 + 20);

function backspace(id, intrvl) {
  let word = document.getElementById(id).textContent;
  let wordLength = word.length;
  let newWordLength = wordLength - 2;
  let newWord = word.slice(0, newWordLength);
  document.getElementById(id).innerText = newWord;
  if (newWordLength <= 0) {
    clearTimeout(intrvl);
  } else {
    newWordLength = wordLength;
  }
}

export const deleteText = (id) => {
  const intrvl = setInterval(() => backspace(id, intrvl), 7);
};
