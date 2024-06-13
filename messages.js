function Messages() {
    messageVictoire = new Sprite();
    messageVictoire.textSize = 40;
    messageVictoire.text = "Bien joué , tu es devenu riche !";
    messageVictoire.color = '#C5A9A3';
    messageVictoire.w = 700;
    messageVictoire.h = 300
    messageVictoire.x = width / 2;
    messageVictoire.y = height / 2;
    messageVictoire.visible = false;
    messageVictoire.collider = 'none';


    messageDefaite = new Sprite();
    messageDefaite.textSize = 40;
    messageDefaite.text = "Tu as perdu !";
    messageDefaite.color = '#C5A9A3';
    messageDefaite.w = 700;
    messageDefaite.h = 300;
    messageDefaite.x = width / 2;
    messageDefaite.y = height / 2;
    messageDefaite.visible = false;
    messageDefaite.collider = 'none';



}