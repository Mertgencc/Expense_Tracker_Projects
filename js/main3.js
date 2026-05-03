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

function renderPrice(){
  const list = document.getElementById("priceList");
  list.innerHTML = "";

  pricing.forEach(function(value){
    const li = document.createElement("li");
    li.textContent = value;

    const btn = document.createElement("button");
    btn.textContent = "SİL";

    btn.onclick = function(){
      pricing = pricing.filter((p) => p !== value);
      localStorage.setItem("pricing", JSON.stringify(pricing));
      renderPrice();
    };

    li.appendChild(btn);
    list.appendChild(li);
  })
}