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


const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const photo_url = "https://res.cloudinary.com/nazik/image/upload/v1635007175/pguvcqxflaaq340ahley.png"
  // const interests = document.querySelector('#interest-signup').value.trim();
  const location = document.querySelector('#location-signup').value.trim();

  if (username && email && password && location && photo_url) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, location, photo_url }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/signup');
      alert("Please verify your info")
    } else {
      alert(response.statusText,  "Please fill out the entire form!");
    }
  }
};




document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
  
