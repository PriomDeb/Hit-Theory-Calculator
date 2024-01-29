document.addEventListener("DOMContentLoaded", function () {
  // This function will be called when the HTML document is fully loaded

  // Your existing code for calculateHit and updateTableCells
  function calculateHit() {
    // Get user input
    const moonInput = document.getElementById("moonInput");
    const saturnInput = document.getElementById("saturnInput");
    const marsInput = document.getElementById("marsInput");
    const venusInput = document.getElementById("venusInput");

    const moonValue = parseInput(moonInput.value) || 0;
    const saturnValue = parseInput(saturnInput.value) || 0;
    const marsValue = parseInput(marsInput.value) || 0;
    const venusValue = parseInput(venusInput.value) || 0;

    // Update table cells with calculated values
    updateTableCells([moonValue, saturnValue, marsValue, venusValue]);
  }

  function updateTableCells(planetInput) {
    const planetNames = ["Moon", "Saturn", "Mars", "Venus"];

    // Update table cells using nested loops
    for (let i = 0; i < planetNames.length; i++) {
      for (let j = 0; j < planetNames.length; j++) {
        const cellId = `${planetNames[i]}To${planetNames[j]}`;
        const cellElement = document.getElementById(cellId);

        // Calculate row value - column value
        const result = planetInput[i] - planetInput[j];

        // Update the cell with the correct calculation
        cellElement.textContent = result.toFixed(2);

        // Apply dynamic color based on conditions
        if (
          (Math.abs(result) >= 27 && Math.abs(result) <= 33) ||
          (Math.abs(result) >= 55 && Math.abs(result) <= 65) ||
          (Math.abs(result) >= 112 && Math.abs(result) <= 128)
        ) {
          cellElement.style.backgroundColor = "green";
        } else if (
          (Math.abs(result) >= 42 && Math.abs(result) <= 48) ||
          (Math.abs(result) >= 85 && Math.abs(result) <= 95) ||
          (Math.abs(result) >= 172 && Math.abs(result) <= 188)
        ) {
          cellElement.style.backgroundColor = "red";
        } else {
          // Reset background color for other cases
          cellElement.style.backgroundColor = "";
        }
      }
    }
  }

  // Ensure calculateHit is accessible in the global scope for the onclick attribute
  window.calculateHit = calculateHit;

  // Listen for input changes and recalculate the hit table
  const inputElements = document.querySelectorAll(
    '.container input[type="text"]'
  );
  inputElements.forEach((input) => {
    input.addEventListener("input", calculateHit);
  });

  // Function to parse expressions like "10 + value" or "10 - value"
  function parseInput(input) {
    const match = input.match(/^([+\-]?\d+)\s*([+\-])?\s*(\d+)?$/);
    if (match) {
      const constant = parseFloat(match[1]) || 0;
      const operation = match[2] || "+";
      const value = parseFloat(match[3]) || 0;

      return operation === "+" ? constant + value : constant - value;
    }
    return null;
  }
});
