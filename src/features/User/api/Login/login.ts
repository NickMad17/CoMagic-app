import supabase from "@/app/config/supabase.ts";
import User from "@/features/User/store/User.ts";

export const login = async (email: string, password: string) => {
    User.setLoading(true)
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
        .finally(() => {
            User.setLoading(false)
        })
    if (data) {
        localStorage.setItem('token', JSON.stringify(data.session))
        User.setUser(data.session)
    }
    if (error) {
        User.setUser(data.session, error.message)
    }
}
