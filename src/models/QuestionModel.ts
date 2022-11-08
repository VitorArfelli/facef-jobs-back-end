import { ObjectId } from "mongodb";
import { Question } from "./common/Question";

export interface QuestionModel {
  _id: ObjectId,
  cnpj: string,
  titulo: string,
  descricao: string,
  questoes?: Question[],
}
