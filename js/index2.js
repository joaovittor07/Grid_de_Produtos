document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slider');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    let currentSlide = 0;

    function hideSlides() {
        slides.forEach(slide => slide.classList.remove('on'));
    }

    function showSlide() {
        slides[currentSlide].classList.add('on');
    }

    function nextSlide() {
        hideSlides();
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide();
    }

    function prevSlide() {
        hideSlides();
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide();
    }

    // Mostra o primeiro slide ao carregar a página
    showSlide();

    // Adiciona event listeners para os botões de navegação
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});
