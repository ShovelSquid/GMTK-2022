// play as an exclamation point

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, keys) {
        super(scene, x, y, texture, frame);

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.SPEED = 500;
        this.ACCELERATION = 5000;
        this.DRAG = this.ACCELERATION;
        this.setMaxVelocity(this.SPEED);
        this.setDrag(this.DRAG, this.DRAG);

        this.setCollideWorldBounds(true, 0, 0);

        this.kUp = keys[0];
        this.kDown = keys[1];
        this.kLeft = keys[2];
        this.kRight = keys[3];
    }

    update(delta) {
        let accelx = 0;
        let accely = 0;

        if (this.kUp.isDown) {
            accely -= this.ACCELERATION;    // Increase up acceleration
        }
        if (this.kDown.isDown) {
            accely += this.ACCELERATION;    // Increase down acceleration
        }
        if (this.kLeft.isDown) {
            accelx -= this.ACCELERATION;    // Increase left acceleration
        }
        if (this.kRight.isDown) {
            accelx += this.ACCELERATION;    // Increase right acceleration
        }

        this.setAcceleration(accelx, accely);
    }
}