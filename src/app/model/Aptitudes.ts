export class Aptitudes{

  id?: number;
  name: string;
  valor: string;
  valorALF: string;
  color: string;

  constructor(name: string, valor: string, valorALF: string, color: string) {
    this.name = name;
    this.valor = valor;
    this.valorALF = valorALF;
    this.color = color;
  }
}
