// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
let textosDeAbertura = [];

$.ajax({
  url: 'https://swapi.co/api/films/',
  method: 'GET',
  success: function(resposta) {
    let filmes = resposta.results;
    let ulListaDeFilmes = document.getElementById('movies').getElementsByTagName('ul');

    for (var filme of filmes) {
        //if (filme == filmes[0])
        $("ul").append  ("<li id=\'episode"+ filme.episode_id + "\' data-episode-url=\"http://swapi.co/api/films/"+filme.episode_id +"/\">Episode "+filme.episode_id+ ": "+ filme.title + "</li> ");
        textosDeAbertura[filme.episode_id] = "Episode " + filme.episode_id + "\n" + filme.title.toUpperCase() + "\n\n" + filme.opening_crawl;
    }

    if (sessionStorage.getItem('historico') != null)
        $("pre").html(textosDeAbertura[ sessionStorage.getItem('historico') ]);
  }
});

$('#movies').on('click', 'li', function(e) {
  let string = this.getAttribute("id");
  string = string.substring(7);
  $("pre").html(textosDeAbertura[string]);

  sessionStorage.setItem('historico', string);
});
