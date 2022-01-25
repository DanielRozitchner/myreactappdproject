import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { collection, getFirestore, getDocs, where, query } from 'firebase/firestore'
import { css } from "@emotion/react";
import { GridLoader } from 'react-spinners';
import "./ItemListContainer.css";

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { idCate } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = idCate ? 
            query(collection(db, 'productos'),where('category','==', idCate))
        :
            query(collection(db, 'productos'))
       
        getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map( prod=> ({ id: prod.id, ...prod.data() }) ) ) )
            .finally(()=> setLoading(false))
        },[idCate])
    
        return (
        <div className='container d-flex flex-column align-items-center listContainer'>
            <h1>{greeting} </h1>
            {loading ?
            <h2><GridLoader css={css} /></h2>
            :
            <div className='row row-cols-4'> 
                <ItemList products={products} />
            </div>
            }
        </div>
        )
    }
export default  ItemListContainer



