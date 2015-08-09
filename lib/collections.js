/**
Player: {
  username: String username
  emoji: String? which emoji avatar to use
  mass: Number current size
  velocity: Number current velocity
  position: [Number, Number] current xy-coordinates
}
**/

Players = new Mongo.Collection("players");
Updates = new Mongo.Collection("updates");
