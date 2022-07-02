import React, { useEffect, useState } from 'react'
import { fetchUserData } from '../Api/AuthenticationService';
import * as BootStrap from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'
import { SiTiktok } from "react-icons/si";


function Footer() {
    const [data, setData] = useState({});
    const usenavigate = useNavigate()

    function refresh(){
        window.location.reload(false);
    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])

    const OrderUpdates = () =>{
        usenavigate("/orderupdate")
        window.location.reload(false);
    }

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_lc3a1or','template_it7jqmj',e.target,'0C3fg6Ghhl2fj0Jv4').then(response=>{
            alert("Subscribed For New Lauch Products Information")
        })
    }

    
    const RefundRequest = () =>{
        usenavigate("/refund")
        window.location.reload(false);
    }



    return (
        <div>
            <div>
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
                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                    <BootStrap.Button onClick={RefundRequest} variant="warning" type="submit">Refund Requests</BootStrap.Button>}
                                <div>----------------------------------------------------------------------------------------------------------------------------</div>
                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                    <BootStrap.Button onClick={OrderUpdates} variant="warning" type="submit">Order Updates</BootStrap.Button>}
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
                                            <a href="https://www.facebook.com/nike/"><i class="fab fa-facebook-f facebook-bg"></i></a>
                                            <a href="https://twitter.com/nikestore"><i class="fab fa-twitter twitter-bg"></i></a>
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
                                            <li><a onClick={refresh} href="/checking">Order Status</a></li>
                                            <li><a href="/delivery">Delivery</a></li>
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
                                            <form action="#" onSubmit={sendEmail}>
                                                <input name='user_email' type="text" placeholder="Email Address" />
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

export default Footer