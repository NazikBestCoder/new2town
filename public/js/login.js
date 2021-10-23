const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      console.log(response);
      alert('Failed to log in');
    }
  }
};

// const verifyFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (email && password) {
//     const response = await fetch('/api/users/verify', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       console.log(response);
//       alert('Failed to log in');
//     }
//   }
// };

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const photo_url = "https://res.cloudinary.com/nazik/image/upload/v1635007175/pguvcqxflaaq340ahley.png"
  const interests = document.querySelector('#interest-signup').value.trim();
  const location = document.querySelector('#location-signup').value.trim();

  if (username && email && password && photo_url) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, photo_url }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/signup');
      alert("Please log in with your newly created credentials")
    } else {
      alert(response.statusText);
    }
  }
};




document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
  
// document
//   .querySelector('.verify-form')
//   .addEventListener('submit', verifyFormHandler);