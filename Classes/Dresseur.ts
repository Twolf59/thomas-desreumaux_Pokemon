import {Pokeball} from "./Pokeball";
import {Pokemon} from "../Interfaces/Pokemon";

export class Dresseur {
    private _nom: string
    private _pokeballs!: Pokeball[];


    constructor(nom: string) {
        this._nom = nom;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    ajouterPokeballs(nombre: number): void {
        if(this._pokeballs.length < 6){

        }
    }

    capturer(cible: Pokemon): void {

    }

    getPokemon(){
        this._pokeballs.filter(index => {
            console.log("Liste des pokémons : " + index.getContenu() + "\r\n");
        })
    }
}
