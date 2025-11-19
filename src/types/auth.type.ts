export interface LoginResponse {
  ID: number;
  Email: string;
  FirstName?: string;
  LastName?: string;
  Role: string;
}


export interface LoginInput {
  email: string;
  password: string;
}


