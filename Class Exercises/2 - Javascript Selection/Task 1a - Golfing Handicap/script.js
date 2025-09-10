// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const checkButton = document.getElementById('checkButton');
    
    // Add click event listener to the button
    checkButton.addEventListener('click', calculateLeague);
});

// Function to calculate which league the player belongs to
function calculateLeague() {
   
let handicap = parseFloat(document.getElementById('handicap').value);
    
   let result = parseInt(handicap)
  
 if  (result <= 13) {
    document.getElementById('result').textContent = `league 1 player: ${result}`; }
  else {
    document.getElementById('result').textContent = `league 2 player: ${result}`; }
  }
