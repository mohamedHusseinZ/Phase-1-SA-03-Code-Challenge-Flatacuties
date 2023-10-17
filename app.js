let characters =[]

document.addEventListener("DOMContentLoaded", function() {

    var myElement = document.getElementById("myElement");

    showCharacters(characters)

});

const animalslist = document.getElementById("animals")
const img = document.getElementById("character-image")
const votecount = document.getElementById("votes-form")

fetch("http://localhost:3000/characters", {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(response => response.json()) // Parse the response to JSON
  .then(characters => {
    showCharacters(characters);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });


;
function showCharacters(characters) {
    const characterInfo = document.getElementById("animals");
  
    for (let character of characters) {
      const span = document.createElement("span");
      span.innerText = character.name;
      span.setAttribute("id", character.id);
      span.style.color = "blue";
      span.style.fontSize = "16px";
      span.style.margin = "10px";
      span.style.border = "4px"; 
  
      span.addEventListener("click", (event) => {
        showCharacterContent(getCharacterById(characters, parseInt(event.target.id)));
      });
  
      characterInfo.appendChild(span);
    }
  }
  
  function showCharacterContent(character) {

  }
  

  

      
         






function getCharacterById(character, id) {
    return character.find(character => {
        return character.id === id;
    });
}



function showCharacter(character) {
    const img = document.getElementById("character-image");
    if (img && character && character.image) {
      img.src = character.image;
    } else {
      console.error("Invalid character or image element.");
    }
  }
  


function currentVotes(){
votecount.addEventListener("submit",(Event)=> {
    Event.preventDefault();
    const newVotes = parseInt(Event.target.vote)
    let current = parseInt(currentVotes.textcontent);
    let voteCount = current =+newVotes;
    currentVotes.innerText = voteCount;

});
}
function showCharacterContent(character) {
    
    console.log("Showing character content:", character.image );
}