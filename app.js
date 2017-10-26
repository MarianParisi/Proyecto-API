//Esta pagina utiliza una API publica.

$('input[type="submit"').on("click", function(event) {
  event.preventDefault()
  var API = "https://kitsu.io/api/edge/anime?filter[text]="
  var animeSeleccionado = $("#anime").val()
  $.ajax({
    url: API + animeSeleccionado,
    success: function(data) {
      var cardAnime = `
            <div class="card text-justify border-secondary mb-3" style="width: 20rem;">
            <img class="card-img-top" src="..." alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text sinopsis"></p>
            </div>
        </div>`;
      $(".tarjeta").html(cardAnime)
      //console.log(data)
      $(".card-img-top").attr("src", data.data["0"].attributes.coverImage.small);
      $('.card-title').text(data.data["0"].attributes.canonicalTitle)
      $('.sinopsis').text(data.data["0"].attributes.synopsis)
    },
    failure: function(error) {
      console.log("hubo un error: " + error)
    }
  });
});
