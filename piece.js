function pieceRecup() {

    for (let i = pieces.length - 1; i >= 0; i--) {
        if (joueur.overlap(pieces[i])) {
            pieces[i].remove();
            pieces.splice(i, 1);
            piecesRecuperees++;
        }
    }

    fill(0);
    textSize(32);
    text(`Pièces : ${piecesRecuperees} / 5`, 20, 40);
}