const addItems = document.querySelector(".add-items");
const plateList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function handleAddItems (e) {
    e.preventDefault();
    const item = addItems[0].value;
    items.push(item);
    addItemList(items, plateList);
    localStorage.setItem("items", JSON.stringify(items));
}

function addItemList(items = [], itemlist) {
    itemlist.innerHTML = items.map((item, index)  => {
        return `<li>${index + 1}. ${item}</li>`;
    }).join("");
}
addItems.addEventListener("submit", handleAddItems);
addItemList(items, plateList);