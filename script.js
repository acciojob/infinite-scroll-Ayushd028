document.addEventListener("DOMContentLoaded", function () {
    const list = document.getElementById("infi-list");

    function addListItems(count) {
        for (let i = 0; i < count; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = "Item " + (list.children.length + 1);
            list.appendChild(listItem);
        }
    }

    addListItems(10);

    window.addEventListener("scroll", function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            addListItems(2); // Add 2 more items
        }
    });
});
