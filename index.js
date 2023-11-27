const prevButton = document.querySelector("#prevBtn");
const nextButton = document.querySelector("#nextBtn");
const imgElement = document.querySelector("img");
const photos = [
  "./images/image-1.jpg",
  "./images/image-2.jpg",
  "./images/image-3.jpg",
  "./images/image-4.jpg",
];
let count = 0;
nextButton.addEventListener("click", function () {
  count++;
  if (count >= photos.length) {
    count = 0;
    imgElement.src = photos[count];
  }
  imgElement.src = photos[count];
});

prevButton.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgElement.src = photos[count];
  }
  imgElement.src = photos[count];
});
