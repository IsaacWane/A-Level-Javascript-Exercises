// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePay);
});

// Function to calculate the worker's pay
function calculatePay() {
    // TODO: Get the age and hours worked from the input fields
    let age = parseFloat(document.getElementById('age').value);
    let hours = parseFloat(document.getElementById('hours').value);
    // TODO: Set the hourly rate based on age (£4.85 for under 18, £6.35 for 18 and over)
    if  (age < 18 )
     result = 4.85
    document.getElementById('result').textContent = `you have earnt: ${result }`;
    else
    if (age => 18) 
     result = 6.35
    document.getElementById('result').textContent = `you have earnt: ${result }`;

    
    
    // TODO: Calculate total pay
    const ruesult * hours
    // TODO: Display the hours worked and total amount earned
    
      document.getElementById('hours').textContent = `you have worked: ${hours }hours`;
}
