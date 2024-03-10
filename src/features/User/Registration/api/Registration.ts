import supabase from "@/app/config/supabase.ts";
import User from "@/features/User/store/User.ts";

export const registration = async (email: string, password: string) => {
    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password
    })
    if (data) {
        User.setUser(data)
        console.log(data)
    }
    if (error) {
        User.setUser(data, error.message)
    }
}
