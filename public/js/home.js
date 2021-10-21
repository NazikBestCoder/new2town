const searchButtonEl = document.getElementById('search-btn');

function generateResultCards (){
console.log("Hey there!");
};

searchButtonEl.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    generateResultCards();
})