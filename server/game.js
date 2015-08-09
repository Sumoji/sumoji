/**
Player: {
  username: String username
  emoji: String? which emoji avatar to use
  mass: Number current size
  velocity: Number current velocity
  position: [Number, Number] current xy-coordinates
}
**/

Game = function() {
  this.maxSpeed = 200;

};

Game.prototype.translatePlayer_ = function(player) {
  player.position[0] = player.position[0] + player.velocity.x;
  player.position[1] = player.position[1] + player.velocity.y;
};

Game.prototype.applyClick = function(playerID, x, y) {
  // move object with position vector v1 along unit vector v2 by moveSpeed:
  // v1.translate(v2.multiplyByScalar(moveSpeed));
  var player = Players.find({_id : playerID});

  var mousePoint = new Point(x, y);
  var posPoint = new Point(player.position[0], player.position[1]);
  var inputVelocity = mousePoint - posPoint;

  // inputVelocity = (inputVelocity / inputVelocity.length) * 10;
  var nextVelocity = player.velocity + inputVelocity;

  Players.update({_id: player._id}, {$set: {velocity: nextVelocity}});
}

Game.prototype.shrink_ = function(player) {
  player.mass = player.mass*.95;
}

Game.prototype.grow_ = function(player) {
  player.mass = player.mass*1.05;
}

Game.prototype.inArena_ = function(playerID) {

}

Game.prototype.isColliding_ = function(player1, player2) {
  var p1 = player1.position;
  var p2 = player2.position;
  var r1 = player1.mass / 2;
  var r2 = player2.mass / 2;

  var distanceBtwn = math.pow(p1[0] - p2[0], 2) + math.pow(p1[1] - p2[1], 2);
  var collisionDist = math.pow(r1, 2) + math.pow(r2, 2);

  return distanceBtwn <= collisionDist;
}

Game.prototype.collidingPlayers_ = function(players) {
  var results = [];
  for (var i = 0; i < players.length; i++) {
    var p1 = players[i];
    for (var j = i + 1; j < players.length; j++) {
      var p2 = players[j];
      if (this.isColliding_(p1, p2)) {
        results.push([p1, p2]);
      }
    }
  }

  return results;
}

Game.prototype.collide_ = function(pID1, pID2) {
  var player1 = null; // TODO: db fetch
  var player2 = null; // TODO: db fetch
  v1 = player1.velocity;
  v2 = player2.velocity;
  x1 = player1.position;
  x2 = player2.position;
  m1 = player1.mass;
  m2 = player2.mass;
  dotProd = (v1 - v2).dot(x1 - x2);
  // TODO: Math.pow might be wrong, .
  player1.velocity = v1 - ((2*m2)/(m1 + m2)) *
    (dotProd/normalize(Math.pow(x1 - x2, 2))) * (x1 - x2);
  dotProd = (v2 - v1).dot(x2 - x1);
  player2.velocity = v2 - ((2*m1)/(m1 + m2)) *
    (dotProd/normalize(Math.pow(x2 - x1, 2))) * (x2 - x1);
  return;
}

Game.prototype.update = function() {
  var allPlayers = Players.find().fetch();
  var collisionPairs = this.collidingPlayers_(allPlayers);
  for (var i = 0; i < collisionPairs.length; i++) {
    var pair = collisionPairs[i];
    this.collide_(pair[0], pair[1]);
  }
  for (var i = 0; i < allPlayers.length; i++) {

  }
}


var game = new Game();

Meteor.methods({
  movePlayer: function(playerID, x, y) {
    game.applyClick(playerID, x, y);
  },

  checkGameState: function() {

  }
});
