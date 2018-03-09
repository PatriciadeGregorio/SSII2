export class Juego {
  game: string;
  description: string;
  imageURL: string;
  infoImage: string;
  canWatch: boolean;
  leftTime: number;
  videoURL: string;
  id: string;

  constructor(game: string, description: string, imageURL: string, infoImage: string, canWatch: boolean,
    leftTime: number, videoURL: string) {
    this.game = game;
    this.description = description;
    this.imageURL = imageURL;
    this.infoImage = infoImage;
    this.canWatch = canWatch;
    this.leftTime = leftTime;
    this.videoURL = videoURL;
  }
}
