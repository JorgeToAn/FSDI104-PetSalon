//arrays []
//objects {}

let petSalon ={
    //attributes
    name:"El Sombrero",
    address:"Ave Starlight 804",
    pets:[],
    hours:{
        open:"9:00am",
        close:"6:00pm"
    },
    services:["grooming","wash"]
}

function Pet(name, age, breed, gender, service, ownerName, contactPhone){
    //attributes = parameters
    this.name=name;
    this.age=age;
    this.breed=breed;
    this.gender=gender;
    this.service=service;
    this.ownerName=ownerName;
    this.contactPhone=contactPhone;
}

function displayInfo(){
    document.getElementById("info").innerHTML=`
    Welcome to the ${petSalon.name} family. It is available at ${petSalon.address} from ${petSalon.hours.open} to ${petSalon.hours.close}.`;
}

function displayNumberOfPets(){
    document.getElementById("number-pets").innerHTML=`
    There are currently ${petSalon.pets.length} pets registered!`;
}

//display the name of the pets registered into the console
function logPets(){
    for(let i=0; i<petSalon.pets.length; i++){
        console.log(petSalon.pets[i].name);
    }
}

//alerts the user how many pets are registered
function alertPets(){
    alert(`There are currently ${petSalon.pets.length} pets registered!`);
}

function register(){
    //get info from the inputs
    let petName = document.getElementById("txtPetName").value;
    let petAge = document.getElementById("numPetAge").value;
    let petBreed = document.getElementById("txtPetBreed").value;
    let petGender = document.getElementById("txtPetGender").value;
    let service = document.getElementById("txtService").value;
    let ownerName = document.getElementById("txtOwnerName").value;
    let contactPhone = document.getElementById("txtPhone").value;

    console.log(`Name: ${petName}
                Age: ${petAge}
                Breed: ${petBreed}
                Gender: ${petGender}
                Service: ${service}
                Owner: ${ownerName}
                Phone: ${contactPhone}`);
    //create the obj
    let newPet = new Pet(petName, petAge, petBreed, petGender, service, ownerName, contactPhone);

    //push the obj
    petSalon.pets.push(newPet);

    //updating the number of pets in html
    displayNumberOfPets();

    //clearing the form
    clearInputs();
}

function clearInputs(){
    document.getElementById("txtPetName").value = "";
    document.getElementById("numPetAge").value = "";
    document.getElementById("txtPetBreed").value = "";
    document.getElementById("txtOwnerName").value = "";
    document.getElementById("txtPhone").value = "";
}

function init(){
    //creating the pets
    let scooby = new Pet("Scooby", 50, "Dane", "Male", "Grooming", "Shaggy", "666-666-666");
    let scrappy = new Pet("Scrappy", 40, "Mixed", "Male", "Vaccine", "Shaggy", "666-666-666");
    let hachiko = new Pet("Hachiko", 20, "Akita Inu", "Male", "Grooming", "Hidesaburō Ueno", "111-111-111");
    let fido = new Pet("Fido", 8, "Golden Retriever", "Male", "Vaccine", "Luigi", "567-567-567");

    //adding the pets to the salon
    petSalon.pets.push(scooby, scrappy, hachiko, fido);
    console.log(petSalon.pets);

    //calling the functions
    displayInfo();
    displayNumberOfPets();

    //hook events
}

window.onload=init;