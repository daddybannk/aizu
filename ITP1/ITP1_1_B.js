process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
  let line = chunk.toString();
  let x = parseInt(line);
  console.log(x * x * x);
});