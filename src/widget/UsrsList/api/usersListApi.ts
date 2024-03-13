import supabase from "@/app/config/supabase.ts";
import Products from "../store/UsersStore.ts";
import UsersStore from "../store/UsersStore.ts";

export const getUsersList = () => {
    UsersStore.setLoading(true)
    const fetch = async () => {
        const {data, error} = await supabase
            .from('profiles')
            .select('*')
        if (data) {
            Products.setUsers(data)
        }
        if (error) {
            Products.setError(error.message)
        }
    }

    fetch().finally(() => UsersStore.setLoading(false))
}
