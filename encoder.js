// I asked chatGPT to do this algorithm, not suprisingly it did better but I will leave my solution here as well.

function encoder(userInput) {
  // transform to array of letters
  let splitted = userInput.split("");

  let result = [];
  let count = 1;

  splitted.forEach((letter, index) => {
    let nextElement = splitted[index + 1];

    if (nextElement === letter) {
      count++;
    } else {
      result.push(letter);
      result.push(count);
      count = 1;
    }
  });
  return result.join('')
}

module.exports = encoder
