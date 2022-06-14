import React from 'react'
import '../Styles/DetailedPage.css';
import '../Styles/DetailedPage.scss';
import * as BootStrap from 'react-bootstrap';
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { SiNike } from "react-icons/si";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import OptionPageService from '../Services/OptionPageService';
import { useState } from 'react';
import $ from 'jquery';
import { fetchUserData } from '../../Api/AuthenticationService';
import { BiLogOut } from "react-icons/bi";






function DetailedPage() {
    const { option } = useParams()
    const [product, setProduct] = useState([])
    const [gentle,setGentle] = useState([])
    const [check,setCheck] = useState('')
    const [data,setData] = useState({})


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
        setCheck(data.username)
        getByCategory(option);
        getByGender(option);
    }, [])

    function logout(){
        localStorage.clear();
        usenavigate('/')
    }

    const getByGender = (option) =>{
        OptionPageService.findByGender(option).then((response)=>{
          setGentle(response.data);
          console.log(response.data);
        }).catch(error=>{
          console.log(error)
        })
    }

    const getByCategory = (option) => {
        OptionPageService.findByCategory(option).then((response) => {
            setProduct(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    

    const Nextstep=(id)=>{
      console.log(id);
      usenavigate('/nextsteps/'+id);
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


            <BootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <BootStrap.Container>
                    <BootStrap.Navbar.Brand href="/dashboard"><SiNike /></BootStrap.Navbar.Brand>
                    <BootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <BootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <BootStrap.Nav className="me-auto">
                            <BootStrap.Nav.Link href="#features">MEN</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href="#pricing">WOMEN</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href="#pricing">KIDS</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href="#pricing">SPORTS</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href="#pricing">BRANDS</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href="#pricing">COLLECTIONS</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href="#pricing">OUTLET</BootStrap.Nav.Link>

                        </BootStrap.Nav>
                        <BootStrap.Nav.Link href="#pricing" className='dum'><div>Profile<AiOutlineUser /></div></BootStrap.Nav.Link>
                        <BootStrap.Nav.Link href="#pricing" className='dum'><div>Liked<AiOutlineHeart /></div></BootStrap.Nav.Link>
                        <BootStrap.Nav.Link href="#pricing" className='dum'><div>Bag<BsHandbag /></div></BootStrap.Nav.Link>
                        <BootStrap.Nav.Link onClick={()=>logout()} className='dum'><div>LogOut<BiLogOut /></div></BootStrap.Nav.Link>
                        <BootStrap.Form className="d-flex">
                            <BootStrap.FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <BootStrap.Button variant="outline-warning">Search</BootStrap.Button>
                        </BootStrap.Form>
                    </BootStrap.Navbar.Collapse>
                </BootStrap.Container>
            </BootStrap.Navbar>



            <br/> 

            <div>
            <div >
                <BootStrap.Row xs={1} md={4} >
                    {
                        product.map(product =>
                            <BootStrap.Col>
                                <div className='items'>
                                    <BootStrap.CardGroup>
                                        <BootStrap.Card >
                                            <BootStrap.Card.Img variant="top" src={product.image1} />
                                            <BootStrap.Card.Body>
                                                <BootStrap.Card.Text style={{color:"red"}}>
                                                    {product.gender}
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>
                                                <BootStrap.Card.Text>
                                                    {product.category}
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Text>
                                                    {product.price}
                                                </BootStrap.Card.Text>
                                            </BootStrap.Card.Body>
                                            <BootStrap.Button onClick={()=> Nextstep(product.id)}>
                                                Buy Now
                                            </BootStrap.Button>
                                        </BootStrap.Card>
                                    </BootStrap.CardGroup>
                                    <br />
                                </div>
                            </BootStrap.Col>

                        )
                    }
                </BootStrap.Row>
            </div>
            </div>


            <div>
            <div >
                <BootStrap.Row xs={1} md={4} >
                    {
                        gentle.map(gentle =>
                            <BootStrap.Col>
                                <div className='items'>
                                    <BootStrap.CardGroup>
                                        <BootStrap.Card >
                                            <BootStrap.Card.Img variant="top" src={gentle.image1} />
                                            <BootStrap.Card.Body>
                                                <BootStrap.Card.Text style={{color:"red"}}>
                                                    {gentle.gender}
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                <BootStrap.Card.Text>
                                                    {gentle.category}
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Text>
                                                    {gentle.price}
                                                </BootStrap.Card.Text>
                                            </BootStrap.Card.Body>
                                            <BootStrap.Button onClick={()=> Nextstep(gentle.id)}>
                                                Buy Now
                                            </BootStrap.Button>
                                        </BootStrap.Card>
                                    </BootStrap.CardGroup>
                                    <br />
                                </div>
                            </BootStrap.Col>

                        )
                    }
                </BootStrap.Row>
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



        </div>


    )
}

export default DetailedPage