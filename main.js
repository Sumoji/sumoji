/**
Player: {
  username: String username
  emoji: String? which emoji avatar to use
  mass: Number current size
  speed: Number current speed
  position: [Number, Number] current xy-coordinates
}
**/

Players = new Mongo.Collection("players");
Publishes = new Mongo.Collection("publishes");