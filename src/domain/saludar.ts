import { IUsuarioDomain } from "../interface/domain/IUsuarioDomain";

export function concatenarSaludo (nombre:IUsuarioDomain): String {
    return `Hola ${nombre.name}`
};
