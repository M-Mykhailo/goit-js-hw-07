import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const galleryItemMurkup = createGalleryItemMarkup(galleryItems);

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
          data-source="${original}"
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

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"/>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onPressEscape);
      },
      onClose: () => {
        window.removeEventListener("keydown", onPressEscape);
      },
    }
  );
  instance.show();
 
  function onPressEscape(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
};

function blockingBrowserActions(event) {
  event.preventDefault();
};

