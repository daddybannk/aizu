process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
  let line = chunk.toString().split(" ");
  let a = Number.parseInt(line[0]);
  let b = Number.parseInt(line[1]);
  let c = Number.parseInt(line[2]);
  if (a < b && b < c) console.log('Yes');
  else console.log('No');
});