/**
 * Selects the canvas and initializes width and height
 * @param {optional Number} width  [width of the canvas]
 * @param {optional Number} height [height of the canvas]
 */
Canvas = function(width, height) {
  this.canvas = document.getElementById('mainStage');
  this.width = width ? width : 1200;
  this.height = height ? height : 600;
  this.c = this.canvas.getContext('2d');

  this.canvas.width = this.width;
  this.canvas.height = this.height;
};

/**
 * Given an object of things to draw, it will update the entire board
 * @param  {Array<Player>} [players player objects to be drawn]
 * @return {undefined}
 */
Canvas.prototype.update = function(players) {
  console.log("canvas.update called", players);
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
 * @param  {String} emoji     [Emoji ID]
 * @param  {Number} diameter  [diameter of the emoji]
 * @param  {Number} x         [x position]
 * @param  {Number} y         [y position]
 * @return {undefined}
 */
Canvas.prototype.drawEmoji_ = function(emoji, name, diameter, x, y) {
  var c = this.c;

  c.textBaseline = 'middle';
  c.textAlign = 'center';
  c.font = diameter+'px Courier New';
  c.fillText(emoji, x, y);
  c.font = '10px Courier New';
  c.fillText(name,x,y+diameter/2);
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
Canvas.prototype.clearCanvas_ = function() {
  this.canvas.width = this.width;
}
