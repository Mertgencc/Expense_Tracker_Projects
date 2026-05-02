let pricing = [];

window.onload = function(){
    const data = localStorage.getItem("pricing");

    if (data){
        pricing = JSON.parse(data);
        renderPrice();
    }
}

function renderPrice(){

}