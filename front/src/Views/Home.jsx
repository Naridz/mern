import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'
import Loadingicon from '../components/loadingicon'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Home = () => {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    const MySwal = withReactContent(Swal)


    //Get
    useEffect(()=>{
        setLoading(true)
        axios.get('http://localhost:3000/products')
        .then(response=>{
            setProducts(response.data)
            setLoading(false)
        })
        .catch(error=>{
            console.log(error)
            setLoading(false)
        });
    },[])

    //Delete
    const deleteHandler=(id)=>{
        axios.delete(`http://localhost:3000/products/${id}`)
        .then(()=>{
          MySwal.fire({
            title: "Product deleted successfully!",
            icon: "success"
          });
          setProducts(products.filter((u)=>u._id !== id))
        }).catch((error)=>{
          console.log(error)
        })  
    }
  return (
    <>
    <div className='container mx-auto'>
    <div className="overflow-x-auto">  
  <Link to={'/add'} className='btn btn-neutral me-5'>create</Link>   
  <table className="table my-5">
    {/* head */}
    <thead >
      <tr className='bg-primary-content'>
        <th>No.</th>
        <th>Product</th>
        <th>Company</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    {/* row 1 */}
      {loading?(<Loadingicon />):(
        <tbody>
          {products.map((product,i)=>(
            <tr key={product._id}>
            <th>{i+1}</th>
            <td>{product.product}</td>
            <td>{product.company}</td>
            <td>{product.price}</td>
            <td>
             <div className='btn-group'>
             <Link to={`/detail/${product._id}`} className="btn hover:bg-info hover:text-white mx-1" >Info</Link>
             <Link to={`/edit/${product._id}`}  className="btn hover:bg-secondary hover:text-white mx-1">EDIT</Link>
             <button className="btn hover:bg-error hover:text-white mx-1" onClick={()=>deleteHandler(product._id)} >DELETE</button>
             </div>
            </td>
          </tr>
          ))}
        
      </tbody>
      )}  
  </table>
  
</div> 
{products.length<1 && (
  <div className='flex flex-col items-center'>
  <h1 className='text-2xl'>Go to create !</h1>
  </div>
)}
    </div>
    </>
  )
}

export default Home