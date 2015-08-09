/**
Player: {
  username: String username
  emoji: String? which emoji avatar to use
  mass: Number current size
  velocity: Number current velocity
  position: [Number, Number] current xy-coordinates
}
**/
Player = function(username, emoji, mass, speed, position) {
  this.username = username;
  this.emoji = emoji;
  this.mass = mass;
  this.speed = speed;
  // paper.js point
  this.position = position;
};

// translateBy is a paper.js vector
Player.prototype.translate = function(translateBy) {
  this.position = position + translateBy;
};

Player.prototype.multiplyByScalar = function(scalar) {
  this.position *= scalar;
}

Meteor.methods({
  isInArena: function(player) {

  },
  shrink: function(player) {

  },
  grow: function(player) {

  },
  movePlayer: function(player, x, y) {
    // move object with position vector v1 along unit vector v2 by moveSpeed:
    // v1.translate(v2.multiplyByScalar(moveSpeed));
    var speedVect = somefuckingvector.multiplyByScalar();
    player.translate();
  },
  isColliding: function(player1, player2) {

  },
  checkGameState: function() {

  }
});
