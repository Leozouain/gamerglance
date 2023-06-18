const gridCards = document.getElementById("grid");

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    const games = data.games.best;
    const bestGames = data.games.best
    let gameCardsHTML = ''; 

    bestGames.forEach(game => {
      // *********IF U WANT TO CHANGE THE WAY THE CARDS GET DISPLAYED JUST CHANGE THE HTML BELLOW
      const gameCardHTML = `
      <div class="col-12 col-sm-5 col-md-3 mx-3 photo-grid">
      <a href="gameDetail.html?id=${game.id}" class="btn">
        <div class="card border-0 game-card">
          <img src="${game.cover}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title h2">${game.name}</h5>
            <p class="card-text">${game.shortReview}</p>
            <p class="card-text text-danger"><span class="font-weight-bolder text-dark"> Metacritc:</span> ${game.rating} <span class="text-primary">/ 100</span></p>
          </div>
        </div>
        </a>
        </div>
      `;

      gameCardsHTML += gameCardHTML; 
    });

    gridCards.innerHTML = gameCardsHTML; // Adicionar o HTML acumulado à <div id="grid">
  });

  