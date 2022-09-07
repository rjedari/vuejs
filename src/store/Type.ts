// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace statics {
  export interface staticData {
    number: number;
    value: number;
    title: string;
    subtitle: string;
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Authentication {
  export interface User {
    id?: number;
    first_name?: string;
    last_name?: string;
    avatar?: string;
    password?: number;
    fullName?: string;
    email?: string;
    phone?: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
    deletdAt?: string | Date;
    phoneVerifiedAt?: string | Date;
    emailVerifiedAt?: string | Date;
  }
  export interface UserState {
    item?: User;
    items?: Array<User>;
    current_page: number;
    last_page:number;
  }
}
