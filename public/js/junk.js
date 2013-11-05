

  // function update_player_position(player) {
  //   var currentCell = $(player + ' td.active');
  //   var nextCell = currentCell.next();
  //   currentCell.removeClass('active');
  //   nextCell.addClass('active');
  // }
  // function game_end(player) {
  //   var playerId = $(player).data('player-id');
  //   $('h2').html($(player).data('name') + ' is the winner!');
  //   $.post('/game_result', {winner_id: playerId}, function(){
  //     alert($(player).data('name') + ' wins!');
  //     window.location.href = "/results";
  //   });
  // }


  // $(document).on('keyup', function(event) {
  //   if (event.keyCode === 81) {
  //     update_player_position('#player1_strip');
  //     if ($('.active').hasClass('finish1')) {
  //       game_end('#player1_strip');
  //     }
  //   }
  // if (event.keyCode === 80) {
  //     update_player_position('#player2_strip');
  //     if ($('.active').hasClass('finish2')) {
  //       game_end('#player2_strip');
  //     }
  //   }
  // });
