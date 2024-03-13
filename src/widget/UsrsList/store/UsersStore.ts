import {makeAutoObservable} from 'mobx'
import {IUserList} from ".././types/types.ts";



class UsersStore {
    users: IUserList[]  | null = null;
    error: string | null = null
    loading: boolean = true
    constructor() {
        makeAutoObservable(this);
    }

    setUsers(users:IUserList[]) {
        this.users = users
    }
    setError(error: string) {
        this.error = error
    }

    setLoading(loading:boolean) {
        this.loading = loading
    }
}

export default new UsersStore()
