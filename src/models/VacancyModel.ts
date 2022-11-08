import { ObjectId } from "mongodb";
import { StatusVaga } from "./common/StatusVaga";

export interface VacancyModel {
    _id: ObjectId,
    cnpj: string,
    cargo: string,
    descricao: string,
    requisitosDaFuncao: string,
    diferenciais: string[],
    salario: number,
    psi: string,
    dataDaPublicacao: Date,
    dataDeCriacao: Date,
    dataDeAceitacao: Date,
    dataDeEncerramento: Date,
    status: StatusVaga,
}
  