import {Link} from 'react-router-dom'
import './Header.css'

export default function Header(){
    return(
        <>
            <div className="container">
                <div className="content">
                
                <div className="nav">
                <a href="/" className="logo"><img src="src\assets\img\logo 1.png" alt="LOGO" /></a>
                    <p className='gap'>|</p>
                    <Link to="/" className="link">Главная</Link>
                    <Link to="/catalog" className="link">Каталог</Link>
                    <p className='gap'>|</p>
                    <Link to="#" className="link">Информация</Link>
                   
                </div>
                <div className="header_icons">
                    <a href="#" className="header_icon"><img src="src\assets\icons\lupa.png" alt="" /></a>
                    <a href="#" className="header_icon"><img src="src\assets\icons\cart.png" alt="" /></a>
                    <a href="#" className="header_icon"><img src="src\assets\icons\like.png" alt="" /></a>
                </div>
                </div>
                
            </div>
        </>
    )
}