export type UserInfo = {
  token: string;
  username: string;
  password: string;
  address:
    | {
        street: string;
        houseNumber: string;
        city: string;
        zipCode: string;
      }
    | undefined;
};
