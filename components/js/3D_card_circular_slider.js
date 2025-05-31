document.querySelectorAll('.circular-card-3d-slider-base').forEach(slider => {
  const quantity = slider.querySelectorAll('li').length;
  slider.parentElement.style.setProperty('--quantity', quantity);
});


document.querySelectorAll(".circular-card-3d-slider-base").forEach((slider) => {
  const cards = slider.querySelectorAll("li");
  const quantity = cards.length;
  const middle = Math.ceil(quantity / 2);

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const hoveredCardPosition = parseInt(
        card.style.getPropertyValue("--position") ||
          getComputedStyle(card).getPropertyValue("--position")
      );

      let movement;
      if (hoveredCardPosition <= middle) {
        movement = 1 - hoveredCardPosition;
      }
      else if (hoveredCardPosition > middle) {
        movement = 1 - hoveredCardPosition + quantity;
      }


      if (hoveredCardPosition !== 1) {
        cards.forEach((c, i) => {
          const initialPosition = parseInt(
            c.style.getPropertyValue("--position") ||
              getComputedStyle(c).getPropertyValue("--position")
          );
          const initialPathPosition = parseInt(
            c.style.getPropertyValue("--path") ||
              getComputedStyle(c).getPropertyValue("--path")
          );
          
          let Position = ((initialPosition - hoveredCardPosition + quantity) % quantity) + 1;
          let Path = initialPathPosition + movement;

          Position = ((initialPosition - hoveredCardPosition + quantity) % quantity) + 1;
          
          c.style.setProperty("--path", Path);
          c.style.setProperty("--position", Position);
        });
      }
    });
  });
});