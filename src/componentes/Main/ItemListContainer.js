import React, { useEffect, useState } from "react";
import { products } from "../../helpers/products";
import ItemList from "./ItemList";


const ItemListContainer = ({saludo}) => {
    const [items,setItems] = useState([]);
    
    useEffect(() => {
        const getProducts = () => {
            return new Promise((res,rej) => {
                setTimeout(() => {
                    res(products);
                }, (2000));
            });
        };
        getProducts()
            .then((res) =>{
                setItems(res);
            })
            .catch((error)=> {
                console.log(error)
            })
    }, []);

console.log(items)

    return(
        <div  className="container container-page">
            <h2>{saludo}</h2>
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer
