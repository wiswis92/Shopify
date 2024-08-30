const ENGLISH_TO_BRAILLE = {
  "a": "O.....", "b": "O.O...", "c": "OO....", "d": "OO.O..", "e": "O..O..", "f": "OOO...", "g": "OOOO..", "h": "O.OO..", "i": ".OO...", "j": ".OOO..",
  "k": "O...O.", "l": "O.O.O.", "m": "OO..O.", "n": "OO.OO.", "o": "O..OO.", "p": "OOO.O.", "q": "OOOOO.", "r": "O.OOO.", "s": ".OO.O.", "t": ".OOOO.",
  "u": "O...OO", "v": "O.O.OO", "w": ".OOO.O", "x": "OO..OO", "y": "OO.OOO", "z": "O..OOO", " ": "......", "capital": "..O..."
};

const BRAILLE_TO_ENGLISH = {
  "O.....": "a", "O.O...": "b", "OO....": "c", "OO.O..": "d", "O..O..": "e", "OOO...": "f", "OOOO..": "g", "O.OO..": "h", ".OO...": "i", ".OOO..": "j",
  "O...O.": "k", "O.O.O.": "l", "OO..O.": "m", "OO.OO.": "n", "O..OO.": "o", "OOO.O.": "p", "OOOOO.": "q", "O.OOO.": "r", ".OO.O.": "s", ".OOOO.": "t",
  "O...OO": "u", "O.O.OO": "v", ".OOO.O": "w", "OO..OO": "x", "OO.OOO": "y", "O..OOO": "z", "......": " ", "..O...": "capital"
};

function translate(input) {
  if (/^[O.]+$/.test(input)) {
    let result = '';
    input = input.replace(/.{6}/g, '$& ').trim(); 

    input.split(' ').forEach(brailleChar => {
      result += BRAILLE_TO_ENGLISH[brailleChar] || '';
    });
    return result;
  } else {
    let result = '';
    for (let char of input) {
      if (char === char.toUpperCase() && char !== ' ') {
        result += ENGLISH_TO_BRAILLE["capital"] + ENGLISH_TO_BRAILLE[char.toLowerCase()];
      } else {
        result += ENGLISH_TO_BRAILLE[char.toLowerCase()] || '';
      }
    }
    return result;
  }
}

// Pour l'utiliser, on  doit faire comme ceci :
console.log(translate("Hello World")); // Traduire de l'anglais au braille
console.log(translate("O.....O.O.O.OOO...OOOO......O..O..O...OO.O...O..OO...")); // Traduire du braille à l'anglais
