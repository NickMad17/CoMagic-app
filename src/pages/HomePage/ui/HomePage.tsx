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
                    <div className='border' key={p.id}>
                        <h1>{p.id}</h1>
                        <h2 >{p.first_name}</h2>
                        <p>{p.last_name}</p>
                    </div>
                )
            })}
            {Products.error}
        </AppLayout>
    );
});

export default HomePage
