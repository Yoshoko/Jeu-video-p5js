function mechantDeplacement() {
    if (mechant1.x < 450) {
        mechant1.direction = 0;
        mechant1.mirror.x = true;
    } else if (mechant1.x > 645) {
        mechant1.direction = 180;
        mechant1.mirror.x = false;
    }
    if (mechant1bis.x < 700) {
        mechant1bis.direction = 0;
        mechant1bis.mirror.x = true;
    } else if (mechant1bis.x > 880) {
        mechant1bis.direction = 180;
        mechant1bis.mirror.x = false;
    }
    if (mechant2.x < 1100) {
        mechant2.direction = 0;
        mechant2.mirror.x = true;
    } else if (mechant2.x > 1300) {
        mechant2.direction = 180;
        mechant2.mirror.x = false;
    }
    if (mechant3.x < 320) {
        mechant3.direction = 0;
        mechant3.mirror.x = true;
    } else if (mechant3.x > 600) {
        mechant3.direction = 180;
        mechant3.mirror.x = false;
    }
    if (mechant4.x < 1150) {
        mechant4.direction = 0;
        mechant4.mirror.x = true;
    } else if (mechant4.x > 1340) {
        mechant4.direction = 180;
        mechant4.mirror.x = false;
    }
}