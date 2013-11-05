function Game(player1, player2, p1_row, p2_row) {
  this.player1 = player1;
  this.player2 = player2;   
  this.p1_row = p1_row;
  this.p2_row = p2_row;
}



Game.prototype.onKeyUp = function(event) {
  if (event=== 81) {
    this.player1.updatePosition();
    this.render(this.player1, this.p1_row);
    if (this.player1.position === 19) {
      this.finish(this.player1);
    }
  }
  if (event === 80) {
    this.player2.updatePosition();
    this.render(this.player2, this.p2_row);
    if (this.player2.position === 19) {
      this.finish(this.player2);
    }
  }
}
Game.prototype.start = function(p1, p2) {
    // this invloves a post method that writes players
    // and a new game to db
    $.post('/create_game', {player1: p1, player2: p2}, function(event) {
    });
  }
Game.prototype.finish = function(player) {
  $(document).unbind('keyup');
  var p_name = player.name;
  $.post('/game_result', {winner: p_name}, function(event) {
    alert(p_name + ' is the winner!');
    window.location.href = '/results';
  });
}
Game.prototype.render = function(p, p_row) {
  $(p_row).removeClass('active');
  $(p_row.nextAll().eq(p.position - 1)).removeClass('active');
  $(p_row.nextAll().eq(p.position)).addClass('active');
}
