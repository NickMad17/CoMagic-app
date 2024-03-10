import {AppLayout} from "@/shared";
import {getProducts} from "../api/productsApi.ts";
import Products from "../store/products.ts";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";

 const HomePage = observer(() => {
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

export default HomePage
