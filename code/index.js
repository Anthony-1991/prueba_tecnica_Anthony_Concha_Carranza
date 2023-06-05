/* =================== header fijo ================================*/

let header = document.getElementById("header")

window.addEventListener('scroll', () =>{
    let scroll =window.scrollY

    if(scroll>0){
        header.classList.add("abajo");
    } else {
        header.classList.remove("abajo");
    }
} )


/* ==================== slider categoria ====================== */

document.addEventListener("DOMContentLoaded", function() {
    var sliderContainer = document.querySelector(".slider-container");
    var sliderItems = sliderContainer.getElementsByClassName("slider-item");
  
    var showFirst7Button = document.querySelector(".show-first-7");
    var showNext7Button = document.querySelector(".show-next-7");
  
    var initialItems = Array.from(sliderItems).slice(0, 7);
    var nextItems = Array.from(sliderItems).slice(7, 14);
  
    function showItems(selectedItems) {
      for (var i = 0; i < sliderItems.length; i++) {
        if (selectedItems.includes(sliderItems[i])) {
          sliderItems[i].style.display = "block";
        } else {
          sliderItems[i].style.display = "none";
        }
      }
    }
  
    showItems(initialItems);
  
    showFirst7Button.addEventListener("click", function() {
      showItems(initialItems);
    });
  
    showNext7Button.addEventListener("click", function() {
      showItems(nextItems);
    });
  });


  /* ================ slider oferta ==================== */

 // Mostrar los primeros cuatro cards del primer botón al cargar la página
window.onload = function() {
    showSlide(1);
  };

  function showSlide(slideNumber) {
    // Ocultar todas las slides
    var slides = document.getElementsByClassName('slide');
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    // Mostrar la slide seleccionada
    var selectedSlide = document.getElementById('slide' + slideNumber);
    selectedSlide.style.display = 'block';
  }


  /* ================ slider marca ==================== */

  const cardsContainer = document.querySelector('.cards-container');
  const buttons = document.querySelectorAll('.buttons button');
  
  // Contenido de las diferentes colecciones de tarjetas
  const cardCollections = [
      [
          { image: 'rg/img/marca/1.png'},
          { image: 'rg/img/marca/2.png'},
          { image: 'rg/img/marca/3.png'},
          { image: 'rg/img/marca/4.png'},
          { image: 'rg/img/marca/5.png'}
      ],
      [
          { image: 'rg/img/marca/6.png'},
          { image: 'rg/img/marca/7.png'},
          { image: 'rg/img/marca/8.png'},
          { image: 'rg/img/marca/9.png'},
          { image: 'rg/img/marca/10.png'}
      ],
      [
          { image: 'rg/img/marca/11.png'},
          { image: 'rg/img/marca/12.png'},
          { image: 'rg/img/marca/13.png'},
          { image: 'rg/img/marca/14.png'},
          { image: 'rg/img/marca/15.png'}
      ]
  ];
  
  // Función para mostrar las tarjetas de una colección específica
  function showCards(collectionIndex) {
      const cards = cardCollections[collectionIndex - 1];
      const cardsHTML = cards.map(card => `
          <div class="marca">
              <img src="${card.image}" alt="Imagen">
          </div>
      `).join('');
      cardsContainer.innerHTML = cardsHTML;
  }
  
  // Event listeners para los botones
  buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
          showCards(index + 1);
      });
  });
  
  // Mostrar las tarjetas iniciales al cargar la página
  showCards(1);