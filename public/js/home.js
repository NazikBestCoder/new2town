const searchButtonEl = document.getElementById('search-btn');
const activitySearchBarEl = document.getElementById('activity-search-bar');
const resultAreaEl = document.getElementById('results-area');

async function addFriend(id) {
  const addFriendBtn = await document.getElementsByClassName(`friend-btn`);
  console.log(addFriendBtn.length);
  for (btn of addFriendBtn) {
    console.log(btn.id);
    if (btn.id === `friend-btn-${id}`){
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      console.log('Made it here!');

      // const friend_id = friend.id;
      const response = await fetch(`/friend/${id}`, {
        method: 'POST',
        // body: JSON.stringify({ friend_id }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const res = await response.json();
        console.log(res);
      } else {
        alert("You're already friends.");
      }
    });
  }}
}

async function generateResultCards() {
  let gottenUsers;
  const chosenAct =
    activitySearchBarEl.options[activitySearchBarEl.selectedIndex].value;
  // console.log(chosenAct)
  const response = await fetch(`/search/${chosenAct}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    const res = await response.json();
    // console.log(res);
    gottenUsers = res;
  } else {
    alert('Failed to search.');
  }

  let cardsHtml = ``;

  if (!gottenUsers.length) {
    cardsHtml += `<div><p>No Users Found for This Activity.</p></div>`;
  } else {
    for (let i = 0; i < gottenUsers.length; i++) {
      let commonInterestsStr = '<ol>';
      gottenUsers[i].commonInterests.forEach((interest) => {
        commonInterestsStr += `<li>${interest}</li>`;
      });
      commonInterestsStr += `</ol>`;
      cardsHtml += `</div>
         <div class="card top-0 border-black border-2 rounded-lg inline-block w-52 h-64 mx-5">
       <div class="container">
       <a href="/profile/${gottenUsers[i].id}"><h4><b>${gottenUsers[i].username}</b></h4></a>
       <img style="width: 100px" src="${gottenUsers[i].photo_url}"
           <p>Common Interests: ${commonInterestsStr}</p>
           <button id="friend-btn-${gottenUsers[i].id}" class="friend-btn hover:border-blue-200 hover:bg-gray-50 rounded w-40 h-10 border-black border-2">Add Friend!</button>
       </div> 
       </div>`;

      addFriend(gottenUsers[i].id);
    }
  }

  resultAreaEl.innerHTML = cardsHtml;
}

searchButtonEl.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  generateResultCards();
});
