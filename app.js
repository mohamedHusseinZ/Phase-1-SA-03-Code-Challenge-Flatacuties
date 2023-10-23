

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




fetch("https://my-json-server.typicode.com/typicode/mohamedHusseinZ/fala---ta-cuties---code--challenge-task", {
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
          div.innerHTML = animal.name;
          div.addEventListener("click", () => selectAnimal(animal));
          animalList.appendChild(div);
      });
  }
  
  function selectAnimal(animal) {
      const img = document.getElementById("character-image");
      img.src = animal.image;
  }

  function animalVotes(animal) {
    const voteForm = document.getElementById("votes-form");
    const voteCountElement = document.getElementById("vote-count");

    voteForm.addEventListener("submit", event => {
        event.preventDefault();
        const newVotes = parseInt(event.target.vote.value);
        animal.votes += newVotes;

        // Update the vote count displayed in the DOM
        voteCountElement.textContent = animal.votes;
    });
}
  
  document.addEventListener("DOMContentLoaded", function() {
      showAnimalList(animals);
  });
  



function showCharacters(animals) {
  const characterInfo = document.getElementById("animals");
    characterInfo.innerHTML = "";    
}



function showCharacter(animals, id) {
    return animals.find((char) => char.id === id);
}



function showCharacterContent(animals) {
    console.log(animals);
}
