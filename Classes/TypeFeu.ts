import {Type} from "../Interfaces/Type";

export abstract class TypeFeu implements Type{
    degats: number;

    constructor(degats: number) {
        this.degats = degats;
    }

    calculerDegatsContreEau(): number {
        return this.degats = 30/2;
    }

    calculerDegatsContreFeu(): number {
        return this.degats = 30;
    }

    calculerDegatsContrePlante(): number {
        return this.degats = 30*2;
    }


}
