import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonList from './SkeletonList';

const ProductButtons = ({ product, quantity, onAdd, onRemove }) => (
    <div>
        {quantity > 0 ? (
            <>
                <button onClick={() => onRemove(product)} className='btn'>
                    -
                </button>
                <span>{quantity}</span>
                <button onClick={() => onAdd(product)} className='btn'>
                    +
                </button>
            </>
        ) : (
            <button onClick={() => onAdd(product)} className='btn'>
                Add to cart
            </button>
        )}
    </div>
);
export default function Products() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const [index, setIndex] = useState(null)
    const [modal, setModal] = useState(false)
    const [selectedQuantities, setSelectedQuantities] = useState({});
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
    const handleRemove = (p) => {
        // Dispatch a remove action if quantity is greater than 0
        if (selectedQuantities[p.id] > 0) {
            dispatch(remove(p.id));
            setSelectedQuantities({
                ...selectedQuantities,
                [p.id]: selectedQuantities[p.id] - 1,
            });
        }
    };
    const handleAdd = (p) => {
        dispatch(add(p));
        setSelectedQuantities({
            ...selectedQuantities,
            [p.id]: (selectedQuantities[p.id] || 0) + 1,
        });
    };

    // if (loading) {
    //     return (
    //         {loading ? <SkeletonList /> : <DataList data={data} />}
    //     )
    //   }
    console.log("saad", products.length)
    const handleModal = (index) => {
        setModal(!modal)
        setIndex(index)
    }
    return (


        <div className='productsWrapper'>
            {loading ? (
                <SkeletonList products={20} />
            ) : (
                products.map((p, index) => (
                    <div className='card' key={p.id}> 
                        <img src={p.image || <Skeleton />} onClick={()=>handleModal(index)} alt=""></img>
                        <h4>{p.title}</h4>
                        <h5> Rs {p.price}</h5>
                        <ProductButtons
                            product={p}
                            quantity={selectedQuantities[p.id] || 0}
                            onAdd={handleAdd}
                            onRemove={handleRemove}
                        />
                        <br />
                       
                    </div>
                ))
            )}
            {modal && (
                <div className='modal-container'>
                    <div className='modal-content'>
                        {products[index] && (
                            <div>
                                <h3 >{products[index].title}</h3>
                                <h3 className='titl'>{products[index].description}</h3>
                                <h3>
                                    Rating: {products[index].rating.rate} by {products[index].rating.count} people
                                </h3>
                            </div>
                        )}
                        <button className='modal-close' onClick={() => setModal(false)}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
