process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
  let line = chunk.toString().split(" ");
  let a = Number.parseInt(line[0]);
  let b = Number.parseInt(line[1]);
  let c = Number.parseInt(line[2]);
  if (a < b && b < c) console.log(a + ' ' + b + ' ' + c);
  else if (a <= c && c <= b) console.log(a + ' ' + c + ' ' + b);
  else if (b <= a && a <= c) console.log(b + ' ' + a + ' ' + c);
  else if (b <= c && c <= a) console.log(b + ' ' + c + ' ' + a);
  else if (c <= a && a <= b) console.log(c + ' ' + a + ' ' + b);
  else if (c <= b && b <= a) console.log(c + ' ' + b + ' ' + a);
});