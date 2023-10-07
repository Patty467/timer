//set up beep function, log user input and convert to numbers
const beep = () => console.log('beep');
const input = process.argv.slice(2);
let times = input.map(Number);

//check that each number is a number, and is greater than 0
times.forEach(num => {
  if (isNaN(num) || num < 0) {
    console.log("Please provide a valid number of seconds");
    process.exit();
  } else { //run the timer
    setTimeout(beep, num * 1000);
  }
});
