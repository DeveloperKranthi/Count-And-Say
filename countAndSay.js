/**
 * @param {number} n
 * @return {string}
 */
let countAndSay = function (n) {
  let finalString = "1";

  if (n === 1) {
    return finalString;
  }

  let characterPointer = 0;
  let countPointer = 0;
  let stringInProgress = "";

  while (n > 1) {
    while (countPointer < finalString.length) {
      while (
        finalString.charAt(characterPointer) ===
        finalString.charAt(countPointer)
      ) {
        countPointer++;
      }

      stringInProgress += (countPointer - characterPointer).toString();
      stringInProgress += finalString.charAt(characterPointer);
      characterPointer = countPointer;
    }

    finalString = stringInProgress;
    stringInProgress = "";
    n--;
    characterPointer = 0;
    countPointer = 0;
  }

  return finalString;
};
countAndSay(4);
