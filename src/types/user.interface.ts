export interface IUser {
  id: number;
  name: string;
  email: string;
  phoneNo: string | number;
  actions: string;
  user : {
    fullName?: string;
    email?: string;
    mobile?: string;
    currency : string;
  };
  package : {
    package_name : string
  }
}
