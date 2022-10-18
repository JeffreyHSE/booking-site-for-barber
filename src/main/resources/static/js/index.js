let submit = document.getElementById("booking_shop_submit");

submit.addEventListener("click", e => {
    e.preventDefault();

    let fName = document.getElementsByClassName("inputFirstName")[0].value;
    let lName = document.getElementsByClassName('inputLastName')[0].value;
    let date = document.getElementsByClassName('inputDate')[0].value;
    let barber = document.getElementsByClassName('inputBarberChoice')[0].value;


    if (fName.length === 0 || lName.length === 0 | date.length === 0 || barber.length === 0 ) {
        window.alert("You missed something to fill in.")
        return;
    }

    const data = { 'firstName':fName, 'lastName':lName, 'date':date, 'barber':barber };

    fetch('http://localhost:5000/bookings/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    console.log(fName);
    console.log(lName);
    console.log(date);
    console.log(barber);
});