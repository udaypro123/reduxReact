import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { actionCreator } from '../redux/ActionCreater'

const Product = () => {

  const dispatch = useDispatch()
  const {products}=useSelector((storedata)=>storedata)
  useEffect(()=>{
   if(products.length===0){
    fetch("https://fakestoreapi.com/products").then((res)=>(res.json())).then((data)=>{
     
    dispatch(actionCreator(data))

  })
   }
  },[])
  return (
    <>
     <div className='productpage'>
        
        <div className='firstpannel'>
        <h2>product page</h2>
        </div>
        
        <div className='secpannel'>
         {
          <div className='productmaindiv'>
     {
      products.length>0 ? <div className='card'>
        {
          products.map((ele,i)=>{
              return (
                <>
                <div className='cardcontent' key={i}>
                  <img src={ele.image} alt="" />

                  <p>{ele.category}</p>
                  <p>$ {ele.price} </p>
                 
                  <button>item details</button>
               
                </div>
                </>
              )
          })
        }
      </div>: <h2>no data</h2>

     }

    </div>
         }
        </div>

        </div>
      
    </>
  )
}

export default Product
