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

      const img = document.createElement('img')
      img.src = character.imageURL

      const span = document.createElement('span')
      span.innerHTML = `${character.name}: ${character.phone}`

      const p = document.createElement('p')
      p.innerHTML = character.message

      const a = document.createElement('a')
      a.innerHTML = `Leave ${character.name} a message`
      a.setAttribute('character', character.name)
      a.setAttribute('href', `contact.html?character=${character.name}`)
      
      list.appendChild(li)
      li.appendChild(img)
      li.appendChild(span)
      li.appendChild(p)
      li.appendChild(a)
    })
  };
  
  document.addEventListener('DOMContentLoaded', function() {
    fetchCharacters()
  })