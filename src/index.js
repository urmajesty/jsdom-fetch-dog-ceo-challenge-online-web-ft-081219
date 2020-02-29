console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
  fetchBreeds()
  
  const breedDropdown = document.querySelector("#breed-dropdown")

  breedDropdown.addEventListener('change', (event) => {
  const letter = event.target.value
  const dogFilter = breeds.filter((breed) => breed.startsWith(letter))
  const dogBreeds = document.querySelector("#dog-breeds")
  dogBreeds.innerHTML = dogList(dogFilter)
  changeColor()
 
})
})

let breeds = []

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// const dogImageContainer = document.querySelector("#dog-image-container")
// const dogBreedLi = document.querySelector("#dog-breeds")
// const breedDropdown = document.querySelector("#breed-dropdown")


function fetchImages(){
  const dogImageContainer = document.querySelector("#dog-image-container")
  fetch(imgUrl, { method: 'GET' })
    .then((response) => {
    console.log(response)
      if (response.ok) {
      return response.json() 
    
      }
    })
    .then((dogJsonData) => {
    dogJsonData.message.forEach(function(imgUrl) {
      console.log(dogImageContainer)
      dogImageContainer.innerHTML += `<img src="${imgUrl}">`
      })
    const imageString = dogJsonData.message.map((imgUrl) => {
      return `<img src="${imgUrl}">`
    })
  })
}

function fetchBreeds() {
  const dogBreedLi = document.querySelector("#dog-breeds")

fetch(breedUrl, {method: 'GET'})
  .then((res) => res.json())
  .then((breedData) => {
    breeds = Object.keys(breedData.message)
    dogBreedLi.innerHTML = dogList(breeds) 
  })
}


  function dogList(breedArray) {
    const dogLiArray = breedArray.map(function(breed) {
      return `<li id="breeds">${breed}</li>`
    })
    return dogLiArray.join('')
}

function changeColor() {
  // let li = document.querySelector('#breeds')
  // console.log(li)
  // li.addEventListener('click', function(e) {
  //   console.log(e)
  // })
  document.querySelectorAll('li').forEach(function(e) {
    console.log(e)
  e.addEventListener('click', function() {
    this.style.backgroundColor = "red";
  })
})
}


// fetchImages()
// fetchBreeds()

// breedDropdown.addEventListener('change', (event) => {
//   const letter = event.target.value
//   const dogFilter = breeds.filter((breed) => breed.startsWith(letter))
//   const dogBreeds = document.querySelector("#dog-breeds")
//   dogBreeds.innerHTML = dogList(dogFilter)
 
// })

// document.querySelectorAll('li').forEach(function(e) {
//   e.addEventListener('click', function() {
//     this.style.backgroundColor = "red";
//   })
// })



 

//1. Look at your HTML and ask yourself, which elements do I need to select and have available in my file because they will be changed or interacted with. Use querySelectors of getElementBys* to get them and save them to variables. 

//2. Does your app need any information from a server at the very moment the page loads? If so, write out the fetch logic and the necessary functions to put the information on the screen. 

//3. Think about how your user will interact with your website, and which elements that you've selected will need an event listener. Event listeners go on elements where the user actively makes a decision to interact with it. For example, a button flick, a dropdown, etc. Put even listeners on those, put the event as the first argument and then think of a name for the function for the second argument 

//4. Define the callback functions that go into the event listeners to behave the way that you've hoped. 


// var selection = ""
// var breeds = []

// document.addEventListener('DOMContentLoaded', function() {
//   fetchImg()
//   fetchBreed()
//   selectLetters()
// })


// function fetchImg() {
//     return fetch("https://dog.ceo/api/breeds/image/random/4")
//     .then(resp => resp.json())
//     .then(json => renderImg(json));
  
//   }
  
//   function renderImg(json) {
//     const main = document.getElementById('dog-image-container') 
//     json.message.forEach(dog => {  
//       const img = document.createElement('img')
//       img.src = dog

//       main.appendChild(img)
//     })
//   }
//     function fetchBreed() {
//       return fetch('https://dog.ceo/api/breeds/list/all')
//       .then(resp => resp.json())
//       .then(json => renderBreed(json));

//     }

//     function renderBreed(json) {  
//       const kind = document.getElementById('dog-breeds')
//       breeds = Object.keys(json.message)
//       breeds.forEach(breed => { 
//         const ul = document.createElement('li')
//         ul.innerText = breed
//         kind.appendChild(ul)
//       })};
      
      // document.querySelectorAll('li').forEach(function(e) {
      //   e.addEventListener('click', function() {
      //     this.style.backgroundColor = "red";
      //   })
      // });

//       function myDropdown(letter) {
//         console.log()
//         renderBreed(breeds.filter(breed => breed.startsWith(letter)))

        // input = document.getElementById('dog-breeds');
        // const json = fetch('https://dog.ceo/api/breeds/list/all')
        // .then(resp => resp.json())
        // .then(json => renderBreed(json.filter(breed => breed.startsWith(selection))))
        // // const breedObject = Object.keys(json.message)
        // renderBreed(breedObject)
        // filter = breedObject.filter(breed => {
        //   return breed.startsWith(selection)});
          // filter.forEach(breedElement => { 
          //   const li = document.createElement('li')
          //   li.innerText = breedElement
          //   input.appendChild(li)
          
      // }
      // );
    // }
    

    // function selectLetters() {
      // const letters = document.querySelectorAll('option')
      // letters.forEach(function(letter) {
      //   letter.addEventListener('click', () => {
          // let breedDropdown = document.getElementById("breed-dropdown");
          // breedDropdown.addEventListener('change', (event) => {
          //   selection = event.target.value
          //   myDropdown(selection)
            // console.log(selection)
      //     })
      //     // selection = this.innerText()
      //     // // console.log(selection)
      //     // myDropdown()
      // //   })
      // }
      // )
    // return selection
    // }
      
        // breedDropdown = document.getElementById("breed-dropdown");
        // a = breedDropdown.getElementsByTagName("option");
      // //   for (i = 0; i < a.length; i++) {
      //     txtValue = a[i].textContent || a[i].innerText;
      //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
      //       a[i].style.display = "";
      //     } else {
      //       a[i].style.display = "none";
      //     }
      //   }
      // }
    
  //   .catch(error => {
  //     console.log("error!!")
  //     console.error(error)
  //   })
