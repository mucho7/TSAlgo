import * as readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input: string[] = [];

rl.on("line", (line) => {
  // 입력 전처리
  input.push(line);
});

rl.on("close", () => {
  // 메인 로직
  const [targetString, _, ...orderList] = input;

  const left: string[] = targetString.split("");
  const right: string[] = [];

  orderList.forEach((orderCom) => {
    const [order, addString] = orderCom.split(" ");
    switch (order) {
      case "L":
        if (left.length > 0) {
          right.push(left.pop());
        }
        break;
      case "D":
        if (right.length > 0) {
          left.push(right.pop());
        }
        break;
      case "B":
        left.pop();
        break;
      case "P":
        left.push(addString);
        break;
      default:
        throw new Error("Exhaustive Checked, Wrong Order");
    }
  });

  console.log(left.concat(right.reverse()).join(""));
  process.exit();
});
