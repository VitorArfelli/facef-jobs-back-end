import { Question } from "./Question";

export interface Candidacy {
    idVaga: string,
    cnpj: "",
    questoes: Question[],
}
  
