$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1000, 500, 200, 10)
createPlatform(400, 400, 200, 10)
createPlatform(600, 200, 200, 10)
createPlatform(600, 600, 200, 10)
createPlatform(800, 400, 200, 10)
createPlatform(200, 500, 200, 10)
createPlatform(1000, 700, 100, 10)
createPlatform(300, 700, 100, 10)
createPlatform(500, 500, 100, 10)
createPlatform(800, 500, 100, 10)
createPlatform(300, 300, 150, 10)
createPlatform(950, 300, 150, 10)
    // TODO 3 - Create Collectables
createCollectable("steve",700, 200)
createCollectable("max", 1050, 300)
createCollectable("max", 350, 300)
createCollectable("diamond", 500, 450)    
createCollectable("kennedi", 800, 450)
    // TODO 4 - Create Cannons
createCannon("right", 700, 900)
createCannon("left", 300, 1000)
createCannon("bottom", 700, 700)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
