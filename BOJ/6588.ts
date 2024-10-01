import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: number[] = [];

rl.on("line", (line) => {
  // 입력 전처리
  input.push(parseInt(line));
});

rl.on("close", () => {
  // 메인 로직
  const maxNumber = 1000001;
  const primeCache = Array(maxNumber).fill(1);

  // 소수 일괄 등록
  for (let i = 3; i <= Math.sqrt(maxNumber); i += 2) {
    if (primeCache[i])
      for (let j = i * 2; j < maxNumber; j += i) primeCache[j] = 0;
  }

  const findPrimeSum = (num: number): string | null => {
    if (num === 0) return;

    for (let prime = 3; prime <= num / 2; prime += 2) {
      const complement = num - prime;
      if (primeCache[prime] && primeCache[complement]) {
        return `${num} = ${prime} + ${complement}`;
      }
    }
    return null;
  };

  const res = input.map(findPrimeSum);

  res.forEach((str) => str && console.log(str));
  process.exit();
});
