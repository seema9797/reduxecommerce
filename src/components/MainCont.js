import React,{useState,useEffect} from 'react'
import {Container,Card,CardBody} from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

import './index.css'
import Product from './Product';
import AddToCart from './AddToCart'
const MainCont = () => {
    const[data,setData]=useState([])
    const[filterval,setFilter]=useState(data);
    const [loading,setLoading]=useState(false);
    const[sortType,setSortType]=useState([])
    const[searchval,setSearch]=useState("")
    let componentMounted=true
    const state=useSelector((state)=>state?.handleCart)

  useEffect(()=>{
    const getProduct=async()=>{
      setLoading(true);
      const response=await fetch("https://fakestoreapi.com/products");
      if(componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(getProduct)
      }
      return ()=>{
        componentMounted=false;
      }
    }
    getProduct()
  },[])
 
 useEffect(()=>{
   const sortArray=type=>{
     const types={
       price:'price',
       title:"title"
     }
     const sortProperty=types[type];
     const sorted=[...filterval].sort((a,b)=>b[sortProperty]-a[sortProperty])
     setFilter(sorted)
   };
   sortArray(sortType)
 },[sortType])
  const filterProduct=(cat)=>{
      const updateList=data.filter((x)=>x.category ===cat)
      setFilter(updateList)
  }
  const Loading =()=>{
    return (
      <>
      <div className="subcard1">
        <Skeleton className='' height={350}/>
      </div>
      <div className="subcard1">
        <Skeleton className=''height={350}/>
      </div>
      <div className="subcard1">
        <Skeleton className=''height={350}/>
      </div>
      <div className="subcard1">
        <Skeleton className=''height={350}/>
      </div>
      </>
    )
  }
  return (
  <div className=''>
      <div className="mainback">
  <h3>Latest Product</h3>
  </div>
  <div>
     <div className="mainmut">
         {loading ? <Loading/> :
                <ul className="mutibtn">
                <li><button onClick={()=>setFilter(data)}>All</button></li>
                <li><button onClick={()=>filterProduct("men's clothing")}>Men's clothing</button></li>
                <li><button onClick={()=>filterProduct("women's clothing")}>Women clothing</button></li>
                <li><button onClick={()=>filterProduct("jewelery")}>Jwelery</button></li>
                <li><button onClick={()=>filterProduct("electronics")}>Electronic</button></li>
             
            </ul>
         }
     
     </div>
  </div>

  <div className="inputflex">
    <div class="inputflex1">
    <span class="fa fa-search form-control-feedback serach"></span>
    <input type="text" className="" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search"/>
  </div>
  <div className='inputflex1'>
  <select className='selectfield'onChange={(e)=>setSortType(e.target.value)}>
   <option value="title">Select</option>
   <option value="price">highest to lowest</option>
  
  </select>
  </div>
  </div>
  
  <Container className='subcard'>

  {filterval.filter((item)=>{
    if(searchval == ""){
      return item
    }else if(item.title.toLowerCase().includes(searchval.toLowerCase()) || String(item.price).toLowerCase().includes(searchval.toLowerCase())){
      return item
    }
  }).map((product)=>(
  <Card className="subcard1" key={product.id}>
      <img src={product.image} alt={product.title} height="250px"/>
      <p>{product.title.substring(0,12)}</p>
      <h3>${product.price}</h3>
     <Link to={`/Product/${product.id}`}> <button className="btn btn-pink">Buy now</button></Link>
  </Card>
   ))}
  </Container>
 

  </div>
  )
}

export default MainCont