// TODO: Write the function to generate the sequence
function generateSequence() {
    // Get input values
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const step = parseInt(document.getElementById('step').value);
    
    // Get output element
    const output = document.getElementById('sequenceOutput');
    
    // TODO: Validate inputs
    
    // Check if values are valid numbers
    if (isNaN(start) || isNaN(end) || isNaN(step)) {
        output.textContent = "Please enter valid numbers";
        return;
    }
    // Check if step is positive
    if (step <= 0) {
        output.textContent = "Step must be a positive number";
        return;
    }
    // Check if end is greater than start
    if (end <= start) {
        output.textContent = "End must be greater than start";
        return;
    }

    // Create array to store sequence
    let sequence = [];
    // Use for loop with step to generate sequence
    for (let i = start; i <= end; i += step) {
        sequence.push(i);
    }
    // Display the sequence
    output.textContent = sequence.join(' → ');
}

// Initialize the page
window.onload = function() {
    generateSequence();
};
