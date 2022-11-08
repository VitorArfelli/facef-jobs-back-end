import { ObjectId } from "mongodb";

export interface UserCompanyModel {
  _id: ObjectId,
  cnpj: string,
  email: string,
  nome: string,
  senha?: string,
  missao: string,
  visao: string,
  valores: string,
}
  