Meteor.subscribe('playerPositions');

var updatesQuery = Updates.find({});

updatesQuery.observeChanges({
  changed: function(id, fields) {
    if (canvas) {
      var playerObjects = Players.find().fetch();
      var powerUpObjects = PowerUps.find().fetch();
      canvas.update(playerObjects.concat(powerUpObjects));
    }
  }
});
