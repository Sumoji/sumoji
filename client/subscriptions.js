Meteor.subscribe('playerPositions');

var updatesQuery = Updates.find({});

updatesQuery.observeChanges({
  added: function(id, fields) {
    var playerObjects = Players.find({}).fetch();
    canvas.update(playerObjects);
  }
});
