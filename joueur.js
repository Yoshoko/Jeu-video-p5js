function controle() {
    if (kb.pressing('left')) {
        joueur.direction = 180;
        joueur.speed = 3;
    } else if (kb.pressing('right')) {
        joueur.direction = 0;
        joueur.speed = 3;
    } else {
        joueur.speed = 0;
    }

    if (kb.presses('spacebar') && sol) {
        joueur.velocity.y = -40;
        sol = false;
    }
}