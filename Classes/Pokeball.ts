import {Pokemon} from "../Interfaces/Pokemon";
import {Dresseur} from "./Dresseur";

export class Pokeball {
    private contient!: Pokemon;
    private proprietaire!: Dresseur;

    public getContenu(){
        console.log(`${this.contient.nom}`);
    }
}
