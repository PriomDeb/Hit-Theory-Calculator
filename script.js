document.addEventListener("DOMContentLoaded", function () {
  // This function will be called when the HTML document is fully loaded

  // Your existing code for calculateHit and updateTableCells
  function calculateHit() {
    // Get user input
    const planetInput = document
      .getElementById("planetInput")
      .value.split(",")
      .map(parseFloat);

    // Validate input
    if (planetInput.length !== 4 || planetInput.some(isNaN)) {
      alert("Please enter valid values for Moon, Saturn, Mars, and Venus.");
      return;
    }

    // Update table cells with calculated values
    updateTableCells(planetInput);
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
      }
    }
  }

  // Ensure calculateHit is accessible in the global scope for the onclick attribute
  window.calculateHit = calculateHit;
});
