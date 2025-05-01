
const accessKey = "5HsKlOPhdX3X_JLGT1qhS6DWp2ra2Y1qdcXhuevtnzU";

const formEl = document.getElementById("search-form");
const inputEl = document.getElementById("search-box");
const searchResults = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if (page === 1) {
        searchResults.innerHTML = "";
    }

    const results = data.results;
    results.forEach(result => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResults.appendChild(imageLink);
    });

    showMoreBtn.style.display = "block";
}

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});
