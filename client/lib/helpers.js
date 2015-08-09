Template.connect.helpers({
  emojis: function() {
    return ["😀", "😅", "😍", "😘", "💩", "😳", "😬", "👯", "🌝", "🌞"];
  }
});

var size = 100;
var diff = 5;
var rot = 1;

Meteor.setInterval(function() {
  $('body').css('background-size', size + 'px');
  size += diff;
  if (size == 500) {
    diff = -5;
  } else if(size == 5) {
    diff = 5;
  }
},50);

Meteor.setInterval(function() {
  $('#suchpoop').css('transform', 'rotate(' + rot + 'deg)');
  rot += diff;
  if (rot > 10) {
    diff = -5;
  } else if(rot < -10) {
    diff = 5;
  }
},50);

// Meteor.setInterval(function() {
//   $('body').css('background-size', '150px');
// },500);
