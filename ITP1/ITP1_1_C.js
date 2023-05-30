process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
  let line = chunk.toString().split(" ");
  let a = Number.parseInt(line[0]);
  let b = Number.parseInt(line[1]);
  console.log(a * b + " " + (a * 2 + b * 2));
});