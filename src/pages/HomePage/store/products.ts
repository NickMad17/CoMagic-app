import {makeAutoObservable} from 'mobx'

interface IProduct {
    id: number;
    product: string | null;
    weight: string | null;
}


class Products {
    products = null;
    error: string | null = null
    constructor() {
        makeAutoObservable(this);
    }

    setProducts(products) {
        this.products = products
    }
    setError(error: string) {
        this.error = error
    }
}

export default new Products()
