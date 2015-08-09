Template.sumoarena.events({
  'click canvas': function(evt) {
    player = Session.get('playerId') || 'hello';
    // x and y coords need to be in reference to canvas, not client
    Meteor.call('movePlayer', player, evt.clientX, evt.clientY);
  }
});
