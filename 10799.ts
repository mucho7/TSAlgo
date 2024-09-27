import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  // 입력 전처리
  // ()(((()())(())()))(())
  input = line.split("");
  rl.close();
});

rl.on("close", () => {
  // 메인 로직
  let openParen = 0;
  let res = 0;

  input.forEach((char, index) => {
    if (char === "(") openParen += 1;
    else if (char === ")") {
      openParen -= 1;
      if (input[index - 1] === "(") {
        res += openParen;
        console.log(res, openParen);
      } else res++;
    }
  });

  console.log(res);
  process.exit();
});
