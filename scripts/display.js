function displayCardPets(){
    // creating cardPet HTML string
    let cards = ``;

    //travel the array
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        cards += 
            `<div class="pet-card my-2 mx-1 p-3">
                <h5 class="text-center">${pet.name}</h5>
                <p>Age: ${pet.age}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Service: ${pet.service}</p>
                <p>Owner: ${pet.ownerName}</p>
                <p class="mb-0">Contact: ${pet.contactPhone}</p>
            </div>`;
    }

    //displaying the cards on the page
    document.getElementById("pet-cards").innerHTML = cards;
}

function displayTablePets(){
    let table = 
        `<tr>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>Breed</th>
                <th>Gender</th>
                <th>Service</th>
                <th>Owner</th>
                <th>Phone</th>
            </thead>
        </tr>
        <tbody>`;

    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        table += 
            `<tr>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.breed}</td>
                <td>${pet.gender}</td>
                <td>${pet.service}</td>
                <td>${pet.ownerName}</td>
                <td>${pet.contactPhone}</td>
            </tr>`
    }
    table += `</tbody>`;

    document.getElementById("pets-table").innerHTML = table;
}