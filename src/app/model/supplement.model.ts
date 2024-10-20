import { Nutritional } from "./nutritional.model";

export class Supplement {

    idSupplement? : number;
    nomSupplement? : string;
    prixSupplement? : number;
    dateCreation? : Date ;
    dosageSupplement? : Number;
    nutritional! : Nutritional;

    }
    