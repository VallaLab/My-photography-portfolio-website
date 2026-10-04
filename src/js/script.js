/*disabilito tasto dx mouse*/
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});
/*light-box*/
const galleryImages = document.querySelectorAll(".img-container img, .gallery-column img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {

        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        lightbox.showModal();
    });
});

lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        lightbox.close();
    }

});
