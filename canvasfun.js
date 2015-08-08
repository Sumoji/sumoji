if (Meteor.isClient) {

  Template.sumoarena.rendered = function() {
    // var example = document.getElementById('mainStage');
    // console.log(example);
    // var context = example.getContext('2d');
    // context.textBaseline = 'top';
    // context.font = '32px Arial';
    // context.fillText('\ud83d\ude03', 0, 0);

    // Matter.js module aliases
    var Engine = Matter.Engine,
        World = Matter.World,
        Bodies = Matter.Bodies,
        MouseConstraint = Matter.MouseConstraint;

    // create a Matter.js engine
    var engine = Engine.create(document.body);

    // create two boxes and a ground
    var circA = Bodies.circle(30, 200, 80, {
      density: .0005,
      render: {
        sprite: {
          strokeStyle: '#ffffff',
          texture: 'img/fun.png'
        }
      }
    });
    var boxB = Bodies.rectangle(450, 50, 80, 80);
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // add all of the bodies to the world
    World.add(engine.world, [MouseConstraint.create(engine), circA, boxB, ground]);
    // run the engine
    Engine.run(engine);
  }
}
