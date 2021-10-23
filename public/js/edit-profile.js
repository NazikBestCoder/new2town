const user_id = document.querySelector("#id-number").innerHTML;
const interestBtnEl = document.getElementById("interests-button");

const editLocationHandler = async (event) => {
    event.preventDefault();

    const location = document.querySelector('#location-update').value.trim();


    console.log(location)

    if (location) {
        const response = await fetch(`/profile/city/${user_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                location
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log(response)
        if (response.ok) {
            document.location.replace(`/profile/${user_id}`);
        } else {
            alert('Failed to edit activity');
        }
    }

}


document.querySelector('#location-button').addEventListener('click', editLocationHandler);

const editStatus = async (event) => {
    event.preventDefault();

    const status = document.querySelector('#status-update').value.trim();


    if (status) {
        const response = await fetch(`/profile/status/${user_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                status,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/profile/${user_id}`);
        } else {
            alert('Failed to edit activity');
        }
    }
}

document.querySelector('#status-button').addEventListener('click', editStatus);


const editPhoto = async (event) => {
    event.preventDefault();

    const photo_url = document.querySelector('#uploadedImage').getAttribute("src");


    if (photo_url) {
        const response = await fetch(`/profile/photo/`, {
            method: 'PUT',
            body: JSON.stringify({
                photo_url,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/profile/${user_id}`);
        } else {
            alert('Failed to edit activity');
        }
    }
}

document.querySelector('#photo-button').addEventListener('click', editPhoto);


const addInterest = async (event) => {
    event.preventDefault();

    const interest = document.querySelector('#interests').value.trim();

    if (interest) {
        const response = await fetch(`/profile/interest/${user_id}`, {
            method: 'POST',
            body: JSON.stringify({
                interest,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace(`/profile/${user_id}`);
        } else {
            alert('Failed to add interest');
        }
    }

}

interestBtnEl.addEventListener("click", addInterest)


// Activity
const activitySearchBarEl = document.getElementById('activity-profile-bar');

const addActivity = async (event) => {
    event.preventDefault();


    const activity_id = activitySearchBarEl.options[activitySearchBarEl.selectedIndex].value;

    console.log("hello", activity_id)

    if (activity_id) {
        const response = await fetch(`/profile/active/${user_id}`, {
            method: 'POST',
            body: JSON.stringify({
                activity_id,
            }),

            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/profile/${user_id}`);
        } else {
            alert('Failed to add interest');
        }
    }

}

document.querySelector('#search-act').addEventListener('click', addActivity);