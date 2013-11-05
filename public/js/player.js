function Player(name) {
  this.name = name;
  this.position = -1;

}


Player.prototype.updatePosition = function() {
  this.position ++;
}
