import { IUsuario } from "./IAuthInterfaces";

export interface IMetodosCallBack<A> {
   url: string;
   loading: (v: boolean) => void;
   error: (msg: string) => void;
   success: (res: A) => void;
}

export interface IAuthInicial {
   profile: IUsuario,
   authenticatedAuth: boolean,
   loadingAuth: boolean,
   errorAuth: string,
   successAuth: string,
}

export interface ISetBooleanAction {
   type: string;
   payload: boolean;
}

export interface ISetStringAction {
   type: string;
   payload: string;
}

export interface IGenericSetAction<A = any> {
   type: string;
   payload: A;
}