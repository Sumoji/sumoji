Canvas = function() {
  this.canvas = document.getElementById('mainStage');
  this.width = 300;
  this.height = 300;
  this.c = canvas.getContext('2d');

  this.canvas.width = this.width;
  this.canvas.height = this.height;
};

/**
 * Given an object of things to draw, it will update the entire board
 * @param  {Array<Player>} [players player objects to be drawn]
 * @return {undefined}
 */
Canvas.prototype.update = function(players) {
  this.clearCanvas_();

  for (var i = 0; i < players.length; i++) {
    var player = players[i];
    var x = player.position[0];
    var y = player.position[1];
    this.drawEmoji_(player.emoji, player.mass, x, y);
  }
};

/**
 * Draws an emoji on the canvas
 * @param  {String} emoji [Emoji ID]
 * @param  {Number} mass  [Mass of the emoji]
 * @param  {Number} x     [x position]
 * @param  {Number} y     [y position]
 * @return {undefined}
 */
Canvas.prototype.drawEmoji_ = function(emoji, mass, x, y) {
  var c = this.c;

  c.textBaseline = 'middle';
  c.font = mass+'px Courier New';
  c.fillText(emoji, x - mass / 2, y + mass / 5);
};

/**
 * Resize the canvas. Clears the canvas
 * @param  {Number} width  [new width]
 * @param  {Number} height [new height]
 * @return {undefined}
 */
Canvas.prototype.resizeCanvas_ = function(width, height) {
  this.width = width;
  this.height = height;

  this.canvas.width = width;
  this.canvas.height = height;
};

/**
 * Clears the canvas
 * @return {undefined}
 */
canvas.prototype.clearCanvas_ = function() {
  this.canvas.width = this.width;
}
