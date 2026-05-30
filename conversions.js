
// Higher-order converter function
function createConverter(from, to) {
  const conversions = {
    "kg-lb": x => x * 2.20462,
    "lb-kg": x => x / 2.20462,
    "km-mi": x => x * 0.621371,
    "mi-km": x => x / 0.621371,
    "c-f": x => (x * 9/5) + 32,
    "f-c": x => (x - 32) * 5/9
  };

  const key = `${from}-${to}`;
  const convert = conversions[key];

  return (value) => {
    if (Array.isArray(value)) return value.map(v => convert(v));
    return convert(value);
  };
}

// Tab switching
function showTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.add("hidden"));
  document.getElementById(tab).classList.remove("hidden");
}

showTab("weight"); // default tab

// Weight conversion
function convertWeight() {
  const single = document.getElementById("weightSingle").value;
  const array = document.getElementById("weightArray").value;
  const direction = document.getElementById("weightDirection").value;

  const [from, to] = direction.split("-");
  const converter = createConverter(from, to);

  let result = "";

  if (single) result += "Result: " + converter(Number(single)) + "<br>";

  if (array) {
    const arr = array.split(",").map(Number);
    result += "Results: " + converter(arr).join(", ");
  }

  if (single && array) {
  document.getElementById("weightResult").textContent =
    "Please fill only ONE input: single OR batch.";
  return;
}



  document.getElementById("weightResult").innerHTML = result;
}

// Distance conversion
function convertDistance() {
  const single = document.getElementById("distanceSingle").value;
  const array = document.getElementById("distanceArray").value;
  const direction = document.getElementById("distanceDirection").value;

  const [from, to] = direction.split("-");
  const converter = createConverter(from, to);

  let result = "";

  if (single) result += "Result: " + converter(Number(single)) + "<br>";

  if (array) {
    const arr = array.split(",").map(Number);
    result += "Results: " + converter(arr).join(", ");
  }

  if (single && array) {
  document.getElementById("distanceResult").textContent =
    "Please fill only ONE input: single OR batch.";
  return;
}


  document.getElementById("distanceResult").innerHTML = result;
}

// Temperature conversion
function convertTemperature() {
  const single = document.getElementById("tempSingle").value;
  const array = document.getElementById("tempArray").value;
  const direction = document.getElementById("tempDirection").value;

  const [from, to] = direction.split("-");
  const converter = createConverter(from, to);

  let result = "";

  if (single) result += "Result: " + converter(Number(single)) + "<br>";

  if (array) {
    const arr = array.split(",").map(Number);
    result += "Results: " + converter(arr).join(", ");
  }


  if (single && array) {
  document.getElementById("tempResult").textContent =
    "Please fill only ONE input: single OR batch.";
  return;
}

  document.getElementById("tempResult").innerHTML = result;
}