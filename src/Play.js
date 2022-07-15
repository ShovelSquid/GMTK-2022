class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.path = './assets/';

        this.load.image('background', 'paper_background.png');
        this.load.image('player', 'Exclamation_Point.png');
        this.load.spritesheet('font', 'Alphabet_Spritesheet.png', {
            frameWidth: 64,
            frameHeight: 64,
            startFrame: 0,
            endFrame: 32,
        });
        this.load.spritesheet('negative die', 'Die_Negative_Sheet.png', {
            frameWidth: 96,
            frameHeight: 96,
            startFrame: 1,
            endFrame: 6
        });
        this.load.spritesheet('positive die', 'Die_Positive_Sheet.png', {
            frameWidth: 96,
            frameHeight: 96,
            startFrame: 1,
            endFrame: 6
        });
    }

    create() {
        // this.anims.create({
        //     key: 'fontplayer',
        //     frames: this.anims.generateFrameNumbers('negative die', {start:1, end: 1}),
        //     frameRate: 1
        // })
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