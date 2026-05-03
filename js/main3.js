let pricing = [];

window.onload = function(){
  const data = localStorage.getItem("pricing");

  if (data){
    pricing = JSON.parse(data);
  }

  renderPrice();
}

function addPrice(){
  const input = document.getElementById("money");
  const value = input.value;

  if (value === "") return;

  pricing.push(value);
  localStorage.setItem("pricing", JSON.stringify(pricing));

  renderPrice();

  input.value = "";

}

