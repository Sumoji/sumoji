var mousedownInterval = null;

var playerInput = function(evt) {
  if (evt.which != 1) {
      return;
    }

    player = Session.get('playerId');

    var canvas = document.getElementById("mainStage");

    var newX = evt.clientX - canvas.offsetLeft;
    var newY = evt.clientY - canvas.offsetTop;

    Meteor.call('applyClick', player, newX, newY);
};

Template.sumoarena.events({
  'mousedown canvas, mousemove canvas': function(evt) {
    playerInput(evt);

    if (mousedownInterval) {
      Meteor.clearInterval(mousedownInterval)
    }

    mousedownInterval = Meteor.setInterval(function() {
      playerInput(evt);
    }, 33);

  }
});

Template.body.events({
  'mouseup': function(evt) {
    Meteor.clearInterval(mousedownInterval);
  }
});

Template.connect.events({
  'submit': function(evt) {
    evt.preventDefault();
    var username = evt.target[0].value;
    var emoji = evt.target[1].value;

    canvas = new Canvas();
    Meteor.call('startGameClock');
    var startX = canvas.width / 2 + Math.random() * 500 - 250;
    var startY = canvas.height / 2 + Math.random() * 300 - 150;
    var position = [startX, startY];
    var velocity = [0, 0];

    var newPlayer = {
      username: username,
      emoji: emoji,
      mass: 50,
      position: position,
      velocity: velocity
    };

    var uid = Players.insert(newPlayer);
    Session.set('playerId', uid);
    document.getElementById('bottomWrapper').remove();
  }
});
