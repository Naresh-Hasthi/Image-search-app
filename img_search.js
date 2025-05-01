const accessKey = "5HsKlOPhdX3X_JLGT1qhS6DWp2ra2Y1qdcXhuevtnzU"; // Replace with actual key

const formEl = document.getElementById("search-form");
const inputEl = document.getElementById("search-box");
const searchResults = document.getElementById("search-result");
const showMore = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = inputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResults.innerHTML = "";
  }

  data.results.forEach(result => {
    const img = document.createElement("img");
    img.src = result.urls.small;
    searchResults.appendChild(img);
  });

  showMore.style.display = "block";
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMore.addEventListener("click", () => {
  page++;
  searchImages();
});
