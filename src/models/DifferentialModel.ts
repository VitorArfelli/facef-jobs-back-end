import { ObjectId } from "mongodb";

export interface DifferentialModel {
  _id: ObjectId,
  descricao: string,
  segmento: string,
}
