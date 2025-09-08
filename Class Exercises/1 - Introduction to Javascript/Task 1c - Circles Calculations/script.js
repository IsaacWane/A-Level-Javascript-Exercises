// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateCircle);

function calculateCircle() {
    
    let radius = parseFloat(document.getElementById('radius').value);
    
   
        const circumference = (2 * Math.PI * radius);
        const area = (Math.PI * radius * radius);
        document.getElementById('area').textContent = `The area is: ${area}`;
        document.getElementById('circumference').textContent = `The circumference is: ${circumference}`;
    }

