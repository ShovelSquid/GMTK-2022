/** @type {import("../typings/phaser")} */

let config = {
    type: Phaser.AUTO,
    width: 1260,
    height: 1048,
    scene: [ Menu, Play ],
    fps: 1000,
    physics: {
        default: 'arcade',
        arcade: {
            useTree: true,
            gravity: { y: 0 },
            debug: false
        },
    },
    scale: {
        mode: Phaser.Scale.FIT,
    },
    pixelArt: false,
};

let keyUp, keyDown, keyLeft, keyRight, keyW, keyA, keyS, keyD;


let game = new Phaser.Game(config);