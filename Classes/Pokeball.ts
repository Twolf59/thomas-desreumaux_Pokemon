import {Pokemon} from "../Interfaces/Pokemon";
import {Dresseur} from "./Dresseur";

export class Pokeball {
    private _contient!    : Pokemon;
    private _proprietaire!: Dresseur;

    constructor(contient: Pokemon, proprietaire: Dresseur) {
        this._contient     = contient;
        this._proprietaire = proprietaire;
    }

    get proprietaire(): Dresseur {
        return this._proprietaire;
    }

    set proprietaire(value: Dresseur) {
        this._proprietaire = value;
    }

    /**
     * Récupère le nom du pokémon contenu
     */
    public getContenu(): void {
        console.log(`${this._contient.nom}`);
    }

    /**
     * Récupère le contenu
     */
    get contient(): Pokemon {
        return this._contient;
    }

    /**
     * Affecter un pokémon dans la pokéball
     * @param pokemon: Pokemon
     */
    public affecter(pokemon: Pokemon): void {
        this._contient = pokemon;
        console.log("Pokemon" + pokemon + " ajouté")
    }
}
