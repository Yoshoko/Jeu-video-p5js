


function controle() {
    if (kb.pressing('left')) {
        joueur.vel.x = -3;
        joueur.mirror.x = true;
    } else if (kb.pressing('right')) {
        joueur.vel.x = 3;
        joueur.mirror.x = false;
    } else {
        joueur.vel.x = 0;
    }

    if (kb.presses('spacebar') && sol) {
        joueur.velocity.y = -3;
        sol = false;
    }
}