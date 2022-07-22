export class Proyectos {
  id?: number;
  name: string;
  comienzo: string;
  fin: string;
  about: string;
  urlGitHub: string;
  textUrlGitHub: string;
  urlProyecto: string;
  textUrlProyecto: string;

  constructor(
   name: string,
  comienzo: string,
  fin: string,
  about: string,
  urlGitHub: string,
  textUrlGitHub: string,
  urlProyecto: string,
  textUrlProyecto: string
  ) {
    this.name = name;
    this.comienzo = comienzo;
    this.fin = fin;
    this.about = about;
    this.urlGitHub = urlGitHub;
    this.textUrlGitHub = textUrlGitHub;
    this.urlProyecto = urlProyecto;
    this.textUrlProyecto = textUrlProyecto;
  }
}
