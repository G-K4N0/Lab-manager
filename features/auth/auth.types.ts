export type Role = 'admin' | 'docente' | 'alumno';

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}