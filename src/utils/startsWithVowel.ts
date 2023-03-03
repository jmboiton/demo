const VOWEL = /[aeiou]/i;

function startsWithVowel(word: string): boolean {
  return VOWEL.test(word[0]);
}

export default startsWithVowel