import { ICar } from './ICarInterfaces';

export interface IUsuario {
   id?: string;
   uid: string;
   firstName: string;
   lastName: string;
   cellphone: string;
   email: string;
   picProfile: string;
   privileges: 'user' | 'admin' | 'banned' | 'restricted' | 'none';
   token: IToken | string;
   cars: ICar[] | string[];
}

export interface IToken {
   id?: string;
   name: string;
   token: string;
   idUser: string | IUsuario;
}
