//oop - abstraction

//idea
//implemention pore korbo

/*
1.interface
2.abstraction
*/

interface Mediaplayer {
  play(): void;
  pause(): void;
  stop(): void;
}

class MusicPlayer implements Mediaplayer {
  play(): void {
    console.log("music play");
  }
  pause(): void {
    console.log("music play break");
  }
  stop(): void {
    console.log("music play stopeed");
  }
}

const music1 = new MusicPlayer();
// music1.stop()

//abstraction
abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class ShahadatPlayer extends MediaPlayer {
    play(): void {
        console.log("playing music...");
    }
    pause(): void {
        console.log("music paused !");
    }
    stop(): void {
        console.log("music stopped !");
    }
}

const shahadatPlayer =new ShahadatPlayer()
shahadatPlayer.play()