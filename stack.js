var stacks = [];

var count = 0;

for (let i = 0; i < stacks.length; i++) {
  if (stacks[i] > stacks[i - 1]) {
    ++count;
  } else {
    count = 0;
    count++;
  }
}

console.log(count);
