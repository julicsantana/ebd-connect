import Aluno from "./Aluno";

export default interface Turma {
  nome: string;
  alunos: Aluno[];
  aulas: any;
}
