let joueur;
let sol = true;
let bg;
let pieceImg;
let pieces = [];
let piecesRecuperees = 0;
function resetSaut() {
    sol = true;
}

function preload() {
    bg = loadImage('./img/background.png');
    pieceImg = loadImage('./img/piece.png');

    joueur = new Sprite(50, 100, 34.5, 50);
    joueur.image = './img/joueur.png';
    joueur.rotationLock = true;
    joueur.friction = 0;
    joueur.image.scale = 2;
    joueur.debug = true;
}

function setup() {
    new Canvas(1400, 788);
    world.gravity.y = 12;

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

    const terre_gauche = new Sprite([[0, 257], [0, 521], [66, 521], [66, 455], [132, 455], [132, 389], [198, 389], [198, 191], [132, 191], [66, 257], [0, 257]]);
    terre_gauche.collider = 'static';
    terre_gauche.image = './img/terre_gauche.png';
    terre_gauche.image.scale = 0.36;

    const terre_millieu = new Sprite([[304, 191], [304, 389], [898, 389], [1030, 257], [1030, 191], [964, 191], [898, 257], [436, 257], [370, 191], [304, 191]]);
    terre_millieu.collider = 'static';
    terre_millieu.image = './img/terre_millieu.png';
    terre_millieu.image.scale = 0.42;
    terre_millieu.debug = true;

    const tunnel = new Sprite([[1400, 323], [1334, 323], [1268, 389], [1070, 389], [1004, 455], [542, 455], [542, 521], [1070, 521], [1070, 455], [1400, 455], [1400, 323]]);
    tunnel.collider = 'static';
    tunnel.image = './img/tutu.png';
    tunnel.image.scale = 0.55;
    tunnel.debug = true;

    const cave_gauche = new Sprite([[0, 656], [0, 788], [66, 788], [66, 656], [0, 656]]);
    cave_gauche.collider = 'static';
    cave_gauche.image = './img/cave_gauche.png';
    cave_gauche.image.scale = 0.15;

    const cave_droite = new Sprite([[1049, 656], [1049, 788], [1400, 788], [1400, 722], [1115, 722], [1049, 656]]);
    cave_droite.collider = 'static';
    cave_droite.image = './img/cave_droite.png';
    cave_droite.image.scale = 0.35;
    cave_droite.debug = true;

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
    balancoire.debug = true;

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

    let piece1 = new Sprite(1280, 170, 25);
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

    joueur.collides(terre_gauche, resetSaut);
    joueur.collides(terre_millieu, resetSaut);
    joueur.collides(tunnel, resetSaut);
    joueur.collides(cave_gauche, resetSaut);
    joueur.collides(cave_droite, resetSaut);
    joueur.collides(cave_millieu, resetSaut);
    joueur.collides(bloc_cave, resetSaut);
    joueur.collides(bloc_cave2, resetSaut);
    joueur.collides(bloc_cave3, resetSaut);
    joueur.collides(balancoire, resetSaut);
}

function draw() {
    background(bg);

    pieceRecup();
    controle();
}
