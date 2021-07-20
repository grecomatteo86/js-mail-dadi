var getRandomUserNumber = Math.floor(Math.random() * 6) + 1;
console.log('The user\'s number is ' + getRandomUserNumber);
var getRandomComputerNumber = Math.floor(Math.random() * 6) + 1;
console.log('The computer\'s number is ' +getRandomComputerNumber);
if (getRandomUserNumber > getRandomComputerNumber) {
  alert('user wins');
} else if (getRandomUserNumber < getRandomComputerNumber) {
  alert('computer wins');
} else {
  alert('draw');
}
