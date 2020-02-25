console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  fetchImg()
  fetchBreed()
})


function fetchImg() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderImg(json));
  
  }
  
  function renderImg(json) {
    const main = document.getElementById('dog-image-container') 
    json.message.forEach(dog => {  
      const img = document.createElement('img')
      img.src = dog

      main.appendChild(img)
    })
  }
    function fetchBreed() {
      return fetch('https://dog.ceo/api/breeds/list/all')
      .then(resp => resp.json())
    .then(json => renderBreed(json));
    }

    function renderBreed(json) {  
      const kind = document.getElementById('dog-breeds')
      json.message.forEach(breed => {
       debugger
        const li = document.createElement('li')
         ul.innerText = `{breed.name}`
        kind.appendChild(ul)
      });
      

  //   .catch(error => {
  //     console.log("error!!")
  //     console.error(error)
  //   })
    }