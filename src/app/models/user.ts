export interface Roles{
    estudiante?: boolean;
    docente?: boolean;
}
export interface UserInterface{
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    roles: Roles;
}