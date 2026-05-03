let pricing = [];

window.onload = function(){
  const data = localStorage.getItem("pricing");

  if (data){
    pricing = JSON.parse(data);
  }

  renderPrice();
}

function generateID(){
  return Date.now();
}

function addPrice(){
  const input = document.getElementById("money");
  const value = input.value;

  if (value === "") return;

  const hesap = Number(value);

  const newItem = {
    id: generateID,
    hesap: hesap,
  };

  pricing.push(newItem);
  localStorage.setItem("pricing", JSON.stringify(pricing));

  renderPrice();

  input.value = "";

}

function renderPrice(){
  const list = document.getElementById("priceList");
  list.innerHTML = "";

  pricing.forEach(function(item){
    const li = document.createElement("li");
    li.textContent = item.hesap;

    const btn = document.createElement("button");
    btn.textContent = "SİL";

    btn.onclick = function(){
      pricing = pricing.filter((p) => p.id !== item.id);
      localStorage.setItem("pricing", JSON.stringify(pricing));
      renderPrice();
    };

    li.appendChild(btn);
    list.appendChild(li);
  });

  const hesaplar = pricing.map(item => item.hesap);

  const toplam = hesaplar.reduce((acc, val) => acc + val , 0);

  document.getElementById("balance").textContent = toplam + " ₺";

}