import { Aula } from "./Aula";
import { GenericModel } from "./GenericModel";

export class Conteudo extends GenericModel{

    private _aula: Aula;
    private _url: string;

    constructor(){
        super();
        this._url = "";
        this._aula = new Aula();
    }

}