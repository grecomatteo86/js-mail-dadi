
var arrayMails = ['alessio.vietri@boolean.com','clelia.fradella@boolean.com','samuele.madrigali@boolean.com','matteo.greco@boolean.com'];
console.log(arrayMails);
var getUserMail = prompt('Please, write your email');
var access = 0;
console.log('User\'s email is ' + getUserMail);
var userMailValidation = ValidateEmail(getUserMail);
for ( var i = 0 ; i < arrayMails.length; i++ ){
  if (getUserMail == arrayMails[i]){
    console.log('user\'s email is in list');
    access = 1;
  }
}
if (access == 1) {
  alert('You are authorized');
} else {
  alert('Access denied. Sorry, you are not authorized');
}
function ValidateEmail(inputText) {
  if(inputText.includes('@') && inputText.includes('.com')) {
    alert("Valid email address!");
    return true;
  } else {
  alert("You have entered an invalid email address!");
  return false;
  }
}
