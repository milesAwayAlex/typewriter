const sentence = 'hello there from lighthouse labs';

const typewriter = (line, timeout) => {
  if (line) {
    setTimeout(() => {
      typewriter(line.slice(1), timeout);
      process.stdout.write(line[0]);
    }, timeout);
  } else {
    setTimeout(() => {
      process.stdout.write('\n');
    }, timeout * 7);
  }
};

typewriter(process.argv[2] || sentence, 50);
