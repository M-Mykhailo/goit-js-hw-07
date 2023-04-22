import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryItemMurkup = createGalleryItemMarkup(galleryItems);
const options = {
  captionsData: "alt",
  captionDelay: 250,
};
const lightbox = new SimpleLightbox(".gallery .gallery__link", options);

galleryList.insertAdjacentHTML("afterbegin", galleryItemMurkup);

galleryList.addEventListener("click", onGalleryImgClick);

function createGalleryItemMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join("");
}

function onGalleryImgClick(event) {

  blockingBrowserActions(event);

  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  
}

function blockingBrowserActions(event) {
  event.preventDefault();
}