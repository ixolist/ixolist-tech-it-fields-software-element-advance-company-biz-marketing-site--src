document.addEventListener("DOMContentLoaded", function() { 
  const images = document.querySelectorAll('.phone-img');
  let currentImageIndex = 0;
  images[currentImageIndex].style.display = 'flex';
  setInterval(changeImage, 4000);

  tagsSizing()


  const buttons = document.querySelectorAll('.services__btn');
  
  buttons.forEach(button => {
      button.addEventListener('click', function() {
          buttons.forEach(btn => btn.classList.remove('active', 'selected'));
          this.classList.add('active', 'selected');
          showDescription(this);
      });
  });
  
  const defaultSelectedButton = document.getElementById("Bank");
  defaultSelectedButton.classList.add('selected');
  showDescription(defaultSelectedButton);
  
  function showDescription(button) {
      const buttonText = button.textContent.trim();
      const descriptionId = buttonText + "Description";
      const descriptions = document.querySelectorAll('.description');

      descriptions.forEach(desc => {
          desc.style.display = 'none';
      });
      
      const selectedDescription = document.getElementById(descriptionId);
      if (selectedDescription) {
          selectedDescription.style.display = 'flex';
      }
  }

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
