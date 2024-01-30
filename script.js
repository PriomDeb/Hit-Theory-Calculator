document.addEventListener("DOMContentLoaded", function () {
  // This function will be called when the HTML document is fully loaded

  function calculateHit() {
    // Get user input
    const jupiterInput = document.getElementById("jupiterInput");
    const saturnInput = document.getElementById("saturnInput");
    const mercuryInput = document.getElementById("mercuryInput");
    const ketuInput = document.getElementById("ketuInput");
    const venusInput = document.getElementById("venusInput");
    const sunInput = document.getElementById("sunInput");
    const moonInput = document.getElementById("moonInput");
    const marsInput = document.getElementById("marsInput");
    const rahuInput = document.getElementById("rahuInput");

    const jupiterValue = parseInput(jupiterInput.value) || 0;
    const saturnValue = parseInput(saturnInput.value) || 0;
    const mercuryValue = parseInput(mercuryInput.value) || 0;
    const ketuValue = parseInput(ketuInput.value) || 0;
    const venusValue = parseInput(venusInput.value) || 0;
    const sunValue = parseInput(sunInput.value) || 0;
    const moonValue = parseInput(moonInput.value) || 0;
    const marsValue = parseInput(marsInput.value) || 0;
    const rahuValue = parseInput(rahuInput.value) || 0;

    const house1Input = document.getElementById("house1Input");
    const house2Input = document.getElementById("house2Input");
    const house3Input = document.getElementById("house3Input");
    const house4Input = document.getElementById("house4Input");
    const house5Input = document.getElementById("house5Input");
    const house6Input = document.getElementById("house6Input");

    const house1Value = parseInput(house1Input.value) || 0;
    const house2Value = parseInput(house2Input.value) || 0;
    const house3Value = parseInput(house3Input.value) || 0;
    const house4Value = parseInput(house4Input.value) || 0;
    const house5Value = parseInput(house5Input.value) || 0;
    const house6Value = parseInput(house6Input.value) || 0;

    console.log("House 1 Value:", house1Value);
    console.log("House 2 Value:", house2Value);
    console.log("House 3 Value:", house3Value);
    console.log("House 4 Value:", house4Value);
    console.log("House 5 Value:", house5Value);
    console.log("House 6 Value:", house6Value);

    // Update table cells with calculated values
    updateTableCells([
      jupiterValue,
      saturnValue,
      mercuryValue,
      ketuValue,
      venusValue,
      sunValue,
      moonValue,
      marsValue,
      rahuValue,
    ]);

    updateHouseTableCells(
      [moonValue, saturnValue, marsValue, venusValue],
      [
        house1Value,
        house2Value,
        house3Value,
        house4Value,
        house5Value,
        house6Value,
      ]
    );
  }

  function updateTableCells(planetInput) {
    const planetNames = [
      "Jupiter",
      "Saturn",
      "Mercury",
      "Ketu",
      "Venus",
      "Sun",
      "Moon",
      "Mars",
      "Rahu",
    ];

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

  function updateHouseTableCells(planetInput, houseInput) {
    const planetNames = ["Moon", "Saturn", "Mars", "Venus"];
    const houseNames = [
      "House1",
      "House2",
      "House3",
      "House4",
      "House5",
      "House6",
    ];

    // Update table cells using nested loops
    for (let i = 0; i < houseNames.length; i++) {
      for (let j = 0; j < planetNames.length; j++) {
        const cellId = `${houseNames[i]}To${planetNames[j]}`;
        const cellElement = document.getElementById(cellId);

        // Calculate row value - column value
        const result = houseInput[i] - planetInput[j];

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
    const match = input.match(/^([+\-]?[\d.]+)\s*([+\-])?\s*([\d.]+)?$/);
    if (match) {
      const constant = parseFloat(match[1]) || 0;
      const operation = match[2] || "+";
      const value = parseFloat(match[3]) || 0;

      return operation === "+" ? constant + value : constant - value;
    }
    return null;
  }
});
