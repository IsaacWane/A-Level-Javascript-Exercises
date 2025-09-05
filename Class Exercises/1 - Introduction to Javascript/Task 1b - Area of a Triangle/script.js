// Add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener('click', calculateArea);

function calculateArea() {
    let Base = parseFloat(document.getElementById('base').value);
 let Height = parseFloat(document.getElementById('height').value);
 if (isNaN(Base) || isNaN(Height)) {
        document.getElementById('area').textContent = "Please enter valid numbers!";
    } else {
        const area = (Base * Height) / 2;
        document.getElementById('area').textContent = `The area is: ${area}`;
    }
   
}
par
