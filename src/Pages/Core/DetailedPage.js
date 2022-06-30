import React from 'react'
import '../Styles/DetailedPage.css';
import '../Styles/DetailedPage.scss';
import * as BootStrap from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DashboardService from '../Services/DashboardService';
import { useState } from 'react';
import $ from 'jquery';
import { fetchUserData } from '../../Api/AuthenticationService';
import {useCart} from "react-use-cart";
import Headers from '../../Common/Headers';
import Footer from '../../Common/Footer';







function DetailedPage() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [check,setCheck] = useState('')
    const [data,setData] = useState({})
    const[userid,setUserid]= useState('')
    const[productid,setProductid] = useState({id})
    const[productname,setProductname] = useState('')
    const[image1,setImage1] = useState('')
    const[username,setUsername] = useState('')
    const[clone,setClone] = useState('')
    const {addItems} = useCart()
    
    console.log("Price",clone)

    const handleClick = (e) =>{
        e.preventDefault()
        const adddetails = {userid,username,productid,productname,image1}
        fetch("https://nike-backend.herokuapp.com/wishlist/addwishlist",{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(adddetails)
        }).then(()=>{
            console.log("Wishlist added")
        })
    }



    


    useEffect(()=>{
        if(!localStorage.getItem("USER_KEY")){
            localStorage.clear();
            usenavigate('/')
        }
    })

    useEffect(()=>{
        if(check==="undefined"){
            usenavigate('/')
        }
    },[])

    const usenavigate = useNavigate()

    var emojis = ['😠', '😦', '😑', '😀', '😍'];

    $("input").mousemove(function () {
        var i = $(this).val();
        $(".emoji").html(emojis[i]);
    });

    $(document).ready(function () {
        $('.bar span').hide();
        $('#bar-five').animate({
            width: '75%'
        }, 1000);
        $('#bar-four').animate({
            width: '35%'
        }, 1000);
        $('#bar-three').animate({
            width: '20%'
        }, 1000);
        $('#bar-two').animate({
            width: '15%'
        }, 1000);
        $('#bar-one').animate({
            width: '30%'
        }, 1000);

        setTimeout(function () {
            $('.bar span').fadeIn('slow');
        }, 1000);

    });

    useEffect(() => {
        setUsername(data.username)
        setUserid(data.id)
        setProductname(product.productname)
        setProductid(product.id)
        setClone(product.productprice)
        setImage1(product.productimage1)
        setCheck(data.username)
        getById(id);
    },[data.username,data.id,product.productname,product.productid,product.productimage1,product.productprice])

    function logout(){
        localStorage.clear();
        usenavigate('/')
    }

    const getById = (id) => {
        DashboardService.getByIds(id).then((response) => {
            setProduct(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    


    

    console.log(data.username)


    return (
        <div className='bodyd'>
            <Headers/>

            

            



            <div className='image'>
                <BootStrap.CardGroup>
                    <BootStrap.Card>
                        <BootStrap.Card.Img variant="top" src={product.productimage1}/>
                    </BootStrap.Card>
                    <BootStrap.Card>
                        <BootStrap.Card.Img variant="top" src={product.productimage2} />
                    </BootStrap.Card>
                    <BootStrap.Card>
                        <BootStrap.Card.Img variant="top" src={product.productimage3} />
                    </BootStrap.Card>
                </BootStrap.CardGroup>
            </div>





            <br></br>
            <div className='marigi'>
                <div className='bla'>{product.productname}</div>
                <div className='bla'>{product.productprice}(includes all taxes)</div>
                <br />
                <div className='sizechart'>
                    <BootStrap.Form.Select aria-label="Default select example">
                        <option>Size Chart</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </BootStrap.Form.Select>
                </div>
                <br />
                <form action='/checkout'>
                <button >BUY</button>
                </form>

                
                
                <br />
                <div>
                    <button className='bus' onClick={() => addItems(product)}>Add To Favourite</button>
                </div>
                <br />
                <div className='bla'>Product Description</div>
                <br/>
                <div className='bla'>
                    {product.productdescription}
                </div>
                <br/>
                <div className='bla'>Product Specifications</div>
                <br/>
                <div className='bla'>
                    {product.productspecification}
                </div>

            </div>

            <br/>
            <br/>




            <div>
                <div class="container">
                    <div class="inner">
                        <div class="rating">
                            <span class="rating-num">4.0</span>
                            <div class="rating-stars">
                                <span><i class="active icon-star"></i></span>
                                <span><i class="active icon-star"></i></span>
                                <span><i class="active icon-star"></i></span>
                                <span><i class="active icon-star"></i></span>
                                <span><i class="icon-star"></i></span>
                            </div>
                            <div class="rating-users">
                                <i class="icon-user"></i> 1,014,004 total
                            </div>
                        </div>

                        <div class="histo">
                            <div class="five histo-rate">
                                <span class="histo-star">
                                    <i class="active icon-star"></i> 5           </span>
                                <span class="bar-block">
                                    <span id="bar-five" class="bar">
                                        <span>566,784</span>&nbsp;
                                    </span>
                                </span>
                            </div>

                            <div class="four histo-rate">
                                <span class="histo-star">
                                    <i class="active icon-star"></i> 4           </span>
                                <span class="bar-block">
                                    <span id="bar-four" class="bar">
                                        <span>171,298</span>&nbsp;
                                    </span>
                                </span>
                            </div>

                            <div class="three histo-rate">
                                <span class="histo-star">
                                    <i class="active icon-star"></i> 3           </span>
                                <span class="bar-block">
                                    <span id="bar-three" class="bar">
                                        <span>94,940</span>&nbsp;
                                    </span>
                                </span>
                            </div>

                            <div class="two histo-rate">
                                <span class="histo-star">
                                    <i class="active icon-star"></i> 2           </span>
                                <span class="bar-block">
                                    <span id="bar-two" class="bar">
                                        <span>44,525</span>&nbsp;
                                    </span>
                                </span>
                            </div>

                            <div class="one histo-rate">
                                <span class="histo-star">
                                    <i class="active icon-star"></i> 1           </span>
                                <span class="bar-block">
                                    <span id="bar-one" class="bar">
                                        <span>136,457</span>&nbsp;
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="rate">
                    <div class="emoji">😀</div>
                    <input type="range" min="0" max="4" step="1" />
                </div>
                    <div>
                        <div class="detailBox">
                            <div class="titleBox">
                                <label>Comment Box</label>
                                <button type="button" class="close" aria-hidden="true">&times;</button>
                            </div>
                            <div class="commentBox">

                                <p class="taskDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                            <div class="actionBox">
                                <ul class="commentList">
                                    <li>
                                        <div class="commenterImage">
                                            <img src="http://placekitten.com/50/50" />
                                        </div>
                                        <div class="commentText">
                                            <p class="">Hello this is a test comment.</p> <span class="date sub-text">on March 5th, 2014</span>

                                        </div>
                                    </li>
                                    <li>
                                        <div class="commenterImage">
                                            <img src="http://placekitten.com/45/45" />
                                        </div>
                                        <div class="commentText">
                                            <p class="">Hello this is a test comment and this comment is particularly very long and it goes on and on and on.</p> <span class="date sub-text">on March 5th, 2014</span>

                                        </div>
                                    </li>
                                    <li>
                                        <div class="commenterImage">
                                            <img src="http://placekitten.com/40/40" />
                                        </div>
                                        <div class="commentText">
                                            <p class="">Hello this is a test comment.</p> <span class="date sub-text">on March 5th, 2014</span>

                                        </div>
                                    </li>
                                </ul>
                                <form class="form-inline" role="form">
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="Your comments" />
                                    </div>
                                    <div class="form-group">
                                        <button class="btn btn-default">Add</button>
                                    </div>
                                    
                                </form>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>


            <br/>

            <div className='foot'>
            <footer class="footer-section">
                    <div class="container">
                        <div class="footer-cta pt-5 pb-5">
                            <div class="row">
                                <div class="col-xl-4 col-md-4 mb-30">
                                    <div class="single-cta">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <div class="cta-text">
                                            <h6>FIND A STORE</h6>
                                            <h6>BECOME A MEMBER</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-4 mb-30">
                                    <div class="single-cta">
                                        <i class="fas fa-phone"></i>
                                        <div class="cta-text">
                                            <h6>SIGN UP FOR EMAIL</h6>
                                            <h6>SEND US FEEDBACK</h6>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-md-4 mb-30">
                                    <div class="single-cta">
                                        <i class="far fa-envelope-open"></i>
                                        <div class="cta-text">
                                            <h6>STUDENT DISCOUNT</h6>
                                            <h6>ABOUT NIKE</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-content pt-5 pb-5">
                            <div class="row">
                                <div class="col-xl-4 col-lg-4 mb-50">
                                    <div class="footer-widget">
                                        <div class="footer-logo">
                                            <a href="index.html"><img src="https://img.etimg.com/thumb/msid-59738997,width-640,resizemode-4,imgsize-21421/nike.jpg" class="img-fluid" alt="logo" /></a>
                                        </div>
                                        <div class="footer-text">
                                            <p>Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. The company is
                                                headquartered near Beaverton, Oregon, in the Portland metropolitan area.</p>
                                        </div>
                                        <div class="footer-social-icon">
                                            <span>Follow us</span>
                                            <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                            <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                                            <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                                    <div class="footer-widget">
                                        <div class="footer-widget-heading">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul>
                                            <li><a href="#">Order Status</a></li>
                                            <li><a href="#">Delivery</a></li>
                                            <li><a href="#">Returns</a></li>
                                            <li><a href="#">Payment Options</a></li>
                                            <li><a href="#">Contact Us On Nike.com Inquiries</a></li>
                                            <li><a href="#">Contact Us On All Other Inquiries</a></li>
                                            <li><a href="#">News</a></li>
                                            <li><a href="#">Careers</a></li>
                                            <li><a href="#">Investors</a></li>
                                            <li><a href="#">Sustainability</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                                    <div class="footer-widget">
                                        <div class="footer-widget-heading">
                                            <h3>Subscribe</h3>
                                        </div>
                                        <div class="footer-text mb-25">
                                            <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                        </div>
                                        <div class="subscribe-form">
                                            <form action="#">
                                                <input type="text" placeholder="Email Address" />
                                                <button><i class="fab fa-telegram-plane"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="copyright-area">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                                    <div class="copyright-text">
                                        <p>Copyright &copy; 2022, All Right Reserved <h>Nike</h></p>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                                    <div class="footer-menu">
                                        <ul>
                                            <li><a href="#">Guides</a></li>
                                            <li><a href="#">Terms of Sale</a></li>
                                            <li><a href="#">Terms of Use</a></li>
                                            <li><a href="#">Nike Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            <Footer/>

        </div>


    )
}

export default DetailedPage