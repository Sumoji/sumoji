Meteor.subscribe('playerPositions');

var updatesQuery = Updates.find({});
var playerQ = Players.find({_id: Session.get('playerId')});

updatesQuery.observeChanges({
  changed: function(id, fields) {
    if (canvas) {
      var playerObjects = Players.find().fetch();
      var powerUpObjects = PowerUps.find().fetch();
      canvas.update(playerObjects.concat(powerUpObjects));
    }
  }
});

playerQ.observeChanges({
  removed: function(oldDoc) {
    console.log('dawg');
    if (canvas) {
      $( "#suchpoop" ).css('visibility', 'visible');
      $( "#suchpoop" ).animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      }, 1500 );
      $( "#suchpoop" ).css('visibility', 'hidden');
    }
  }
});
