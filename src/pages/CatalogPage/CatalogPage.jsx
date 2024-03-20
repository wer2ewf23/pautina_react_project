import Card from '../../components/Card/Card'
import {catalog} from '../../data'
import './CatalogPage.css'
import {useState} from 'react'

export default function Catalog(){

    const[query,setQuery] = useState("")

    function search (e){
        setQuery(e.target.value)
    }
    const filterdProdcts = catalog.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))

    return(
        <>
            <div className="catalog_container">
                <div className="catalog_content">
                    <div className="category_header">
                        <span className='category_span'><a href="" className="">Все</a></span>
                        <a href="" className="category">Топ</a>
                        <a href="" className="category">Низ</a>
                        <a href="" className="category">Обувь</a>
                    </div>
                    <div className="catalog">

                    <input onChange={search} type="search" name="search" placeholder="Поиск" />
                        
                        {
                        filterdProducts.length ?
                        filterdProducts.map((card,index) => {
                            // catalog.map((card,index) => {
                                return(
                                    <Card key={index} {...card}/>
                                )
                            // })
                        })
                        
                        :
                        <h2>По запросу "{query}" ничего не найдено</h2>
                        }

                        {/* {
                    products.map((product,index) => {
                        return(
                            <Card key={index} {...product} />
                        )
                    })
                }                 */}
                
                    </div>
                </div>
            </div>
        </>
    )
}