canvas = null;

Template.sumoarena.events({
  'mousedown canvas, mousemove canvas': function(evt) {
    if (evt.which != 1) {
      return;
    }

    player = Session.get('playerId') || 'hello';

    var canvas = document.getElementById("mainStage");

    var newX = evt.clientX - canvas.offsetLeft;
    var newY = evt.clientY - canvas.offsetTop;

    Meteor.call('applyClick', player, newX, newY);
  }
});

Template.connect.events({
  'submit': function(evt) {
    evt.preventDefault();
    var username = evt.target[0].value;
    var emoji = evt.target[1].value;

    canvas = new Canvas();
    var position = [canvas.width / 2, canvas.height / 2];
    var velocity = [0, 0];
    Meteor.call('startGameClock');

    var newPlayer = {
      username: username,
      emoji: emoji,
      mass: 10,
      position: position,
      velocity: velocity
    };

    console.log("player pre-save:", newPlayer);
    var uid = Players.insert(newPlayer);
    var after = Players.find({_id: uid}).fetch()[0];
    console.log("player post-save:", after);


    Session.set('playerId', uid);
    evt.target.remove();
  }
});
