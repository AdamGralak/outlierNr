export function analyzeParityPattern(input) {
  const numbers = input
    .split(',')
    .map(str => parseInt(str.trim()))
    .filter(n => !isNaN(n));

  if (numbers.length < 3) return null;

  const even = numbers.filter(n => n % 2 === 0);
  const odd = numbers.filter(n => n % 2 !== 0);

  if (even.length === 1) return even;
  if (odd.length === 1) return odd;

  return null;
}
