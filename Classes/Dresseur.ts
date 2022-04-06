import {Pokeball} from "./Pokeball";
import {Pokemon} from "../Interfaces/Pokemon";

export class Dresseur {
    private _nom: string
    private _pokeballs: Pokeball[] = [];

    constructor(nom: string) {
        this._nom = nom;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    /**
     * Ajoute une pokéball das l'inventaire pour un maximum de 6
     */
    public ajouterPokeballs(): void {
        if(this._pokeballs.length < 6){
            this._pokeballs.push(new Pokeball(null, this));
            console.log("Pokéball ajoutée !");
        }else{
            console.log("Inventaire plein !");
        }
    }

    /**
     * Capturer un pokémon
     * @param cible: Pokemon
     */
    capturer(cible: Pokemon): void {
        try{
            this._pokeballs.map(pokeball => {
                if(!pokeball.contient){
                    pokeball.affecter(cible);
                    console.log("Félicitation " + cible.nom + " à été capturé !");
                }
            })
        }catch{
            console.error("Pas de pokéballs");
        }
    }

    /**
     * Récupère la liste des pokémons capturés
     */
    public getPokemons(): void{
        console.log("Liste des pokémons : ");
        let cpt = 1;
        this._pokeballs.map(pokeball => {
            console.log("Pokeball " + cpt + " " + pokeball.contient.nom + "\r\n");
            cpt++;
        })
    }
}
