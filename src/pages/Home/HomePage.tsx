import {useEffect, useState} from "react";
import supabase from "@/app/config/supabase.ts";
import {AppLayout} from "@/shared";

interface Products {
    id: number;
    product: string | null;
    weight: string | null;
}

export const HomePage = () => {
    const [products, setProducts] = useState<Products[] | null>(null)
    useEffect(() => {
        const fetch = async () => {
            const {data, error} = await supabase
                .from('products')
                .select()

            if (error) {
                console.log(error)
            }
            if (data) {
                console.log(data)
                setProducts(data)
            }
        }
        fetch()
    }, []);

    return (
        <AppLayout>
            {products?.map(p => {
                return (
                    <h1 key={p.id}>{p.product}</h1>
                )
            })}
        </AppLayout>
    );
};

