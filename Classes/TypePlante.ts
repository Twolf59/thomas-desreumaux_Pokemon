import {Type} from "../Interfaces/Type";

export abstract class TypePlante implements Type{
    degats: number;

    constructor(degats: number) {
        this.degats = degats;
    }

    calculerDegatsContreEau(): number {
        return 0;
    }

    calculerDegatsContreFeu(): number {
        return 0;
    }

    calculerDegatsContrePlante(): number {
        return 0;
    }

}
