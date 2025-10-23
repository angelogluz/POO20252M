import { Pessoa } from "./Pessoa";

export class Funcionario extends Pessoa{
    private _salario: number;

    constructor(cpf: string, nome: string){
        super(cpf, nome);
        this._salario = 0;
    }

    public falar(): string{
        return "Sou um Funcionário";
    }

    public acessarFalar(){
        console.log(super.falar())
    }
}