import { Conteudo } from "./Conteudo";
import { GenericModel } from "./GenericModel";
import { Unidade } from "./Unidade";

export class Aula extends GenericModel{
    private _unidade: Unidade;
    private _conteudos: Conteudo[];

    constructor(){
        super();
        this._unidade = new Unidade();
        this._conteudos = [];
    }
}