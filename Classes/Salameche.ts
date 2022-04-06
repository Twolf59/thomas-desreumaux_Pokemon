import {Pokemon} from '../Interfaces/Pokemon'
import {TypeFeu} from "./TypeFeu";

export class Salameche extends TypeFeu implements Pokemon {
    private _captif: boolean;
    private _horsJeu: boolean;
    private _nom: string;
    private _pv: number;
    private _pvMax: number;
    private _type: string;

    constructor(pvMax: number, degats: number) {
        super(degats);
        this._captif = false;
        this._horsJeu = false;
        this._nom = "Salamèche";
        this._pv = pvMax;
        this._pvMax = pvMax;
        this._type = "Feu";
    }

    /**
     * Attaquer un pokemon
     * @param cible: Pokemon
     */
    attaquer(cible: Pokemon): number {
        if(cible.type === "Plante"){
            return this.calculerDegatsContrePlante();
        }else if (cible.type === "Feu"){
            return this.calculerDegatsContreFeu();
        }else{
            return this.calculerDegatsContreEau();
        }
    }

    /**
     * Renommer un pokémon
     * @param nom: string
     */
    renommer(nom: string): void {
        this._nom = nom;
        console.log("Pokemon renommer : " + this._nom);
    }

    /**
     * Soigner un pokemon
     */
    soigner(): void {
        this._pv = this._pvMax;
        console.log("Pokémon soigné pv : " + this._pv);
    }

    /**
     * Faire subir une attaque à un pokémon cible
     * @param degats: number
     */
    subirAttaque(degats: number): void {
        if(this._horsJeu !== true){
            this._pv -= degats;
            console.log("Nombre de dégats : " + degats + " il reste " + this._pv + " pv à " + this._nom);
        }else{
            console.error("Le pokemon est hors jeu !");
        }
    }

    get captif(): boolean {
        return this._captif;
    }

    set captif(value: boolean) {
        this._captif = value;
    }

    get horsJeu(): boolean {
        return this._horsJeu;
    }

    set horsJeu(value: boolean) {
        this._horsJeu = value;
    }

    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    get pv(): number {
        return this._pv;
    }

    set pv(value: number) {
        this._pv = value;
    }

    get pvMax(): number {
        return this._pvMax;
    }

    set pvMax(value: number) {
        this._pvMax = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
}
