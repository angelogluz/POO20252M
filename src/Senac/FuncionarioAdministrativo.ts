import { Funcionario } from "./Funcionario";
import { Pessoa } from "./Pessoa";

export class FuncionarioAdministrativo extends Funcionario{
    private _setor: string;

    constructor(cpf: string, nome: string){
        super(cpf, nome);
        this._setor = "";
    }
}