document.addEventListener("DOMContentLoaded", function () {
  // This function will be called when the HTML document is fully loaded

  // Your existing code for calculateHit and updateTableCells
  function calculateHit() {
    // Get user input
    const moonValue =
      parseFloat(document.getElementById("moonInput").value) || 0;
    const saturnValue =
      parseFloat(document.getElementById("saturnInput").value) || 0;
    const marsValue =
      parseFloat(document.getElementById("marsInput").value) || 0;
    const venusValue =
      parseFloat(document.getElementById("venusInput").value) || 0;

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
});
