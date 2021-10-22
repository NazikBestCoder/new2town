const searchButtonEl = document.getElementById('search-btn');
const activitySearchBarEl = document.getElementById('activity-search-bar');
const resultAreaEl = document.getElementById('results-area');

async function generateResultCards (){
        let gottenUsers;
        const chosenAct = activitySearchBarEl.options[activitySearchBarEl.selectedIndex].value;
        const response = await fetch(`/search/${chosenAct}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            const res = await response.json();
            // console.log(response);
            console.log(res);
            console.log(res[0]["user-activities"][0]);
            gottenUsers = res
        } else {
          alert('Failed to search.');
        };

        let cardsHtml = ``;

        for (let i = 0; i < gottenUsers.length; i++){
           cardsHtml += `</div>
          <a href="/profile/${gottenUsers[i].id}"> <div class="card border-black border-2 rounded-lg inline-block w-52 h-64 mx-5">
       <div class="container">
           <h4><b>${gottenUsers[i].username}</b></h4>
           <p>Interests: film, cooking, politics</p>
       </div> </a>
       </div>`
        }

        resultAreaEl.innerHTML = cardsHtml
};

searchButtonEl.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    generateResultCards();
})