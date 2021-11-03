import React,{useState} from 'react';

const ItemCount = ({stock,initial,onClick}) => {

    const [contador,setContador] = useState(parseInt(initial));

    const incrementar = ()=>{
        if (contador < stock) {
            setContador(contador + 1)
        }  
    };
    
    const desIncrementar = ()=>{
        if (contador > 0 ) {
            setContador(contador - 1)
        }   
    };

    return (
        <div className="contenedorContador">
            <button className="btn" onClick={desIncrementar}>-</button>
            <p>{contador}</p>
            <button className="btn" onClick={incrementar}>+</button> 
            <button className="btn_activo" onClick={()=>onClick(contador)}>Agregar Carrito</button>
        </div>
    )
}
export default ItemCount;