const shop = document.getElementById("shop");
shop.addEventListener('click', ()=>{
    const dropdown = document.getElementById("display-later");
    const condition = dropdown.hasAttribute("class");
    if(condition){
        dropdown.removeAttribute("class");
    }
    else{
        dropdown.classList.add("display-now");
    }
})