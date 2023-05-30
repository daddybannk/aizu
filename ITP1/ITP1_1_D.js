process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (chunk) {
  let line = chunk.toString();
  let s = parseInt(line);
  console.log(Math.floor(s/3600) + ':' + Math.floor((s%3600)/60) + ':' + (s%60));
});