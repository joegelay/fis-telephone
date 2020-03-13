function fetchCharacters() {
    fetch("https://telephone-assessment.herokuapp.com/api/v1/contacts")
    .then(response => response.json())
    .then(json => renderCharacters(json["data"]));
};

function renderCharacters(json) {
    const list = document.getElementById('characters')
    json.forEach(character => {
      const li = document.createElement('li')

      li.innerHTML = `<li>${character.name}</li>`
      

      list.appendChild(li)
    })
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchCharacters()
  })
  