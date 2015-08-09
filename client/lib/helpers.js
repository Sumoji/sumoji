Template.connect.helpers({
  emojis: function() {
    return ["😀", "😅", "😍", "😘", "💩", "😳", "😬", "👯", "🌝", "🌞"];
  }
});

Meteor.setInterval(function() {
  $('body').css('background-size', '300px');
},400);

Meteor.setInterval(function() {
  $('body').css('background-size', '150px');
},500);