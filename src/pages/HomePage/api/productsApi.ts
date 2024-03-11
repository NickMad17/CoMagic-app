import supabase from "@/app/config/supabase.ts";
import Products from "../store/products.ts";
export const getProducts = async () => {
        const {data, error} = await supabase
            .from('profiles')
            .select('*')

        if (data) {
            console.log(data)
            Products.setProducts(data)
        }
        if (error) {
            Products.setError(error.message)
        }
}
