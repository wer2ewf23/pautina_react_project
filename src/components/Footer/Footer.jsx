import './Footer.css'
import {Link} from 'react-router-dom'

export default function Footer(){
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
            
                </div>
                
            </div>
        </>
    )
}