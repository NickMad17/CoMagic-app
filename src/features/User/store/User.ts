import {makeAutoObservable} from "mobx";


class User {
    data: any = null
    error:string | null | undefined= null
    constructor() {
        makeAutoObservable(this);
    }
    setUser(data: any, errorMessege?:string) {
        if (data.session !== null && data.user !== null && errorMessege == undefined ){
            this.data = data
        } else {
            this.error = errorMessege
        }
    }
}

export default new User()
