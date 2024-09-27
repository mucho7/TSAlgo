import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: any;

rl.on("line", (line) => {
  // 입력 전처리
  input = line;
  rl.close();
});

rl.on("close", () => {
  // 메인 로직
  const res = input;
  console.log(res);
  process.exit();
});
