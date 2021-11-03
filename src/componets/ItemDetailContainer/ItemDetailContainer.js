/* import React,{useEffect,useState} from 'react';
import axios from 'axios';

import ItemDetail from '../ItemDetail/ItemDetail.js';

const ItemDetailContainer = ({match}) => {

    let detaId = match.params.id;
    const [detalles,setDetalles]=useState([]);
    
    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${detaId}`).then(res => {setDetalles(res.data)})
        
    },[detaId])

    return (
        <ItemDetail data={detalles}/>
    )
}
export default ItemDetailContainer */