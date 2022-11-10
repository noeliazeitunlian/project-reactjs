import React, {useState, useEffect} from 'react';

import ItemList from '../ItemList';
import Title from '../Title';
import {useParams} from 'react-router-dom';

const products =[
    { id:1, image:"https://http2.mlstatic.com/D_NQ_NP_759270-MLA51507091088_092022-V.jpg", category: "nacionales", title:"Thor"},
    { id:2, image:"https://http2.mlstatic.com/D_NQ_NP_821805-MLA51356113943_082022-V.jpg", category: "importados", title:"Eleven"},
    { id:3, image:"https://ockam-cloud-thebest.imgix.net/imagenes-s/productos/funko-pop-batman-dark-knight-the-joker-36-85638.jpg?auto=format&w=260&h=281&fit=fill&fill=solid", category: "nacionales", title:"The Joker"},
];

export const ItemListContainer = ({ texto }) => {

    const [data, setData] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);

            },2000); //simulo una demora en la carga de la falsa base de datos
        
        });

        if(id){
            getData.then(res => setData(res.filter(product => product.category === id)));
        } else{
            getData.then(res => setData(res));
        }
    }, [id])


    const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
}


    return (
        <>
            <Title greeting={texto} />
            <ItemList data={data} />
        
        </>
    );
}

export default ItemListContainer;