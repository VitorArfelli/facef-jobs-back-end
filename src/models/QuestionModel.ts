import { ObjectId } from "mongodb";
import { Question } from "./common/Question";

export interface QuestionModel {
  cnpj: string,
  titulo: string,
  descricao: string,
  questoes?: Question[],
}
