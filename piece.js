function pieceRecup() {

    for (let i = pieces.length - 1; i >= 0; i--) {
        if (joueur.overlap(pieces[i])) {
            pieces[i].remove();
            pieces.splice(i, 1);
            piecesRecuperees++;
            coinSound.play();
        }
    }

    fill(0, 0, 0, 50);
    rect(10, 5, 220, 50, 10);
    fill(0);
    textSize(32);
    text(`Pièces : ${piecesRecuperees} / 5`, 20, 40);
    if (piecesRecuperees === 5) {
        messageVictoire.visible = true;
        wSound.play();
        isGameOver = true;
    }
}