const input = document.querySelector("#input-box");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
    let value = input.value;

    if (!value == "") {
        let html = `<li>${value} <span>\u00d7</span></li>`;
        ul.insertAdjacentHTML("beforeend",html);
        input.value = "";
    }
    else{
        alert("You must write something")
    }
});

ul.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
        if (e.target.classList == ""){
            e.target.classList = "checked";
        }
        else {
            e.target.classList.remove("checked");
        }
        
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
    }
});