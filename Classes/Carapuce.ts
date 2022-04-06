import {TypeEau} from "./TypeEau";
import {Pokemon} from "../Interfaces/Pokemon";

export class Carapuce extends TypeEau implements Pokemon {
    captif: boolean;
    horsJeu: boolean;
    nom: string;
    pv: number;
    pvMax: number;
    type: string;

    constructor(degats: number, pvMax: number) {
        super(degats);
        this.captif = false;
        this.horsJeu = false;
        this.nom = "Carapuce";
        this.pv = 100;
        this.pvMax = pvMax;
        this.type = "Eau";
    }

    attaquer(cible: Pokemon): void {
    }

    renommer(nom: string): void {
        this.nom = nom;
    }

    soigner(): void {
        this.pv = this.pvMax;
    }

    subirAttaque(degats: number): void {
        if(this.horsJeu !== false){
            this.pv -= degats;
        }else{
            console.error("Le pokemon est hors jeu !");
        }
    }

}
