$(document).ready(function() {
  var player1 = new Player($('#player1_strip').data('name'), $('.p1_start'));
  var player2 = new Player($('#player2_strip').data('name'), $('.p2_start'));

  var game = new Game(player1, player2, $('.p1_start'), $('.p2_start'));

  $('form').on('submit', function(event) {
    event.preventDefault;
    game.start(player1.name, player2.name);
  });
  $(document).on('keyup', function(event) {
    game.onKeyUp(event.which);
    // game.render();
  });
});
