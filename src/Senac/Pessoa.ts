export class Pessoa{
    protected _nome: string;
    protected _telefone: string;
    protected _cpf: string;
    protected _endereco: string;

    constructor(cpf: string, nome: string){
        this._cpf = cpf;
        this._endereco = "";
        this._nome = nome;
        this._telefone = "";
    }

    public falar(): string{
        return "Sou uma Pessoa"
    }
}