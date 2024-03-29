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
    const house7Input = document.getElementById("house7Input");
    const house8Input = document.getElementById("house8Input");
    const house9Input = document.getElementById("house9Input");
    const house10Input = document.getElementById("house10Input");
    const house11Input = document.getElementById("house11Input");
    const house12Input = document.getElementById("house12Input");

    const house1Value = parseInput(house1Input.value) || 0;
    const house2Value = parseInput(house2Input.value) || 0;
    const house3Value = parseInput(house3Input.value) || 0;
    const house4Value = parseInput(house4Input.value) || 0;
    const house5Value = parseInput(house5Input.value) || 0;
    const house6Value = parseInput(house6Input.value) || 0;
    const house7Value = parseInput(house7Input.value) || 0;
    const house8Value = parseInput(house8Input.value) || 0;
    const house9Value = parseInput(house9Input.value) || 0;
    const house10Value = parseInput(house10Input.value) || 0;
    const house11Value = parseInput(house11Input.value) || 0;
    const house12Value = parseInput(house12Input.value) || 0;

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
      [
        jupiterValue,
        saturnValue,
        mercuryValue,
        ketuValue,
        venusValue,
        sunValue,
        moonValue,
        marsValue,
        rahuValue,
      ],
      [
        house1Value,
        house2Value,
        house3Value,
        house4Value,
        house5Value,
        house6Value,
        house7Value,
        house8Value,
        house9Value,
        house10Value,
        house11Value,
        house12Value,
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
      for (let j = i; j < planetNames.length; j++) {
        const cellId = `${planetNames[i]}To${planetNames[j]}`;
        const cellElement = document.getElementById(cellId);

        // Calculate row value - column value
        var result = planetInput[i] - planetInput[j];

        if (result < -200) {
          result = 360 - -1 * result;
        }

        if (Math.abs(result) > 200) {
          result = 360 - result;
        }

        // Update the cell with the correct calculation
        cellElement.textContent = result.toFixed(2);
        applyColorAnimation(cellElement, result);
      }
    }
  }

  function applyColorAnimation(element, result) {
    if (
      (Math.abs(result) >= 27 && Math.abs(result) <= 33) ||
      (Math.abs(result) >= 55 && Math.abs(result) <= 65) ||
      (Math.abs(result) >= 112 && Math.abs(result) <= 128)
    ) {
      // Green color for the specified conditions
      element.style.backgroundColor = "green";
      // Apply circular shadow grow animation for green
      element.style.animation = "growShadowGreen 6s infinite";
    } else if (
      (Math.abs(result) >= 42 && Math.abs(result) <= 48) ||
      (Math.abs(result) >= 85 && Math.abs(result) <= 95) ||
      (Math.abs(result) >= 172 && Math.abs(result) <= 188)
    ) {
      // Red color for the specified conditions
      element.style.backgroundColor = "red";
      // Apply circular shadow grow animation for red
      element.style.animation = "growShadowRed 6s infinite";
    } else {
      // Reset background color and remove animation for other cases
      element.style.backgroundColor = "";
      element.style.animation = "";
    }
  }

  function updateHouseTableCells(planetInput, houseInput) {
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
    const houseNames = [
      "House1",
      "House2",
      "House3",
      "House4",
      "House5",
      "House6",
      "House7",
      "House8",
      "House9",
      "House10",
      "House11",
      "House12",
    ];

    // Update table cells using nested loops
    for (let i = 0; i < houseNames.length; i++) {
      for (let j = 0; j < planetNames.length; j++) {
        const cellId = `${houseNames[i]}To${planetNames[j]}`;
        const cellElement = document.getElementById(cellId);

        // Calculate row value - column value
        var result = houseInput[i] - planetInput[j];

        if (result < -200) {
          result = 360 - -1 * result;
        }

        if (Math.abs(result) > 200) {
          result = 360 - result;
        }

        // Update the cell with the correct calculation
        cellElement.textContent = result.toFixed(2);
        applyColorAnimation(cellElement, result);
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
