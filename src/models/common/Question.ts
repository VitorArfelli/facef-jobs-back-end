import { TipoDado } from "./TipoDado";

export interface Question {
    tipoDado: TipoDado,
    questao: string,
    descricao: string,
    resposta?: string,
}
