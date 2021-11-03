import React,{useState,useContext} from 'react'
 import { Card,Image } from 'semantic-ui-react'
 import { Link } from 'react-router-dom';
 import { cartContext } from '../Contex/CartContext.js';

 import ItemCount from '../ItemCount/ItemCount.js';


 const ItemDatail = ({data}) =>{ 
   
    const [cantProductos,setCantProductos]=useState(0);
    const [confirmar,setConfirmar] = useState(false)
    const {addItem} = useContext(cartContext);
    
    const onAdd =(cantidad)=>{
        setCantProductos(cantidad)
        setConfirmar(true)
        if (cantidad > 0) {
           addItem(data,cantidad)
        }

    }
      return(

        <Card className="">
          <Image className="" src={data.img} wrapped ui={false} />
          <Card.Content>
            <Card.Header className="">{data.title}</Card.Header>
            <Card.Meta>
              {/* <p>{data.category}</p> */}
              <span className=''>{data.price}</span>
            </Card.Meta>
            <Card.Description>
              {data.description}
            </Card.Description>
          </Card.Content>
              
          {confirmar? <Link to="/cart"><button className="btn_activo" >Confirmar Compra</button></Link> :<ItemCount stock="5" initial="1" onClick={(cantidad)=>onAdd(cantidad)}/>}
        </Card>
 )
 }
 export default ItemDatail