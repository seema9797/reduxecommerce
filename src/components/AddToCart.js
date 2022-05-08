import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deletCart } from './redux/action'

const AddToCart = () => {
  const check=useSelector((state)=>state.handleCart)
  const dispatch=useDispatch()

  const handleClose =(product)=>{
    dispatch(deletCart(product))
  }
  const cartItems =(cartItem)=>{
    return(
      <div className="px-4 my-5 rounded-3 addtocart" key={cartItem.id}>
      <div className="container py-4">
          <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" arial-label="Close"></button>
          <div className="row">
            <div className="col-md-4">
              <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px"/>
            </div>
            <div className="col-md-4">
               <h4 className="py-2 text-muted">{cartItem.title}</h4>
               <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
      </div>
   </div>
      )
  }
 const emptyCart=()=>{
  return (
    <>
     <div className='px-4 my-5 rounded-3 addtocart'>
       <div className='container py-4'>
            <div className='row'>
               <h3>Your Cart is Empty</h3>
            </div>
       </div>
     </div>
    </>
  )
 }
 var total=0;
const itemList=(item)=>{
  total=total+item.price;
return (
  <li className="list-group-item d-flex justify-content-between 1h-sm">
      <div>
        <h6 className="my-0">{item.title}</h6>
      </div>
      <span className="text-muted">${item.price}</span>
  </li>
)
}
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-7">
     {check.length === 0 && emptyCart()}
    {check.length !==0 && check.map(cartItems) }
    </div>
    <div className="col-md-4">
     <ul className="list-group liststyle">
       {check.map((itemList))}
         <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>${total}</strong>
         </li>
         <button className="btn btn-warning">Checkout</button>
     </ul>
     </div>
</div>
</div>
  )
}

export default AddToCart