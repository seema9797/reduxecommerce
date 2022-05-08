import React,{useState,useEffect} from 'react'
import {Container,Card,CardBody} from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { useParams, } from 'react-router'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import {addCart,deletCart} from './redux/action/index'
const Product = () => {

const{id}=useParams();
const[product,setProduct]=useState([])
const[cartBtn,setCartBtn]=useState("Add to Cart")
const[loading,setLoading]=useState(false);

const dispatch=useDispatch()

const handleCart=(product)=>{
  if(cartBtn === "Add to Cart"){
    dispatch(addCart(product))
    setCartBtn("Remove from Cart")
  }
  else{
      dispatch(deletCart(product))
    setCartBtn("Add to Cart")
  }
}
const removeProduct=(product)=>{
  dispatch(deletCart(product))
}
const addProduct=(product)=>{
   dispatch(addCart(product));
}
   
useEffect(()=>{
  const getProduct = async ()=>{
    setLoading(true);
    const response=await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json())
    setLoading(false)
  }

  getProduct()
  console.log(getProduct)
},[])

const Loading =()=>{
return (
    <>
   <div className="col-md-6">
   <Skeleton height={400}/>
   </div>
   <div className="col-md-6" style={{lineHeight:2}}>
   <Skeleton height={50} width={300}/>
   <Skeleton height={75}/>
   <Skeleton height={25} width={150}/>
   <Skeleton height={50}/>
   <Skeleton height={150}/>
   <Skeleton height={50} width={100}/>
   <Skeleton height={50} width={100} style={{marginLeft:6}}/>
   </div>
    </>
  )
}
  return (
    <> 
 {loading ? <Loading/> :
   <Container className="productde py-5"> 
   <div className="col-md-6">
      <img src={product.image} alt={product.title}
        height="400px" width="400px"
      />
      </div>
      <div className='col-md-6'>
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">Rating {product.rating && product.rating.rate}
            <i className='fa fa-star'></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <div className='d-grid'>
              <button className="btn btn-warning d-md-block" onClick={()=>handleCart(product )}>{cartBtn}</button>
          
          </div>
      </div>
     </Container>
 }

   
</>
  
  )
}

export default Product