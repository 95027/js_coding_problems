// function test(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(test("madam"));

function test(str) {
  str = str.trim().toLowerCase();

  let cleaned = "";

  function isAlphaNumeric(s) {
    return /^[a-z0-9]$/i.test(s);
  }

  for (let i = 0; i < str.length; i++) {
    if (isAlphaNumeric(str[i])) {
      cleaned += str[i];
    }
  }

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(test("A man, a plan, a canal: Panama"));
