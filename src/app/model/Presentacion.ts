export class Presentacion {
  id?: number;
  backImage: string;
  imgProfile: string;
  name: string;
  study: string;
  curse: string;
  ubi: string;

  constructor(
    imgProfile: string,
    name: string,
    study: string,
    backImage: string,
    ubi: string,
    curse: string
  ) {
    this.backImage = backImage;
    this.name = name;
    this.curse = curse;
    this.imgProfile = imgProfile;
    this.study = study;
    this.ubi = ubi;
  }
}
