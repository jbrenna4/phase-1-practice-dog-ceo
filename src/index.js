console.log('%c HI', 'color: firebrick')

//fetch, parse and add image elements

//const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

//fetch function
function firstFetch(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(dogData => dogData.message.forEach(dog => renderDogImage(dog)))
};

firstFetch();

//render function - 
function renderDogImage(dog){
    const dogImage = document.createElement('img');
    console.log(dogImage);
//    dogImage.src = dog;
    }
renderDogImage();