import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa{
    private _matricula: string;

    constructor(cpf: string, nome: string){
        super(cpf, nome);
        this._matricula = ""
    }
}