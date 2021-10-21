const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    return completionCallback(sum)
  }
  
  if (numsLeft > 0) {
    rl.question("Please enter a number: ", answer => {
      let num = parseInt(answer)
      sum += num
      console.log(sum)
      let newNumsLeft = numsLeft - 1
      return addNumbers(sum, newNumsLeft, completionCallback)
      rl.close()
    })
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));