get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/create_game' do
  game = Game.new
  player_one = Player.find_or_create_by_name(params[:player1])
  player_two = Player.find_or_create_by_name(params[:player2])
  game.players << player_one
  game.players << player_two
  game.save!
  session[:player_one_id] = player_one.id
  session[:player_two_id] = player_two.id
  session[:game_id] = game.id
  redirect '/game_play'
end

get '/game_play' do
  @player_one = Player.find(session[:player_one_id])
  @player_two = Player.find(session[:player_two_id])
  erb :game_play
end

post '/game_result' do
  game = Game.find(session[:game_id])
  session[:winner_id] = params[:winner_id].to_i
  game.update_attributes(winner_id: session[:winner_id])
  if request.xhr?
    @winner = Player.find((session[:winner_id]))
  end
end

get '/results' do
  @winner = Player.find((session[:winner_id]))
  @players = Player.all
  erb :results
end

get '/player/:id' do
  @player = Player.find(params[:id])
  @games = @player.games
  @wins = @games.where("winner_id = ?", params[:id])
  erb :player_page
end
