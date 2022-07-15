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
            endFrame: 31,
        });
        this.load.spritesheet('negative die', 'Die_Negative_Sheet.png', {
            frameWidth: 96,
            frameHeight: 96,
            startFrame: 0,
            endFrame: 6
        });
        this.load.spritesheet('positive die', 'Die_Positive_Sheet.png', {
            frameWidth: 96,
            frameHeight: 96,
            startFrame: 0,
            endFrame: 6
        });
    }

    create() {
        this.add.tileSprite(0, 0, this.width, this.height, 'background');

        const KeyCodes = Phaser.Input.Keyboard.KeyCodes; // Less typing

        keyUp = this.input.keyboard.addKey(KeyCodes.UP);
        keyDown = this.input.keyboard.addKey(KeyCodes.DOWN);
        keyLeft = this.input.keyboard.addKey(KeyCodes.LEFT);
        keyRight = this.input.keyboard.addKey(KeyCodes.RIGHT);
        keyW = this.input.keyboard.addKey(KeyCodes.W);
        keyA = this.input.keyboard.addKey(KeyCodes.A);
        keyS = this.input.keyboard.addKey(KeyCodes.S);
        keyD = this.input.keyboard.addKey(KeyCodes.D);

        this.player = new Player(this, 50, 50, 'font', 30, [keyW, keyS, keyA, keyD]).setOrigin(0.5, 1);   
        this.physics.world.setBounds(0, 0, game.config.width, game.config.height);

        // this.input.on("pointermove", () => {
            // this.player.target = yadda.yadda 
        //})
    }

    update(time, delta) {
        this.player.update(delta);
    }
}
