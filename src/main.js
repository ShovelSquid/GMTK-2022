/** @type {import("../typings/phaser")} */

let config = {
    type: Phaser.AUTO,
    width: 2800,
    height: 1600,
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

let keyUp, keyDown, keyLeft, keyRight;


let game = new Phaser.Game(config);