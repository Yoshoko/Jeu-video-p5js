
function controle() {
    if (kb.pressing('left')) {
        joueur.vel.x = -3;
        joueur.mirror.x = true;
        joueur.changeAni('walk')

    } else if (kb.pressing('right')) {
        joueur.vel.x = 3;
        joueur.mirror.x = false;

        joueur.changeAni('walk')
    } else {
        joueur.vel.x = 0;
        joueur.changeAni('idle')
    }

    if (kb.presses('spacebar') && sol) {
        joueur.velocity.y = -4.5;
        sol = false;
        joueur.changeAni('jump')
    }
}