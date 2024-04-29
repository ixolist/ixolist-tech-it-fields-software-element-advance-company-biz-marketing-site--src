document.addEventListener("DOMContentLoaded", function() { 
  const images = document.querySelectorAll('.phone-img');
  let currentImageIndex = 0;
  images[currentImageIndex].style.display = 'flex';
  setInterval(changeImage, 4000);

  tagsSizing()

  function changeImage() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'flex';
  }

  function tagsSizing() {
    const tags = document.querySelectorAll('.tag');
    tags.forEach(function(tag) {
      var weight = parseInt(tag.getAttribute('data-weight'));
      tag.style.fontSize = (10 + weight * 2) + 'px';
    });
  }
});
