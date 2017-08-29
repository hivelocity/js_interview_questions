/**
    What is the difference between there two expressions?
*/

for (var i = 0; i < 4; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
