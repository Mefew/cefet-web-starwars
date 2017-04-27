// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado

$.ajax({
  url: 'http://swapi.co/api/films',
  method: 'GET',
  success: function(resposta) {
    //let qtdeFilmes = resposta.count;
    let filmes = resposta.results;
    let ulListaDeFilmes = document.getElementById('movies').getElementsByTagName('ul');
    for (var filme of filmes) {
      $("ul").append  ("<li data-episode-url=\"http://swapi.co/api/films/"+filme.episode_id +"/\">Episode "+filme.episode_id+ ": "+ filme.title + "</li> ");

      //$("ul").append("<li data-episode-url=\"http://swapi.co/api/films/7/\">Episodio 7</li>");
      //$("ul").append("Cobrão é viadão");
      //Episode "+filme.episode_id+ ": "+ filme.title "
    }
  }
});

$('#movies').on('click', 'li', function(e) {
  movie_url = this.getAttribute("data-episode-url");
  
  $.ajax({url: 'http://swapi.co/api/films', method: 'GET', success: function(resposta) {

  }
  });

});