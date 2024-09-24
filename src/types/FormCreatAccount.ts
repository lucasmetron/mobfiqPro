export interface FormCreatAccount {
  name: string;
  midleName: string;
  email: string;
  cpf: number | null;
  birthday: string;
  phone: string;
  gen: 0 | 1 | 2;
}
