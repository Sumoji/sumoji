Meteor.subscribe('playerPositions');

updatesQuery.observeChanges({
  added: function(id, fields) {
    var playerObjects = Players.find({}).fetch();
    canvas.update(playerObjects);
  }
});
