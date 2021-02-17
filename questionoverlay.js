import { bonhommeX, bonhommeY, food, food } from './bonhomme.js';

if (bonhommeX == food.x && bonhommeY == food.y) {
    document.getElementById('overlay').style.display = 'block';
}

function off() {
    document.getElementById('overlay').style.display = 'none';
}
