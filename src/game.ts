import Phaser from "phaser";
import MainScene from "./mainScene";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scale: {
        mode: Phaser.Scale.ENVELOP,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    fps: {
        target: 12,
        forceSetTimeOut: true,
    },
    backgroundColor: "#0000000",
	physics:{
		default: 'arcade',
		arcade:{
			gravity: {y: 200},
			debug:false
		},
	},
    scene: [MainScene],
};

export default new Phaser.Game(config)
