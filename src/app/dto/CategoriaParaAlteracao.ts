export default class CategoriaParaAlteracao {
  nome: string;
  porcentagemPrevista: number;
  valorPrevisto: number;

  constructor(nome: string, porcentagem: string, valorPrevisto: string) {
    this.nome = nome;
    this.porcentagemPrevista = Number(porcentagem);
    this.valorPrevisto = Number(valorPrevisto.toString().replace("R$", "").replace(".", "").replace(",", ".")); 
  }
}