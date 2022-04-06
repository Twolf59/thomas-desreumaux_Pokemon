
export interface Pokemon {
    nom: string;
    pv: number;
    pvMax: number;
    type: string;
    captif: boolean;
    horsJeu: boolean;

    attaquer(cible: Pokemon): number;
    subirAttaque(degats: number): void;
    soigner(): void;
    renommer(nom: string): void;
}

