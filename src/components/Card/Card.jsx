import {Link} from 'react-router-dom'
// import {Link} from '../Button/Button'


export default function Card({name,price,id}) {
    return(
        <>
            <div className="item">
            <img src="src\assets\img\catalog\item_1.png" alt="" className="item_img" />
                            <h3 className="item_title"> {name} </h3>
                            <div className="item_down">
                                <p className="item_price"> {price}$</p>
                                <div className="item_icons">
                                    <a href="" className="item_icon"><img src="src\assets\icons\item_like.png" alt="" /></a>
                                    <a href="" className="item_icon"><img src="src\assets\icons\item_cart.png" alt="" /></a>
                                    <Link to={`${id}`}>Подробнее</Link>
                                </div>
                            </div>
            </div>
        </>
    )
}