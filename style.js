function showSlide(slideId, index) {
    const slides = document.querySelector(`#${slideId}`);
    const totalSlides = slides.querySelectorAll('.slide').length;
    let currentIndex = parseInt(slides.dataset.currentIndex || 0);

    if (index >= 0 && index < totalSlides ){
        currentIndex = index
    } else {
        return
    }
    slides.dataset.currentIndex = currentIndex;

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide(slideId) {
    const slides = document.querySelector(`#${slideId}`);
    const currentIndex = parseInt(slides.dataset.currentIndex || 0);
    showSlide(slideId, currentIndex + 1);
}

function prevSlide(slideId) {
    const slides = document.querySelector(`#${slideId}`);
    const currentIndex = parseInt(slides.dataset.currentIndex || 0);
    showSlide(slideId, currentIndex - 1);
}
