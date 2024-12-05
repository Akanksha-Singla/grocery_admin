export interface ILogin{
    email:string|null;
    password:string|null;

}
export interface IToken {
    token: string;
    message: string;
    statuscode: number;
    success: boolean;
    _id: string;
    role: string;
    refreshToken:string | ""
  }
  