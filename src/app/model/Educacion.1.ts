export class Educacion {
  id?: number;
  school: string;
  title: string;
  comienzo: string;
  fin: string;
  img: string;
  enlace: string;

  constructor(
    school: string,
    title: string,
    comienzo: string,
    fin: string,
    enlace: string,
    img: string
  ) {

    this.comienzo = comienzo;
    this.enlace = enlace;
    this.fin = fin;
    this.img = img;
    this.school = school;
    this.title = title;
  }
}
