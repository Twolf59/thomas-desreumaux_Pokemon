import {Type} from "../Interfaces/Type";

export abstract class TypeFeu implements Type{
    degats: number;

    constructor(degats: number) {
        this.degats = degats;
    }

    /**
     * Calculer degats attaque Feu contre Eau
     * @Return number
     */
    calculerDegatsContreEau(): number {
        return this.degats/2;
    }

    /**
     * Calculer degats attaque Feu contre Feu
     * @Return number
     */
    calculerDegatsContreFeu(): number {
        return this.degats;
    }

    /**
     * Calculer degats attaque Feu contre Plante
     * @Return number
     */
    calculerDegatsContrePlante(): number {
        return this.degats*2;
    }


}
