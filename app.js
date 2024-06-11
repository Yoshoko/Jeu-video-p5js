let joueur;
let sol = true;

function resetSaut() {
    sol = true;
}


function setup() {
    new Canvas(1400, 788);
    background('white');

    world.gravity.y = 80;


    const terre_gauche = new Sprite
        ([[0, 257], [0, 521], [66, 521], [66, 455], [132, 455], [132, 389], [198, 389], [198, 191], [132, 191], [66, 257], [0, 257]]);
    terre_gauche.collider = 'static';
    terre_gauche.image = './img/terre_gauche.png';
    terre_gauche.image.scale = 0.36;

    const terre_millieu = new Sprite
        ([[304, 191], [304, 389], [898, 389], [1030, 257], [1030, 191], [964, 191], [898, 257], [436, 257], [370, 191], [304, 191]]);
    terre_millieu.collider = 'static';
    terre_millieu.image = './img/terre_millieu_coupe.png';
    terre_millieu.image.scale = 0.45;

    const tunnel = new Sprite
        ([[1400, 323], [1334, 323], [1268, 389], [1070, 389], [1004, 455], [542, 455], [542, 521], [1070, 521], [1070, 455], [1400, 455], [1400, 323]]);
    tunnel.collider = 'static';
    tunnel.image = './img/tunnel.png';


    const cave_gauche = new Sprite
        ([[0, 656], [0, 788], [66, 788], [66, 656], [0, 656]]);
    cave_gauche.collider = 'static';

    const cave_droite = new Sprite
        ([[1049, 656], [1049, 788], [1400, 788], [1400, 722], [1115, 722], [1049, 656]]);
    cave_droite.collider = 'static';

    const cave_millieu = new Sprite();

    cave_millieu.width = 462;
    cave_millieu.height = 132;
    cave_millieu.x = 384;
    cave_millieu.y = 723;
    cave_millieu.collider = 'static';

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

    joueur = new Sprite();
    joueur.x = 20;
    joueur.y = 200;
    joueur.d = 40;
    joueur.color = 'blue';

    joueur.collides(terre_gauche, resetSaut);
    joueur.collides(terre_millieu, resetSaut);
    joueur.collides(tunnel, resetSaut);
    joueur.collides(cave_gauche, resetSaut);
    joueur.collides(cave_droite, resetSaut);
    joueur.collides(cave_millieu, resetSaut);
    joueur.collides(bloc_cave, resetSaut);
    joueur.collides(bloc_cave2, resetSaut);
    joueur.collides(bloc_cave3, resetSaut);


}

function draw() {
    background('white')

    controle()
}


