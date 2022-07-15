class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.path = './assets/';

        this.load.image('background', 'paper_background.png');
        this.load.image('player', 'Exclamation_Point.png');
    }

    create() {
        this.add.tileSprite(0, 0, this.width, this.height, 'background');

        const KeyCodes = Phaser.Input.Keyboard.KeyCodes; // Less typing

        keyUp = this.input.keyboard.addKey(KeyCodes.UP);
        keyDown = this.input.keyboard.addKey(KeyCodes.DOWN);
        keyLeft = this.input.keyboard.addKey(KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(KeyCodes.RIGHT);

        this.player = new Player(this, 50, 50, 'player', 0, [keyUp, keyDown, keyLeft, keyRight]);
   
        this.physics.world.setBounds(0, 0, game.config.width, game.config.height);
    }

    update(time, delta) {
        this.player.update(delta);
    }
}