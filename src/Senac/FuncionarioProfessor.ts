import { Funcionario } from "./Funcionario";

export class FuncionarioProfessor extends Funcionario{
    private _titulacao: string;

    private constructor(cpf: string, nome: string){
        super(cpf, nome);
        this._titulacao = "";
    }

    static FabricaDeProfessor(cpf: string, nome: string): FuncionarioProfessor{
        return new FuncionarioProfessor(cpf, nome)
    }
}