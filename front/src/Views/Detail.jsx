import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loadingicon from '../components/loadingicon'
import viteLogo from '/vite.svg'


const Detail = () => {

    const {id} = useParams();
    const [product,setProducts] = useState({})
    const [loading,setLoading] = useState(false)
    //Get by ID
    useEffect(()=>{
        setLoading(true)
        axios.get(`http://localhost:3000/products/${id}`)
        .then(response=>{
            setProducts(response.data)
            setLoading(false)
        }).catch(error=>{
            console.log(error)
            setLoading(false)
        })
    },[])

  return (
    <div className='container mx-auto my-8'>
        {loading?(<Loadingicon />):(
           <div className='flex flex-col border-2 border-stone-950 rounded-xl w-fit p-4'>
            <div className='my-4'>
                <div className='grid place-items-center'>
            <img src={viteLogo} className='size-60'></img>
                </div>
            <span className='text-xl mr-4 text-gray-500'>Id :</span>
            <span>{product._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Product :</span>
            <span>{product.product}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Company :</span>
            <span>{product.company}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Price : </span>
            <span>{product.price}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Description : </span>
            <span><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, impedit! Doloremque nisi ab assumenda iste sunt maxime, dolor ipsum repudiandae 
                quidem saepe doloribus debitis provident suscipit sapiente, hic voluptates ullam repellendus iure quod corrupti alias! 
                Quisquam dolor enim, odio inventore ipsa rerum? Eaque quas at ab architecto, accusantium fugiat velit in? Itaque, corrupti sunt. Consectetur quos aliquid repellat 
                sit consequatur illum nisi nulla commodi culpa voluptates velit quae, esse doloremque illo mollitia dolore fugiat eius modi incidunt, exercitationem qui. Laudantium 
                provident, tempora vitae, enim facere expedita sint nihil eos adipisci 
                quod optio suscipit nesciunt doloribus blanditiis? Nostrum, atque? Maxime, laborum.
                </p> </span>
          </div>
           </div>
        )}
        <Link to={'/'} className="btn btn-active my-5">Back</Link>
    </div>
  )
}

export default Detail