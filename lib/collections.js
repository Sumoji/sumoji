/**
Player: {
  username: String username
  emoji: String? which emoji avatar to use
  mass: Number current size
<<<<<<< HEAD
  speed: Number current speed
=======
  velocity: Number current velocity
>>>>>>> 4e86928e55534f069ef283f6ca2597018f5a9a63
  position: [Number, Number] current xy-coordinates
}
**/


Players = new Mongo.Collection("players");
Publishes = new Mongo.Collection("publishes");
