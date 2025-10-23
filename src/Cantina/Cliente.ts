export class Cliente {
    private _nome: string;
    private _telefone: string;

    constructor(n: string, t: string) {
        this._nome = n;
        this._telefone = t;
    }

    //  public getNome(){
    //      return this.nome;
    //  }
    public get nome(): string {
        console.log("O nome foi acessado em ", new Date());
        return this._nome;
    }
    public set nome(nome: string) {
        if (nome.length < 3 || nome.length > 20) {
            throw new Error("Nome Inválido");

        }
        this._nome = nome;
    }
    public set telefone(tel: string) {
        
        this._telefone = tel;
    }

    atualizarTelefone(novoTelefone: string) {
        const ehTelefoneValido = this.validarTelefone(novoTelefone);
        if (ehTelefoneValido) {
            this.telefone = novoTelefone;
        } else {
            throw new Error("Telefone Inválido")
        }
    }
    /**
     * Método que valida um telefone
     * @param telefone Telefone a ser validado
     * @returns true se o telefone é válido e false se não for
     */
    validarTelefone(telefone: string): boolean {
        return telefone.length === 11;
    }

    criarCliente(nome: string, telefone: string): Cliente {
        if (nome.length < 3) {
            throw new Error("Nome inválido");
        }
        this.nome = nome;
        this.telefone = telefone;
        return this;
    }
}