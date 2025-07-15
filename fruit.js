function checkFruit(){
  const input = document.getElementById("fruit").value.toLowerCase();
  const fruits = ["mango", "orange", "apple", "banana"];
  const found = fruits.includes(input);
  
  document.getElementById("output").innerText = found? `✅${input} is available` :`❌${input} is not in the list` ;
}