export class SmartPhone {
    id: number;
    brand: string;
    model: string;
    image: string;
    video: string;
  
    constructor( id: number,
        brand: string,
        model: string,
        image: string,
        video: string) {
      this.id = id;
      this.brand = brand;
      this.model = model;
      this.image = image;
      this.video = video;
    }
  }
  