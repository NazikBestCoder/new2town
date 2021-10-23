const searchButtonEl = document.getElementById('search-btn');
const activitySearchBarEl = document.getElementById('activity-search-bar');
const resultAreaEl = document.getElementById('results-area');

async function generateResultCards() {
    let gottenUsers;
    const chosenAct = activitySearchBarEl.options[activitySearchBarEl.selectedIndex].value;
    console.log(chosenAct)
    const response = await fetch(`/search/${chosenAct}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        const res = await response.json();
        console.log(res);
        gottenUsers = res
    } else {
        alert('Failed to search.');
    };

    let cardsHtml = ``;

    if (!gottenUsers.length) {
        cardsHtml += `<div><p>No Users Found for This Activity.</p></div>`
    } else {
        for (let i = 0; i < gottenUsers.length; i++) {
            let commonInterestsStr = "<ol>";
            gottenUsers[i].commonInterests.forEach(interest => {
                commonInterestsStr += `<li>${interest}</li>`
            });
            commonInterestsStr += `</ol>`
                cardsHtml += `</div>
          <a href="/profile/${gottenUsers[i].id}"> <div class="card top-0 border-black border-2 rounded-lg inline-block w-52 h-64 mx-5">
       <div class="container">
           <h4><b>${gottenUsers[i].username}</b></h4>
           <p>Common Interests: ${commonInterestsStr}</p>
       </div> </a>
       </div>`
        }
    }

    resultAreaEl.innerHTML = cardsHtml
};

searchButtonEl.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    generateResultCards();
})