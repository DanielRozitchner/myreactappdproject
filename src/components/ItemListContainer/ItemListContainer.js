import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import { getFetch } from "../helpers/getFetch"
import ItemList from '../ItemList/ItemList'
import { collection, getFirestore, getDocs, where, query } from 'firebase/firestore'

function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCate } = useParams()

    // useEffect(() => {
    //     if (idCate) {
    //     getFetch
    //     .then(resp => setProductos(resp.filter(prod => prod.categoria === idCate)))
    //     .catch(err => console.log(err))
    //     .finally(() => setLoading(false))

    //     } else {
    //     getFetch
    //     .then(resp => setProductos(resp))
    //     .catch(err => console.log(err))
    //     .finally(() => setLoading(false))
    // }
    // },[idCate])


    
    useEffect(() => {
        if(idCate) {
        const db = getFirestore()
        const queryCollection = query(collection(db, 'productos'),where('categoria','==', idCate))
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map( prod=> ({ id: prod.id, ...prod.data() }) ) ) ) 
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    } else {
        const db = getFirestore()
        const queryCollection = collection(db, 'productos')
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map( prod=> ({ id: prod.id, ...prod.data() }) ) ) ) 
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))}
        

    },[idCate])
       
    return (
        <div>
            {greeting} 
            {loading ?
            <h2>Cargando...</h2>
            :
            <ItemList productos={productos} />
            }
        </div>
        )
    }
export default  ItemListContainer



