import supabase from "@/app/config/supabase.ts";
import User from "@/features/User/store/User.ts";
import {userPostPublicDataBase} from "./userPostDataBase.ts";

export const registration = async (email: string, password: string, first_name: string, last_name: string) => {
    User.setLoading(true)
    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password
    })
        .finally(() => {
            User.setLoading(false)
        })
    if (data) {
        localStorage.setItem('token', JSON.stringify(data.session))
        User.setUser(data.session)
        setTimeout(() => {
            userPostPublicDataBase(data.user?.id, first_name, last_name)
        }, )
    }
    if (error) {
        User.setUser(data.session, error.message)
    }
}
