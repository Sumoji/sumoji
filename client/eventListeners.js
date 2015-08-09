Template.sumoarena.events({
  'click canvas': function(evt) {
    player = Session.get('playerId') || 'hello';
    // x and y coords need to be in reference to canvas, not client
    Meteor.call('movePlayer', player, evt.clientX, evt.clientY);
  }
});

Template.connect.events({
  'submit': function(evt) {
    evt.preventDefault();
    var username = evt.target[0].value;
    var emoji = evt.target[1].value;

    canvas = new Canvas();

    var Player = {
      username: username,
      emoji: emoji,
      mass: 10,
      speed: 0,
      position: [canvas.width / 2, canvas.height / 2]
    };

    var uid = Players.insert(Player);

    Session.set('playerId', uid);

    evt.target.remove();
  }
});
