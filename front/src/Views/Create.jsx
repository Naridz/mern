import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const Create = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)

  const [product,setProduct]=useState('')
  const [company,setCompany]=useState('')
  const [price,setPrice]=useState('')

  const handleCreate = ()=>{
    const data={
      product,
      company,
      price
    };
    axios.post('http://localhost:3000/products',data)
    .then((response)=>{
      console.log(response)
      MySwal.fire({
        title: "Product Created Sucessfully !",
        icon: "success",
        timer: 1500
      });
      navigate('/')
    }).catch(error=>{
      console.log(error)
    })
  }

  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl mb-5'>Create Product</h1>
      {/* product*/}
    <label className="form-control w-full max-w-xs">
    <div className="label">
    <span className="label-text">Product</span>
    </div>
    <input type="text" placeholder="Type here"
    value={product} onChange={(e)=>setProduct(e.target.value)} 
    className="input input-bordered w-full max-w-xs" />
    </label>
    {/* company */}
    <label className="form-control w-full max-w-xs">
    <div className="label">
    <span className="label-text">Company</span>
    </div>
    <input type="text" placeholder="Type here"
    value={company} onChange={(e)=>setCompany(e.target.value)} 
    className="input input-bordered w-full max-w-xs" />
    </label>
    {/* Price */}
    <label className="form-control w-full max-w-xs">
    <div className="label">
    <span className="label-text">Price</span>
    </div>
    <input type="number" min='0' placeholder="Type here"
    value={price} onChange={(e)=>setPrice(e.target.value)} 
    className="input input-bordered w-full max-w-xs" />
    </label> 

    {product.length>0 && company.length>0 && price.length>0 ?
    <button className='btn hover:bg-success hover:text-black mt-2' 
    onClick={handleCreate} >Create</button>:
    <button className='btn hover:bg-success hover:text-black mt-2' 
    onClick={handleCreate} disabled >Create</button> }
    <Link to='/' className='btn ml-1 mt-2'>Back</Link>
    </div>
  )
}

export default Create