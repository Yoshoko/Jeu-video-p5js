function PasGentil() {
    mechant1 = new Sprite(850, 250, 35, 20);
    mechant2 = new Sprite(1200, 176, 34, 25);
    mechant3 = new Sprite(600, 640, 30, 30);
    mechant4 = new Sprite(1340, 715, 30, 30);

    mechant1.image = './img/rat1.png';
    mechant1.rotationLock = true;
    mechant1.friction = 0;
    mechant1.image.scale = 2;
    mechant1.speed = 2;
    mechant1.direction = 0;
    mechant1.image.offset.y = -7
    mechant1.collider = "k";


    mechant2.image = './img/escargot.png';
    mechant2.rotationLock = true;
    mechant2.friction = 0;
    mechant2.image.scale = 2;
    mechant2.speed = 2;
    mechant2.direction = 0;
    mechant2.image.offset.y = -3
    mechant2.collider = "k";


    mechant3.image = './img/phantom.png';
    mechant3.rotationLock = true;
    mechant3.friction = 0;
    mechant3.speed = 2;
    mechant3.direction = 0;
    mechant3.image.scale = 2;

    mechant4.image = './img/phantom.png';
    mechant4.rotationLock = true;
    mechant4.friction = 0;
    mechant4.speed = 2;
    mechant4.direction = 0;
    mechant4.image.scale = 1.5;

}