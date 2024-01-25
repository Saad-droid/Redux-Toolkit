import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonList from './SkeletonList';
export default function Products() {
    const [products, setProducts] = useState([]);
    const dispatch=useDispatch()
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchproducts = async () => {
            setLoading(true);
            const res = await fetch('https://fakestoreapi.com/products')
            
            const data = await res.json()
            .then(data => {
                setProducts(data);
                setLoading(false);
                });
            console.log(data)
        }
        fetchproducts()
    }, [])
    const handleAdd=(p)=>{
    dispatch(add(p))
    }
    // if (loading) {
    //     return (
    //         {loading ? <SkeletonList /> : <DataList data={data} />}
    //     )
    //   }
    console.log("saad",products.length)
    return (
       

        <div className='productsWrapper'>
            
                      {loading ? (
                        // Display the skeleton loader using react-loading-skeleton
                        <SkeletonList products={20}/>
                      ) : (
                
                products.map((p)=>(
                    <div className='card' key={p.id}>
                    <img src={p.image ||<Skeleton/>} alt=""></img>
                    <h4>{p.title}</h4>
                   <h5> Rs {p.price}</h5>
                   <button onClick={()=>handleAdd(p)} className='btn'>Add to cart</button>
                    </div>                        

                ))
    )}


        </div>
    )
}
