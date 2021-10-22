async function editFormHandler(event) {
  event.preventDefault();
  const name = document.querySelector('#full-name').value.trim();
  const activity= document.querySelector('#activities').value.trim();
  const interests = document.querySelector('#interests').value.trim();
  // const location = document.querySelector('#location').value.trim();
  
 

  // The Controller will handle this 'put' request.
// ACTIVITY
  const response = await fetch(`/api/activity/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      activity_name,
      description
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // What happens if the response is ok?
  // If the response is ok, that means that the dish was updated successfully. 
  if (response.ok) {
    document.location.replace(`/activity/${id}`);
  } else {
    alert('Failed to edit activity');
  }
}
// INTERESTS
const response = await fetch(`/api/interest/${id}`, {
  method: 'PUT',
  body: JSON.stringify({
    interest_name,
    description
  }),
  headers: {
    'Content-Type': 'application/json',
  },
});
 
if (response.ok) {
  document.location.replace(`/interest/${id}`);
} else {
  alert('Failed to edit interest');
}


// WILL BE LOCATION OR STATUS< BUT FOR NOW WORKING ON BASICS
// if (response.ok) {
//   document.location.replace(`/activity/${id}`);
// } else {
//   alert('Failed to edit activity');
// }


document.querySelector('.edit-profile-form').addEventListener('submit', editFormHandler);
