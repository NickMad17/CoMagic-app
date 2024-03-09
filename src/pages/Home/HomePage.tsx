import {AppLayout} from "@/shared";
import {getProducts} from "@/pages/Home/api/productsApi.ts";
import Products from "@/pages/Home/store/products.ts";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";

interface Products {
    id: number;
    product: string | null;
    weight: string | null;
}

export const HomePage = observer(() => {
    useEffect(() => {
        getProducts()
    }, []);

    return (
        <AppLayout>
            {Products.products?.map(p => {
                return (
                    <h1 key={p.id}>{p.product}</h1>
                )
            })}
            {Products.error}
        </AppLayout>
    );
});

