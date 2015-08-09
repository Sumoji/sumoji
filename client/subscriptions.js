Meteor.subscribe('playerPositions');

var playersQuery = Players.find({});
var updatesQuery = Updates.find({});

updatesQuery.observeChanges({
  added: function(id, fields) {
    var playerObjects = Players.find({}).fetch();
    console.log(playerObjects);
    console.log("canvas in subscription", canvas);
    canvas.update(playerObjects);
  }
});
