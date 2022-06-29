import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as BootStrap from 'react-bootstrap';
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { SiNike } from "react-icons/si";
import { BiLogOut } from "react-icons/bi";
import '../Styles/ViewPage.scss'
import DashboardService from '../Services/DashboardService';
import { fetchUserData } from '../../Api/AuthenticationService';
import ReactPlayer from 'react-player';
import Headers from '../../Common/Headers';
import Footer from '../../Common/Footer';
import $ from 'jquery'


function MostPopular() {
    const usenavigate = useNavigate()
    const [data, setData] = useState({})
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [size, setSize] = useState('')
    const [userid, setUserid] = useState('')
    const [username, setUsername] = useState('')
    const [productname, setProductname] = useState('')
    const [image1, setImage1] = useState('')
    const [price, setPrice] = useState('')
    const [check, setCheck] = useState('')


    function logout() {
        localStorage.clear();
        usenavigate('/')
    }

    useEffect(() => {
        setUserid(data.id);
        setUsername(data.email)
        setProductname(product.productname)
        setImage1(product.productimage1)
        setPrice(product.productprice)
        setCheck(data.username);
    })





    console.log(userid, username, productname, image1, price, size)

    const handleClick = (e) => {
        e.preventDefault()
        if ((localStorage.getItem("USER_KEY")) && (check != "undefined")) {
            const check = { userid, username, productname, image1, price, size }
            if (size) {
                fetch("http://localhost:8080/charging/checkout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(check)
                }).then(() => {
                    console.log("Everything Went Perfect")
                    usenavigate("/checkout")
                }).catch(error => {
                    console.log("something went wrong")
                })
            } else {
                alert("Please Select Size Of The Product")
            }
        } else {
            usenavigate('/login')
        }
    }


    useEffect(() => {
        getting(id)

    }, [])

    const getting = (id) => {
        DashboardService.getByIds(id).then((response) => {
            setProduct(response.data)
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    $(document).ready(function() {
        $('.popup-btn').click(function(e) {
          $('.popup-wrap').fadeIn(500);
          $('.popup-box').removeClass('transform-out').addClass('transform-in');
      
          e.preventDefault();
        });
      
        $('.popup-close').click(function(e) {
          $('.popup-wrap').fadeOut(500);
          $('.popup-box').removeClass('transform-in').addClass('transform-out');
      
          e.preventDefault();
        });
      });





    return (
        <div className='bodyd'>

            <Headers />







            <div>

                <div class="containers">
                    <div className='carding'>

                        <BootStrap.Card.Img className='tre' variant="top" src={product.productimage1} />
                        <div className='vido'>
                            <ReactPlayer width={500} height={451} muted playing={true} url={product.productimage2} />
                        </div>


                        <div className='conenting'>
                            <div className="produ">{product.productname}</div>
                            <div>{product.category1}</div>
                            <div>₹{product.productprice}
                                <div>Includes All Taxes</div>

                            </div>
                            <img width="75" src={product.productimage3}></img>
                            <img width="75" className='kutti' src={product.productimage1}></img>
                            <img width="75" src='https://static.nike.com/a/images/t_PDP_144_v1/f_auto/6be5ac0f-7994-4774-8845-6680199ff47d/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png'></img>
                            <br />
                            <br />
                            <br />
                            <div>Size</div>
                            <button className='bus' onClick={(e) => setSize(product.size1)}>{product.size1}</button>
                            <button className='bus' onClick={(e) => setSize(product.size2)}>{product.size2}</button>
                            <div>---------------------------------</div>
                            <button className='bus' onClick={(e) => setSize(product.size3)}>{product.size3}</button>
                            <button className='bus' onClick={(e) => setSize(product.size4)}>{product.size4}</button>
                            <div>---------------------------------</div>
                            <button className='bus' onClick={(e) => setSize(product.size5)}>{product.size5}</button>

                        </div>
                    </div>
                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage3} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.productimage4} />
                        <div className='conentings'>
                            <BootStrap.Button className='bags' onClick={handleClick}><BsHandbag />Add to bag</BootStrap.Button>
                            <BootStrap.Button className='bags'><AiOutlineHeart />Favourite</BootStrap.Button>

                        </div>

                    </div>

                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage5} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.productimage6} />
                        <div className='conenting1'>
                        <div>{product.productdescription}
                        <div className='extra'>  
                            <button class="btn popup-btn" href="#">View Details</button>
                        </div></div>
                        
                        </div>
                        
                        <div></div>
                        
                        <div class="popup-wrap">
                            <div class="popup-box">
                                <h2>Product Details</h2>
                                <div>*Color Shown : {product.productspecification1}</div>
                                <br/>
                                <div>*Style: {product.productspecification2}</div>
                                <br/>
                                <div>Product Specifications</div>
                                <div>{product.productspecification3}</div>
                                <br/>
                                <div>Inspired Roads : {product.productspecification4}</div>
                                <br/>
                                
                                <a class="close-btn popup-close" href="#">x</a>
                            </div>
                        </div>
                        
                        <br/>  
                        
                        
                    </div>
                    
                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage7} />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src={product.productimage8} />
                        <div className='conenting'>
                            
                        </div>
                     




                       









                    </div>

                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src={product.productimage9} />

                        <div className='conenting'>

                        </div>
                    </div>
                </div>
            </div>


            <div className='explore'>Explore the Air Jordan XXXVI PF Basketball Shoes</div>
            <br /><br />
            <div className='explore'>
                <img width="1150" src={product.productimage10} />
            </div>
            <br /><br />
            <div className='explore'>Light Flex</div>
            <br />
            <div className='asd'>A minimal but durable Jacquard leno-weave upper paired with a</div>
            <div className='asd'>dynamic flexible tongue provides a lightweight fit and plush</div>
            <div className='asd'>comfort.</div>
            <br /><br /><br />
            <div className='explore'>
                <img width="1150" src={product.productimage11} />
            </div>
            <br /><br /><br />
            <div className='explore'>Light Feel, Big Energy</div>
            <br />
            <div className='asd'>A full-length Zoom Air Strobel unit is stitched directly to the</div>
            <div className='asd'>upper, sitting right under your foot to minimise weight. An</div>
            <div className='asd'>energy-returning Zoom Air unit is stacked underneath the</div>
            <div className='asd'>forefoot to add an extra burst of responsiveness off the dribble.</div>
            <br /><br /><br /><br />
            <div className='explore'>
                <img width="1150" src={product.productimage12} />
            </div>
            <br /><br /><br />
            <div className='explore'>Secure for Take-Off</div>
            <br />
            <div className='asd'>A 2-loop band system paired with high sidewalls provides side-</div>
            <div className='asd'>to-side stability, whether you're cutting off the ball on defence or</div>
            <div className='asd'>taking off to finish on offence.</div>
            <br /><br /><br /><br />



            <Footer />


        </div>
    )
}

export default MostPopular