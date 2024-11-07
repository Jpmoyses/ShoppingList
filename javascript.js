const btn = document.getElementById("mainBtn");
const input = document.getElementById("item");
const list = document.getElementById("list");
let value;

// capitalizes only the first letter of the phrase
function capitalizePhrase(value){
    value = value.toLowerCase();
    return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

btn.addEventListener("click", () => {
    // creating the elements
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("btn", "altBtn");

    // adding value to elements and adding children
    value = input.value;
    if (value == null || value == ''){
        return;
    }
    value = capitalizePhrase(value);
    input.value = '';
    span.innerText = value;
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    
    // delete button
    deleteButton.addEventListener("click", () =>{
        listItem.remove();
    });

    // returns the focus to the input box
    input.focus();
})