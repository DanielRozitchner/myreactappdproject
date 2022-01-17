import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import { getFetch } from "../helpers/getFetch"
import ItemList from '../ItemList/ItemList'
import { collection, getFirestore, getDocs, where, query } from 'firebase/firestore'
import { css } from "@emotion/react";
import { GridLoader } from 'react-spinners';

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCate } = useParams()
    
    useEffect(() => {
        if(idCate) {
        const db = getFirestore()
        const queryCollection = query(collection(db, 'productos'),where('category','==', idCate))
        getDocs(queryCollection)
        .then(resp => setProducts( resp.docs.map( prod=> ({ id: prod.id, ...prod.data() }) ) ) ) 
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    } else {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        getDocs(queryCollection)
        .then(resp => setProducts( resp.docs.map( prod=> ({ id: prod.id, ...prod.data() }) ) ) ) 
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))}
        

    },[idCate])
       
    return (
        <div className='container d-flex flex-column align-items-center'>
           
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



