import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: IterableIterator<string>;

rl.on("line", (line) => {
  // 입력 전처리
  input = line[Symbol.iterator]();
  rl.close();
});

rl.on("close", () => {
  // 메인 로직
  let openParen = 0;
  let res = 0;

  let currentChar = input.next();
  let prevChar: "(" | ")" | undefined;

  while (!currentChar.done) {
    if (currentChar.value === "(") openParen += 1;
    else if (currentChar.value === ")") {
      openParen -= 1;
      if (prevChar === "(") {
        res += openParen;
      } else res++;
    }

    prevChar = currentChar.value;
    currentChar = input.next();
  }

  console.log(res);
  process.exit();
});
