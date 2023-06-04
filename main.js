const slides = document.getElementsByClassName('slide');
    const previousButton = document.getElementById('previous-button');
    const nextButton = document.getElementById('next-button');
    let currentSlideIndex = 0;

    function showSlide(slideIndex) {
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      slides[slideIndex].style.display = 'block';
      currentSlideIndex = slideIndex;
    }

    function showNextSlide() {
      showSlide(currentSlideIndex + 1);
    }

    function showPreviousSlide() {
      showSlide(currentSlideIndex - 1);
    }

    nextButton.addEventListener('click', showNextSlide);
    previousButton.addEventListener('click', showPreviousSlide);

    // Auto-advance the slideshow every 5 seconds
    setInterval(showNextSlide, 5000);

    // Show the first slide initially
    showSlide(0);