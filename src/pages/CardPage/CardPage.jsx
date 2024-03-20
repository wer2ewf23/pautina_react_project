import {catalog} from '../../data'
import {useParams} from 'react-router-dom'

export default function CardPage () {
    const {id} = useParams()
    
    const product = catalog.find(product => product.id === parseInt(id));

    return(
        <>

                        <div className="item">
                            <img src="src\assets\img\catalog\item_1.png" alt="" className="item_img" />
                            <h3 className="item_title">{product.name}</h3>
                            <div className="item_down">
                                <p className="item_price">{product.price}$</p>
                                <div className="item_icons">
                                    <a href="#" className="item_icon"><img src="src\assets\icons\item_like.png" alt="" /></a>
                                    <a href="#" className="item_icon"><img src="src\assets\icons\item_cart.png" alt="" /></a>
                                    <Link to={`${id}`}>Подробнее</Link>
                                </div>
                            </div>
                         </div>

            {/* <h1>{product.name}</h1>
            <p>Описание товара</p>
            <i>{product.price}$</i> */}
        </>
    )
}