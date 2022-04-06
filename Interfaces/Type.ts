
export interface Type {
    degats: number;
    calculerDegatsContreFeu(): number;
    calculerDegatsContrePlante(): number;
    calculerDegatsContreEau(): number;
}
