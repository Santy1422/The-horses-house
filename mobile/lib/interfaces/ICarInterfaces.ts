import { IUsuario } from "./IAuthInterfaces";

export interface ICar {
   id?: string;
   name: string;
   licensePlate: string;
   idUser: string | IUsuario;
}
