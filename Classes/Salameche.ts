import {Pokemon} from '../Interfaces/Pokemon'
import {TypeFeu} from "./TypeFeu";

export class Salameche extends TypeFeu implements Pokemon {
    captif: boolean;
    horsJeu: boolean;
    nom: string;
    pv: number;
    pvMax: number;
    type: string;

    constructor(pvMax: number, degats: number) {
        super(degats);
        this.captif = false;
        this.horsJeu = false;
        this.nom = "Salamèche";
        this.pv = 100;
        this.pvMax = pvMax;
        this.type = "Feu";
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
