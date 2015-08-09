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
    console.log("canvas in event listener", canvas);

    var Player = {
      username: username,
      emoji: emoji,
      mass: 10,
      position: [Math.random() * canvas.width, Math.random() * canvas.height],
      velocity: [0, 0]
    };

    var uid = Players.insert(Player);

    Session.set('playerId', uid);

    evt.target.remove();
  }
});
