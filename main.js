let acc = document.querySelectorAll(".accordion-btn");

for(let i = 0; i< acc.length; i++){
    acc[i].addEventListener("click", handleClick);
}
function handleClick() {
    this.classList.toggle("acc-active");
    let panel = this.nextElementSibling;
    if(panel.style.maxHeight){
        panel.style.maxHeight = null;
        panel.style.visibility = "hidden";
    }
    else{
        panel.style.maxHeight = panel.scrollHeight + "px"
        panel.style.visibility = "visible";
    }
}