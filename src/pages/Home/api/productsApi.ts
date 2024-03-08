import supabase from "@/app/config/supabase.ts";
import Products from "@/pages/Home/store/products.ts";
export const getProducts = async () => {
        const {data, error} = await supabase
            .from('products')
            .select()

        if (data) {
            Products.setProducts(data)
        }
        if (error) {
            Products.setError(error.message)
        }
}
