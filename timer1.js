const inputArgs = process.argv.slice(2);
// Take off directories from process.argv and sort them numerically
//console.log(inputArgs);
inputArgs.sort((a, b) => a - b);

inputArgs.forEach((seconds) => {
  if (seconds <= 0 || !seconds || isNaN(seconds)) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('.');
  }, seconds * 1000);
})
// multiply seconds variable by 1000 to make the inputArgs into seconds and not unreadable ms
// beep command did not work with my OS