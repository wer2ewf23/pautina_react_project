import {products} from '../../data'
import {useParams} from 'react-router-dom'
import './CardPage.css'


export default function CardPage(){
    const {id} = useParams()

    const product = products.find(product => product.id === parseInt(id));

    return(
        <>
            <h1>{product.name}</h1>
            <p>Описание товара</p>
            <i>{product.price}</i>
        </>
    )
}