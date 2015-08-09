/**
Player: {
  username: String username
  emoji: String? which emoji avatar to use
  mass: Number current size
  velocity: Number current velocity
  position: [Number, Number] current xy-coordinates
}

PowerUp: {
  grow: Number 0 for shrink, 1 for grow
  emoji: String? which emoji avatar to use
  mass: Number current size
  position: [Number, Number] current xy-coordinates
}
**/

Players = new Mongo.Collection("players");
Updates = new Mongo.Collection("updates");
PowerUps = new Mongo.Collection("powerups");
