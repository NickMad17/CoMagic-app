export interface IUserList {
    id: string;
    first_name: string | null;
    last_name: string | null;
    description: string | null;
    age: number | null;
    status: string | null;
    gender: string | null;
    hobby: string[] | null;
    city: string | null
}
