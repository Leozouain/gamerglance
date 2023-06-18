const gameId = new URLSearchParams(window.location.search).get('id');

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    const game = data.games.best.find(game => game.id.toString() === gameId);
    const gameDetails = document.getElementById('game-details');

    if (game) {
      const gameHTML = `
      <div style="background-image: url('${game.imgUrl}'); "
      class="img-banner"></div>
      <div class="container">
          <div class="row ">
              <div class="col-12">
              <h1 class="h1 text-center">${game.name}</h1> 

              </div>
              <div class="row">

                  <div class="col">
                      <p class="h3">${game.review}</p>
                      <p class="h4">Released: ${game.year}</p>
                      <p class="h4">Available Platforms: ${game.platform}</p>
                      <p class="h4">Rating: ${game.rating} / 100</p>
                      
                  </div>
              </div>
          </div>
      `;

      gameDetails.innerHTML = gameHTML;
    } else {
      gameDetails.innerHTML = `<h1 class="h1 text-center">Game not Found</h1>`;
    }
  });