(function() {
    const gallery = document.querySelector('.gallery');
    const galleryContainer = gallery.querySelector('.gallery__container');
    const galleryItems = galleryContainer.querySelectorAll('.gallery__item');
    const galleryControls = gallery.querySelectorAll('.gallery__control');
    const galleryPagerCurrent = gallery.querySelector('.gallery__pager-current');
    const galleryPagerTotal = gallery.querySelector('.gallery__pager-total');
  
    let currentSlide = 0;
    let slidesPerPage = 3;
    let totalSlides = galleryItems.length;
    let totalPages = Math.ceil(totalSlides / slidesPerPage);
  
    galleryPagerTotal.textContent = totalPages;
  
    function updatePager() {
      galleryPagerCurrent.textContent = currentSlide + 1;
    }
  
    function slideGallery(direction) {
      if (direction === 'prev') {
        currentSlide--;
      } else if (direction === 'next') {
        currentSlide++;
      }
  
      if (currentSlide < 0) {
        currentSlide = totalPages - 1;
      } else if (currentSlide >= totalPages) {
        currentSlide = 0;
      }
  
      updatePager();
  
      galleryContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  
    galleryControls.forEach(control => {
      control.addEventListener('click', function() {
        const direction = this.classList.contains('gallery__control--prev') ? 'prev' : 'next';
        slideGallery(direction);
      });
    });
  
    window.addEventListener('resize', function() {
      if (window.innerWidth < 768) {
        slidesPerPage = 1;
      } else {
        slidesPerPage = 3;
      }
  
      totalPages = Math.ceil(totalSlides / slidesPerPage);
      galleryPagerTotal.textContent = totalPages;
      currentSlide = 0;
      updatePager();
      galleryContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
  })();
  