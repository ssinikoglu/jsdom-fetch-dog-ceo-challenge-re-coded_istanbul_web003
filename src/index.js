//console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

function fetchData(url) {
  return fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log("Error!", error));
}

fetchData(imgUrl).then((data) => getImages(data.message));

fetchData(breedUrl).then((data) => getBreeds(data.message));

function getImages(data) {
  const imageContainer = document.querySelector("#dog-image-container");
  data.map(
    (image) =>
      (imageContainer.innerHTML += `<div><img stye="height:10%"src=${image}></div>`)
  );
}

function getBreeds(data) {
  const dogBreeds = document.querySelector("#dog-breeds");
  dogBreeds.innerHTML = "";
  const breeds = [];
  for (const key in data) {
    breeds.push(key);
  }
  breeds.map((breed) => (dogBreeds.innerHTML += `<li>${breed}</li>`));
  dogBreeds.addEventListener("click", (e) => {
    e.target.style.color = "red";
  });

  function filterBreeds(data) {
    const breedDropdown = document.querySelector("#breed-dropdown");
    breedDropdown.addEventListener("change", (e) => {
      let filter = data.filter((breed) => breed.charAt(0) === e.target.value);
      getBreeds(filter);
    });
    return filter;
  }
}
