async function loadCards() {
  try {
    const fetchedData = await fetch('./assets/js/cards.json');
    const result = await fetchedData.json();
    console.log('Fetched result:', result);

    const cardContainer = document.querySelector('#infoCardsContainer');

    result.forEach(card => {
      const cardHTML = `
        <div class="col-md-3">
        <div class="card text-center border">
            <div class="card-body">
              <p class="fw-bold">${card.title}</p>
              <h3 class="card-title">${card.value}</h3>
            </div>
          </div>
        </div>
      `;

      cardContainer.innerHTML += cardHTML;
    });
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}

loadCards();

