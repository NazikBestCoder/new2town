const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#full-name').value.trim();
    const activity= document.querySelector('#activities').value.trim();
    const interests = document.querySelector('#interests').value.trim();
    const location = document.querySelector('#location').value.trim();
  
    if (name && activity && interests && location) {
      const response = await fetch(`/api/actvity`, {
        method: 'POST',
        body: JSON.stringify({ name, activity, interests, location }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
  };
  



// DONT KNOW HOW TO CONNECT ACTIVITIES< INTERESTS<ETC TO EDIT PROFILE
// const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete profile changes');
//       }
//     }
//   };


// working on myprofile.js in public, added this to have sth on file (nazik)
document
  .querySelector('.edit-profile')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.edit-profile-list')
  .addEventListener('click', delButtonHandler);
