Meteor.subscribe('playerPositions');

var playersQuery = Players.find({});
// array - is this reactive?
var playerObjects = playersQuery.fetch();

playersQuery.observeChanges({
  added: function(id, fields) {
    // Canvas.update(playerObjects);
  },
  changed: function(id, fields) {
    // Canvas.update(playerObjects);
  }
});
