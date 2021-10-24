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
        commonInterestsStr += `<li class="card-interests text-lg">${interest}</li>`;
      });
      commonInterestsStr += `</ol>`;
      cardsHtml += `
         <div class="card top-0 border-black border-2 rounded-lg inline-block h-auto max-h-96 m-5">
       <div class="container h-full relative flex justify-center items-center flex-col">
       <a href="/profile/other/${gottenUsers[i].id}"><h4><b class="text-3xl underline">${gottenUsers[i].username}</b></h4></a>
       <br>
       <img style="width: 100px" class="card-pic" src="${gottenUsers[i].photo_url}">
       <br>
           <p class="card-interests text-lg">Common Interests: ${commonInterestsStr}</p>
           <br>
           <br>
           <button id="friend-btn-${gottenUsers[i].id}" class="friend-btn hover:border-blue-200 hover:bg-gray-50 rounded w-40 h-10 border-black border-2 absolute bottom-0">Add Friend!</button>
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
