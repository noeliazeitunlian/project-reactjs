import React, {useEffect, useState} from 'react';

import ItemDetail from '../ItemDetail';
import {useParams} from 'react-router-dom';


const products =[
   { id: 1, price:100, image:"https://http2.mlstatic.com/D_NQ_NP_759270-MLA51507091088_092022-V.jpg", category: "nacionales", title:"Thor"},
   { id: 2, price: 120, image:"https://http2.mlstatic.com/D_NQ_NP_821805-MLA51356113943_082022-V.jpg", category: "importados", title:"Eleven"},
   { id: 3, price:500, image:"https://ockam-cloud-thebest.imgix.net/imagenes-s/productos/funko-pop-batman-dark-knight-the-joker-36-85638.jpg?auto=format&w=260&h=281&fit=fill&fill=solid", category: "nacionales", title:"The Joker"},
];

export const ItemDetailContainer = () => {

   const [data, setData] = useState ({});
   const {detailId} = useParams();

   useEffect(() => {

      const getData = new Promise (resolve => {
         setTimeout(() => {
            resolve(products);
         }, 2000);
      });

      getData.then(res => setData(res.find(product => product.id === parseInt(detailId))));
   }, [])

   return(
      <ItemDetail data = {data} />

   ); 
}

export default ItemDetailContainer;