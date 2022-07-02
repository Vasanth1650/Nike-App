import React, { useEffect, useState } from 'react';
import Service from './SearchService.js/Service';
import * as BootStrap from 'react-bootstrap';
import TotService from './SearchService.js/TotService';
import Headers from '../Common/Headers';
import Footer from '../Common/Footer';

function AllSearch() {
    const [product, setProduct] = useState([])
    const [normal, setNormal] = useState([])
    const [query, setQuery] = useState("")
    
   


    let size = product.length + normal.length
    useEffect(()=>{
        
    },[size])

    console.log(size)


    useEffect(() => {
        findallproductsInProduct()
        findallproductsInTot()
    }, [])

    const findallproductsInProduct = () => {
        Service.getAllProducts().then((response) => {
            setProduct(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    const findallproductsInTot = () => {
        TotService.allProducts().then((response)=>{
            setNormal(response.data);
            console.log(response.data);
        }).catch((error)=>{
            console.log(error)
        })
    }






    return (
        <div>
        <Headers/>
            <div class="container">
                <div class="top-bar">
                    <div class="left-side">
                        <img id="main-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png"></img>
                        <input onChange={e => setQuery(e.target.value)} type="text" id="search-bar" placeholder="Search " />
                        <img id="mic" src="https://1.bp.blogspot.com/-lINg3E20_4Y/VebwdAy_MaI/AAAAAAAAFJU/8Jg2H-3-_cc/s1600/Microphone.png" />
                    </div>
                    <br />
                    <div class="right-side">
                        <ul>
                            <li id="nine-square"><a href="#"></a></li>
                            <li id="circle-bell"><a href="#"></a></li>
                            <li id="profile-pic"></li>
                        </ul>
                    </div>
                </div>
                <div class="scnd-bar">
                    <div class="scnd-left">
                        <ul class="nav-list">
                            <li><a id="active" href="#">All</a></li>
                            <li><a href="#">Product Name</a></li>
                            <li><a href="#">Category</a></li>
                            <li><a href="#">Gender</a></li>
                            <li><a href="#">Collections</a></li>
                        </ul>
                    </div>

                </div>
                <p id="num-results">About {size} products present (0.49 seconds)</p>
            </div>





            <div>
                {
                    product.filter(product => {
                        if (query === '') {
                            return null;
                        } else if (product.productname.toLowerCase().includes(query.toLowerCase())) {
                            size = (product.length)
                            return product;
                        } else if (product.category1.toLowerCase().includes(query.toLowerCase())) {
                            return product;
                        }else{
                            return product
                        }
                    }).map(product =>
                        <div>

                            <div class="search-results">
                                <h2><a href="#">{product.productname} ({product.category1})</a>
                                    <img className='productimage' style={{ width: 100 }} src={product.productimage1} />
                                    <div>₹{product.productprice}</div>
                                    <div>{product.size1} || {product.size2} || {product.size3}</div>
                                </h2>
                            </div>
                        </div>
                    )
                }
            </div>

            <div>
            {
                    normal.filter(normal => {
                        if (query === '') {
                            return null;
                        } else if (normal.productname.toLowerCase().includes(query.toLowerCase())) {
                            return normal;
                        } else if (normal.category1.toLowerCase().includes(query.toLowerCase())) {
                            return normal;
                        }else{
                            return normal;
                        }
                    }).map(normal =>
                        <div>

                            <div class="search-results">
                                <h2><a href="#">{normal.productname} ({normal.category1})</a>
                                    <img className='productimage' style={{ width: 100 }} src={normal.image1} />
                                    <div>₹{normal.price}</div>
                                    <div>{normal.size1} || {normal.size2} || {normal.size3}</div>
                                </h2>
                            </div>
                        </div>
                    )
                }

            </div>

            <Footer/>

        </div>
    )
}

export default AllSearch