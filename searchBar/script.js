const pages = {
    "Home": "../index.html",
    "About Us": "about.html",
    "Contact": "contact.html",
};

document.getElementById("searchInput").addEventListener("input", function() {
    let searchResults = document.getElementById("searchResults");
    let query = this.value.toLowerCase();
    searchResults.innerHTML = "";

    for (let page in pages) {
        if (page.toLowerCase().includes(query)) {
            let listItem = document.createElement("li");
            listItem.textContent = page;
            listItem.onclick = function() {
                window.location.href = pages[page];
        };
        searchResults.appendChild(listItem);
        }
    }
});