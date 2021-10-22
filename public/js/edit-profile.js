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


const addInterest = async (event) => {
    event.preventDefault();

    const interest = document.querySelector('#interests').value.trim();

    if (interest){
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