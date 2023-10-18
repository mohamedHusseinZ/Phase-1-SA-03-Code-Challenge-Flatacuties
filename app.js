

let animals = [
  {
    "id": 1,
        "name": "Mr. Cute",
        "image":"ps://media2.giphtthy.com/media/20G9uNqE3K4dRjCppA/source.gif",
        "votes": 0
  },
  {
    "id": 2,
    "name": "Mx. Monkey",
    "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
    "votes": 0
  },
  {
    "id": 3,
    "name": "Ms. Zebra",
    "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
    "votes": 0
  },
  {
    "id": 4,
    "name": "Dr. Lion",
    "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
    "votes": 0
  },
  {
    "id": 5,
    "name": "Mme. Panda",
    "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
    "votes": 0
  }
]; 




fetch("https://my-json-server.typicode.com/mohamedHusseinZ/falacuties---code--challenge-task/character", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
})
.then(res => res.json())
.then(characters => {
    animals = characters; 
    showCharacters(animals); });
    function showAnimalList(animals) {
      const animalList = document.getElementById("animal-list");
  
      animals.forEach(animal => {
          const div = document.createElement("div");
          div.textContent = animal.name;
          div.addEventListener("click", () => selectAnimal(animal));
          animalList.appendChild(div);
      });
  }
  
  function selectAnimal(animal) {
      const img = document.getElementById("character-image");
      img.src = animal.image;
  
      const voteForm = document.getElementById("votes-form");
      voteForm.addEventListener("submit", event => {
          event.preventDefault();
          const newVotes = parseInt(event.target.vote.value);
          animal.votes += newVotes;
        
      });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
      showAnimalList(animals);
  });
  



function showCharacters(animals) {
  const characterInfo = document.getElementById("animals");
    characterInfo.innerHTML = "";    


    for (let animal of animals) {
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        li.innerText = animal.name;
        ul.appendChild(li);
        ul.setAttribute("id", animal.id);
      

        ul.addEventListener("click", (event) => {
          event.preventDefault();
            console.log(animal, parseInt(event.target.id, 10));
        });

    characterInfo.appendChild(ul);
    }
}

function showCharacter(animals, id) {
    return animals.find((char) => char.id === id);
}



function showCharacterContent(animals) {
    console.log(animals);
}
