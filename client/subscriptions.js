Meteor.subscribe('playerPositions');

var updatesQuery = Updates.find({});
var playerQ = Players.find({});

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
  removed: function(losingPlayer) {
    if (canvas && losingPlayer == Session.get('playerId')) {
      $( "#suchpoop" ).css('visibility', 'visible');
      // $( "#suchpoop" ).animate({
      //   width: "70%",
      //   opacity: 0.4,
      //   marginLeft: "0.6in",
      //   fontSize: "3em",
      //   borderWidth: "10px"
      // }, 1500 );
      console.log('hjasdf');
    }
  }
});
