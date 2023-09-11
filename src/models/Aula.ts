import Chamada from "./Chamada";
import Licao from "./Licao";

export default interface Aula {
  id: string;
  numero: number;
  data: string;
  professor: string;
  licao: Licao;
  chamada: Chamada[];
}
