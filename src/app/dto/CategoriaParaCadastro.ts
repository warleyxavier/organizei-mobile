export default class CategoriaParaCadastro {
  nome: string;
  porcentagemPrevista: number;
  valorPrevisto: number;
  tipo: string;

  constructor(nome: string, porcentagem: string, valorPrevisto: string) {
    this.nome = nome;
    this.porcentagemPrevista = Number(porcentagem);
    this.valorPrevisto = Number(valorPrevisto.toString().replace("R$", "").replace(".", "").replace(",", "."));
    this.tipo = "Despesa";    
  }
}