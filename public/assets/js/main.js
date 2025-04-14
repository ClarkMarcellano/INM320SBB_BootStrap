fetch('assets/js/cards.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('infoCardsContainer');

    data.forEach(card => {
      const cardHTML = `
        <div class="col-md-3">
          <div class="card text-center border-start border-${card.borderColor} border-4">
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">${card.subtitle}</h6>
              <h3 class="card-title">${card.value}</h3>
              <p class="fw-bold">${card.title}</p>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += cardHTML;
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
