import {Type} from "../Interfaces/Type";

export abstract class TypeEau implements Type{
    degats: number;

    constructor(degats: number) {
        this.degats = degats;
    }

    /**
     * Calculer degats attaque Eau contre Eau
     * @Return number
     */
    calculerDegatsContreEau(): number {
        return this.degats;
    }

    /**
     * Calculer degats attaque Eau contre Feu
     * @Return number
     */
    calculerDegatsContreFeu(): number {
        return this.degats/2;
    }

    /**
     * Calculer degats attaque Eau contre Plante
     * @Return number
     */
    calculerDegatsContrePlante(): number {
        return this.degats*2;
    }



}
