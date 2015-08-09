Meteor.subscribe('playerPositions');

var playersQuery = Players.find({});
// array - is this reactive?

playersQuery.observeChanges({
  added: function(id, fields) {
    var playerObjects = playersQuery.fetch();
    canvas.update(playerObjects);
  },
  changed: function(id, fields) {
    // only re-render if the position has changed
    if (fields.position) {
      var playerObjects = playersQuery.fetch();
      canvas.update(playerObjects);
    }
  }
});
