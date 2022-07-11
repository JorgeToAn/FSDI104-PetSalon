function displayCardPets(){
    // creating cardPet HTML string
    let cards = ``;

    //travel the array
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        cards += 
            `<div id="${pet.id}" class="pet-card my-2 mx-1 p-3">
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
    let table = ``;

    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        table += 
            `<tr id="${pet.id}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.breed}</td>
                <td>${pet.gender}</td>
                <td>${pet.service}</td>
                <td>${pet.ownerName}</td>
                <td>${pet.contactPhone}</td>
                <td>${pet.payment}</td>
                <td><button class="btn btn-danger" onclick="deletePet(${pet.id})"><i class="fa-solid fa-xmark"></i></button></td>
            </tr>`
    }

    document.getElementById("pets-table").innerHTML = table;
}