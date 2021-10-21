const searchButtonEl = document.getElementById('search-btn');
const activitySearchBarEl = document.getElementById('activity-search-bar');
const test = document.getElementById('test');

async function generateResultCards (){
        const chosenAct = activitySearchBarEl.options[activitySearchBarEl.selectedIndex].value;
        const response = await fetch(`/search/${chosenAct}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            const res = await response.json();
            console.log(response);
            console.log(res);
        } else {
          alert('Failed to search.');
        }
      
};

searchButtonEl.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    generateResultCards();
})