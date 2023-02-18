// encoder("XXXYYCCYYYXXXXX");

// Write a simple encoder() function that will accept a string and the output will represent
// successive characters as character and single digit count.
// For example, the string “XXXYYYYZZQXX” would be encoded as “X3Y4Z2Q1X2”. You can assume the string to be encoded has no digits and consists solely of alphabetic characters.

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

  console.log(result.join(""));
  return result.join('')
}

module.exports = encoder
