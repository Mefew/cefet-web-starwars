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
    let htmlListaDeFilmes = document.getElementById('movies').getElementsByTagName('ul');
    for (var filme of filmes) {
      htmlListaDeFilmes.append("<li data-episode-url=\"http://swapi.co/api/films/"+filme.episode_id
          +"/\">Episode "+filme.episode_id+ ": "+ filme.title "</li> ");
      //<li data-episode-url="http://swapi.co/api/films/4/">Episode I</li>

    }
}});
