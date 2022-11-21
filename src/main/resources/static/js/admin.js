let barber_table = document.createElement("table");
let body = document.querySelector("body");

async function display_data() {
    let response = await fetch('http://localhost:5000/bookings/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    let appointment_data =  await response.json();
    console.log(appointment_data);

        barber_table.innerHTML = `
  <tr>
    <th>ID</th>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Date</th>
    <th>Barber</th>
    <th>Status</th>
    <th>Action</th>
  </tr>`;

 Object.values(appointment_data).forEach(e => {
     let barber_data = document.createElement("tr");
     barber_data.innerHTML =
         `
         <td>${e.id}</td>
         <td>${e.firstName}</td>
         <td>${e.lastName}</td>
         <td>${e.date}</td>
         <td>${e.barber}</td>
         <td style="font-weight: bold">${e.pending}</td>
         <td style="display: flex; flex-direction: column; gap: 1rem"><button id="accept-button">ACCEPT</button>
         <button id="decline-button">DECLINE</button>
         <button id="clear-button">CLEAR</button></td`;

    barber_table.appendChild(barber_data);
 });

    body.insertAdjacentElement("afterbegin", barber_table);
}
display_data();

window.onload=function() {
    setTimeout(e => {
        let accept_btn = document.querySelectorAll("#accept-button");
        let decline_btn = document.querySelectorAll("#decline-button");
        let clear_btn = document.querySelectorAll("#clear-button");

        accept_btn.forEach(e => {
            e.addEventListener("click", e => {
                console.log(e.path[2].children[0].innerHTML);
                const update_data = { 'pending':"accepted" };

                fetch('http://localhost:5000/bookings/accept/'+Number(e.path[2].children[0].innerHTML), {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(update_data),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
                setTimeout(e => {
                    document.location.reload();
                }, 500)
            });
        });

        decline_btn.forEach(e => {
            e.addEventListener("click", e => {
                console.log(e.path[2].children[0].innerHTML);
                const update_data = { 'pending':"declined" };

                fetch('http://localhost:5000/bookings/decline/'+Number(e.path[2].children[0].innerHTML), {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(update_data),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
                setTimeout(e => {
                    document.location.reload();
                }, 500)

            });
        });

        clear_btn.forEach(e => {
            e.addEventListener("click", e => {
                console.log(e.path[2].children[0].innerHTML);
                console.log(e.path[2].children[0].innerHTML);
                const clear_data = { 'status':"deleted" };

                fetch('http://localhost:5000/bookings/delete/'+Number(e.path[2].children[0].innerHTML), {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(clear_data),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
                setTimeout(e => {
                    document.location.reload();
                }, 500)
            });
        });
    }, 500);
}