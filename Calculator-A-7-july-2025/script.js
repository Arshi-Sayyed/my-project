function addTextToScreen(value) {
   const inputDiv = document.getElementById("input-div");
   inputDiv.innerText += value;
}

function clearAll() {
   document.getElementById("input-div").innerText = "";
   document.getElementById("output-div").innerText = "0";
}

function removeValue() {
   const inputDiv = document.getElementById("input-div");
   inputDiv.innerText = inputDiv.innerText.slice(0, -1);
}

function answer() {
   const inputDiv = document.getElementById("input-div");
   const outputDiv = document.getElementById("output-div");
   try {
      let result = eval(inputDiv.innerText);
      outputDiv.innerText = result;
   } catch {
      outputDiv.innerText = "Error";
   }
}
