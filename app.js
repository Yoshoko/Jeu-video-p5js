let joueur;
let sol = true;
let bg;
let pieceImg;
let pieces = [];
let piecesRecuperees = 0;
let messageVictoire;
let messageDefaite;
let mechant1, mechant2, mechant3, mechant4;
let isGameOver = false
let backSound;
let coinSound;
let wSound;
let lSound;



function loadPlayerAnimations() {
    const idle = loadAni('./img/joueur_stop.png')
    idle.scale = 2

    const walk = loadAni('./img/joueur.png', './img/joueur_walk.png')
    walk.scale = 2
    walk.frameDelay = 15

    const jump = loadAni('./img/joueur_jump.png')
    jump.scale = 2
    jump.frameDelay = 15

    joueur.addAni('idle', idle)
    joueur.addAni('walk', walk)
    joueur.addAni('jump', jump)

    joueur.changeAni('idle')
}


function resetSaut() {
    sol = true;
}

function preload() {
    bg = loadImage('./img/background.png');
    pieceImg = loadImage('./img/piece.png');
    backSound = loadSound("./img/fond.mp3")
    coinSound = loadSound("./img/coins.mp3")
    wSound = loadSound("./img/win.mp3")
    lSound = loadSound("./img/mort.mp3")


}

function setup() {
    new Canvas(1400, 788);
    world.gravity.y = 8;


    const porte = new Sprite();
    const porte2 = new Sprite();


    porte.width = 33;
    porte.height = 45;
    porte.x = 300;
    porte.y = 632;
    porte.collider = 'none';
    porte.image = './img/porte.png';
    porte.image.scale = 0.15;

    porte2.width = 33;
    porte2.height = 45;
    porte2.x = 570;
    porte2.y = 232;
    porte2.collider = 'none';
    porte2.image = './img/porte.png';
    porte2.image.scale = 0.15;
    const bordure_gauche = new Sprite();
    bordure_gauche.width = 1;
    bordure_gauche.height = 3000;
    bordure_gauche.x = 0;
    bordure_gauche.y = 0;
    bordure_gauche.collider = 'static';

    const bordure_droite = new Sprite();
    bordure_droite.width = 1;
    bordure_droite.height = 3000;
    bordure_droite.x = 1400;
    bordure_droite.y = 0;
    bordure_droite.collider = 'static';

    const bordure_bas = new Sprite();
    bordure_bas.width = 1000;
    bordure_bas.height = 1;
    bordure_bas.x = 0;
    bordure_bas.y = 800;
    bordure_bas.collider = 'static';

    const terre_gauche = new Sprite([[0, 257], [0, 521], [66, 521], [66, 455], [132, 455], [132, 389], [198, 389], [198, 191], [132, 191], [66, 257], [0, 257]]);
    terre_gauche.collider = 'static';
    terre_gauche.image = './img/terre_gauche.png';
    terre_gauche.image.scale = 0.35;
    terre_gauche.image.offset.y = -20

    const terre_millieu = new Sprite([[304, 191], [304, 389], [898, 389], [1030, 257], [1030, 191], [964, 191], [898, 257], [436, 257], [370, 191], [304, 191]]);
    terre_millieu.collider = 'static';
    terre_millieu.image = './img/terre_millieu.png';
    terre_millieu.image.scale = 0.42;
    terre_millieu.image.offset.x = -58
    terre_millieu.image.offset.y = 80


    const tutu = new Sprite([[1400, 323], [1334, 323], [1268, 389], [1070, 389], [1004, 455], [542, 455], [542, 521], [1070, 521], [1070, 455], [1400, 455], [1400, 323]]);
    tutu.collider = 'static';
    tutu.image = './img/tutu.png';
    tutu.image.scale = 0.54;
    tutu.image.offset.x = -182
    tutu.image.offset.y = -10

    const cave_gauche = new Sprite([[0, 656], [0, 788], [66, 788], [66, 656], [0, 656]]);
    cave_gauche.collider = 'static';
    cave_gauche.image = './img/cave_gauche.png';
    cave_gauche.image.scale = 0.15;

    const cave_droite = new Sprite([[1049, 656], [1049, 788], [1400, 788], [1400, 722], [1115, 722], [1049, 656]]);
    cave_droite.collider = 'static';
    cave_droite.image = './img/cave_droite.png';
    cave_droite.image.scale = 0.35;
    cave_droite.image.offset.x = 85
    cave_droite.image.offset.y = -30

    const cave_millieu = new Sprite();
    cave_millieu.width = 462;
    cave_millieu.height = 132;
    cave_millieu.x = 384;
    cave_millieu.y = 723;
    cave_millieu.collider = 'static';
    cave_millieu.image = './img/cave_millieu.png';
    cave_millieu.image.scale = 0.35;

    let balancoire = new Sprite([[1106, 224], [1298, 224], [1298, 190], [1106, 190], [1106, 224]]);
    balancoire.collider = 'static';
    balancoire.image = './img/balancoire.png';
    balancoire.image.scale = 0.2;

    corde1 = new Sprite();
    corde1.image = './img/corde.png';
    corde1.x = 1120;
    corde1.y = 40;
    corde1.w = 5;
    corde1.h = 300;
    corde1.collider = 'none';

    corde2 = new Sprite();
    corde2.image = './img/corde.png';
    corde2.image.scale = 0.3;
    corde2.x = 1285;
    corde2.y = 40;
    corde2.w = 5;
    corde2.h = 300;
    corde2.collider = 'none';



    const bloc_piece = new Sprite();
    bloc_piece.width = 33;
    bloc_piece.height = 33;
    bloc_piece.x = 1385;
    bloc_piece.y = 180;
    bloc_piece.collider = 'static';
    bloc_piece.image = './img/bloc_visage.png';
    bloc_piece.image.scale = 1.7;




    const bloc_cave = new Sprite();
    const bloc_cave2 = new Sprite();
    const bloc_cave3 = new Sprite();

    bloc_cave.width = 66;
    bloc_cave.height = 66;
    bloc_cave.x = 704;
    bloc_cave.y = 689;
    bloc_cave.collider = 'static';
    bloc_cave.image = './img/bloc_cave.png';

    bloc_cave2.width = 66;
    bloc_cave2.height = 66;
    bloc_cave2.x = 826;
    bloc_cave2.y = 689;
    bloc_cave2.collider = 'static';
    bloc_cave2.image = './img/bloc_cave.png';

    bloc_cave3.width = 66;
    bloc_cave3.height = 66;
    bloc_cave3.x = 948;
    bloc_cave3.y = 689;
    bloc_cave3.collider = 'static';
    bloc_cave3.image = './img/bloc_cave.png';

    let piece1 = new Sprite(1385, 140, 25);
    let piece2 = new Sprite(670, 236, 25);
    let piece3 = new Sprite(30, 633, 25);
    let piece4 = new Sprite(827, 633, 25);
    let piece5 = new Sprite(1375, 700, 25);

    piece1.image = pieceImg;
    piece1.image.scale = 2;
    piece1.collider = 'static';
    pieces.push(piece1);

    piece2.image = pieceImg;
    piece2.image.scale = 2;
    piece2.collider = 'static';
    pieces.push(piece2);

    piece3.image = pieceImg;
    piece3.image.scale = 2;
    piece3.collider = 'static';
    pieces.push(piece3);

    piece4.image = pieceImg;
    piece4.image.scale = 2;
    piece4.collider = 'static';
    pieces.push(piece4);

    piece5.image = pieceImg;
    piece5.image.scale = 2;
    piece5.collider = 'static';
    pieces.push(piece5);


    const panneau = new Sprite();
    const panneau2 = new Sprite();
    const panneau3 = new Sprite();
    const herbe = new Sprite();
    const herbe2 = new Sprite();
    const herbe_violet = new Sprite();
    const herbe_violet2 = new Sprite();
    const buisson = new Sprite();




    panneau.width = 33;
    panneau.height = 33;
    panneau.x = 500;
    panneau.y = 250;
    panneau.collider = 'none';
    panneau.image = './img/panneau.png';
    panneau.image.scale = 1.4;
    panneau.image.offset.y = -5

    panneau2.width = 33;
    panneau2.height = 33;
    panneau2.x = 600;
    panneau2.y = 645;
    panneau2.collider = 'none';
    panneau2.image = './img/panneau.png';
    panneau2.image.scale = 1.4;
    panneau2.image.offset.y = -5

    panneau3.width = 33;
    panneau3.height = 33;
    panneau3.x = 200;
    panneau3.y = 645;
    panneau3.collider = 'none';
    panneau3.image = './img/panneau_gauche.png';
    panneau3.image.scale = 1.4;
    panneau3.image.offset.y = -5



    herbe.width = 20;
    herbe.height = 20;
    herbe.x = 836;
    herbe.y = 250;
    herbe.collider = 'none';
    herbe.image = './img/herbe.png';
    herbe.image.scale = 1.4;
    herbe.image.offset.y = -5

    herbe2.width = 20;
    herbe2.height = 20;
    herbe2.x = 450;
    herbe2.y = 250;
    herbe2.collider = 'none';
    herbe2.image = './img/herbe.png';
    herbe2.image.scale = 1.4;
    herbe2.image.offset.y = -5

    herbe_violet.width = 20;
    herbe_violet.height = 20;
    herbe_violet.x = 948;
    herbe_violet.y = 645;
    herbe_violet.collider = 'none';
    herbe_violet.image = './img/herbe_violet.png';
    herbe_violet.image.offset.y = -3
    herbe_violet.image.scale = 2;

    herbe_violet2.width = 20;
    herbe_violet2.height = 20;
    herbe_violet2.x = 500;
    herbe_violet2.y = 645;
    herbe_violet2.collider = 'none';
    herbe_violet2.image = './img/herbe_violet.png';
    herbe_violet2.image.offset.y = -6
    herbe_violet2.image.scale = 2;


    buisson.width = 33;
    buisson.height = 33;
    buisson.x = 734;
    buisson.y = 250;
    buisson.collider = 'none';
    buisson.image = './img/buisson.png';
    buisson.image.scale = 2;
    buisson.image.offset.y = -5

    joueur = new Sprite(50, 100, 34.5, 44);
    joueur.image = './img/joueur.png';
    joueur.rotationLock = true;
    joueur.friction = 0;
    joueur.image.scale = 2.5;

    loadPlayerAnimations()


    joueur.collides(terre_gauche, resetSaut);
    joueur.collides(terre_millieu, resetSaut);
    joueur.collides(tutu, resetSaut);
    joueur.collides(cave_gauche, resetSaut);
    joueur.collides(cave_droite, resetSaut);
    joueur.collides(cave_millieu, resetSaut);
    joueur.collides(bloc_cave, resetSaut);
    joueur.collides(bloc_cave2, resetSaut);
    joueur.collides(bloc_cave3, resetSaut);
    joueur.collides(balancoire, resetSaut);
    joueur.collides(bloc_piece, resetSaut);

    PasGentil()


    Messages()
}

function draw() {


    if (isGameOver) {

        mechant1.speed = 0
        mechant2.speed = 0
        mechant3.speed = 0
        mechant4.speed = 0
        joueur.speed = 0



        return
    }

    background(bg);




    mechantDeplacement();
    pieceRecup();
    controle();
    checkCollisions();


}


function checkCollisions() {
    if (joueur.overlaps(mechant1) || joueur.overlaps(mechant2) || joueur.overlaps(mechant3) || joueur.overlaps(mechant4)) {
        joueur.remove();
        messageDefaite.visible = true;
        isGameOver = true;
        lSound.play();



    }
}