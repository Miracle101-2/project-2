function changeText() {
    const text = document.getElementById("text-to-change");
    text.textContent = "The text has been changed dynamically!";
}

function changeStyle() {
    const target = document.getElementById("style-target");
    target.style.backgroundColor = "white";
    target.style.padding = "10px";
    target.style.border = "2px solid #ffc107";
    target.style.hover ="green";
}

function addItem() {
    const ul = document.getElementById("item-list");
    const newItem = document.createElement("li");
    newItem.textContent = "New Item " + (ul.children.length + 1);
    ul.appendChild(newItem);
}

function removeItem() {
    const ul = document.getElementById("item-list");
    if (ul.children.length > 0) {
        ul.removeChild(ul.lastElementChild);
    }
}
