Template.sumoarena.events({
  'click canvas': function(evt) {
    player = Session.get('playerId') || 'hello';
    Meteor.call('movePlayer', player, evt.clientX, evt.clientY);
  }
});
