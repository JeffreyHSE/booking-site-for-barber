let barber_table = document.createElement("table");

let body = document.querySelector("body");

async function make_async() {
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
         <td style="display: flex; flex-direction: column; gap: 1rem"><button>ACCEPT</button>
         <button>DECLINE</button></td`;

    barber_table.appendChild(barber_data);
 });

    body.insertAdjacentElement("afterbegin", barber_table);
}
make_async();