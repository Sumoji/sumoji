Meteor.subscribe('playerPositions');

var playersQuery = Players.find({});
// array - is this reactive?
var playerObjects = playersQuery.fetch();

playersQuery.observeChanges({
  added: function(id, fields) {
    canvas.update(playerObjects);
  },
  changed: function(id, fields) {
    // only re-render if the position has changed
    if (fields.position) {
      canvas.update(playerObjects);
    }
  }
});
