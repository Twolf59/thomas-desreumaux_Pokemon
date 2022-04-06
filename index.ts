import {Dresseur} from "./Classes/Dresseur";
import {Bulbizarre} from "./Classes/Bulbizarre";
import {Salameche} from "./Classes/Salameche";

let d = new Dresseur("test");
let b = new Bulbizarre(100, 30);
let b2 = new Bulbizarre(100, 30);
let s = new Salameche(120, 30);

d.ajouterPokeballs();
d.ajouterPokeballs();
d.capturer(b2);
d.capturer(b);
d.getPokemons();
s.subirAttaque(b.attaquer(s));
