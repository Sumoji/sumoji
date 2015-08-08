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

if (Meteor.isClient) {
  Meteor.subscribe("testing");

  var allPubs = Publishes.find({});
  allPubs.observeChanges({
    added: function(pub) {
      // console.log(pub);
    }
  });

}

if (Meteor.isServer) {
  var date;
  Meteor.setInterval(function() {
    date = Date.now();
    Publishes.insert({createdAt: date});
  }, 2000)
  Meteor.publish("testing", function() {
    return Publishes.find({createdAt: date});
  });
  Meteor.publish("players", function(playerData) {
    // create new player
    Players.insert(playerData);
  });

  Meteor.startup(function () {
    // code to run on server at startup
  });
}
