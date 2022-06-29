import React from 'react';
import * as BootStrap from 'react-bootstrap';
import { SiNike } from "react-icons/si";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import "./Styles/Dashboard.css";
import "./Styles/Dashboard.scss";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DashboardService from './Services/DashboardService';
import { useState } from 'react';
import { fetchUserData } from '../Api/AuthenticationService'
import { BiLogOut } from "react-icons/bi";
import './Styles/DashboardAdd.css';
import Slider from "react-slick";
import OptionPageService from './Services/OptionPageService';
import Headers from '../Common/Headers';
import Footer from '../Common/Footer';
import Tees from '../Summer/Tees';
import Tops from '../Summer/Tops';









function Dashboard() {
    const [product, setProduct] = useState([]);
    const usenavigate = useNavigate();
    const [query, setQuery] = useState('');
    const [data, setData] = useState({});
    const [check, setCheck] = useState('');
    const [searchl, setSearchl] = useState([]);



    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,

    };



    

    console.log(check)

    console.log(data.username)

    localStorage.setItem("Userid",data.id)

    useEffect(() => {
        setCheck(data.username)
        getAllProduct();
        universalSearch();
        
    }, [])


    const universalSearch = () => {
        OptionPageService.allProducts().then((response) => {
            setSearchl(response.data);
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const getAllProduct = () => {
        DashboardService.getAllProducts().then((response) => {
            setProduct(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteProduct = (id) => {
        DashboardService.deleteByProductId(id).then((response) => {
            getAllProduct();
            alert("Product Deleted Successfully")
        }).catch(error => {
            console.log(error)
            alert("Something Went Wrong")
        })
    }

    const RefundRequest = () =>{
        usenavigate("/refund")
    }

    const OrderUpdates = () =>{
        usenavigate("/orderupdate")
    }



    React.useEffect(() => {
        fetchUserData().then((response) => {

            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])

    const Nextstep = (id) => {
        console.log(id);
        usenavigate('/nextstep/' + id);
    }
    console.log(data.username)

    function logout() {
        localStorage.clear();
        usenavigate('/')
    }

    const Options = (variable) => {
        console.log(variable);
        usenavigate('/section/' + variable);
    }
    const AllSection = (value) => {
        console.log(value)
        usenavigate('/section/' + value);
    }

    const MostPopular = (value) =>{
        usenavigate('/mostpopular/'+value);
    }


    return (
        <div className='body'>
            <Headers/>

            



            

            <div className='nikes'>

                <span class="parallax-text" text="NIKE">
                    NIKE
                </span>

                <img className="given" src="https://i.imgur.com/6DWEblv.png" alt="Nike sneaker" />
            </div>


            

            






            <div className='bodys'>
                <br />
                <div className='gradient-text'>WORK OUT IN STYLE<BootStrap.Card.Img className='c' variant="top"
                    src="https://www.insidehook.com/wp-content/uploads/2021/12/Nike-Cover-St.jpg?resize=1200%2C630"></BootStrap.Card.Img>

                </div>
                <button class="custom-btn btn-16" onClick={() => Options("mens training")}>SHOP MEN</button>
                <br />

            </div>

            <div className='adding'>
                <div className='bodysi'>
                    <div className='gradient-text'>EXPLORE THE NEW COLLECTIONS<BootStrap.Card.Img className='cardii' variant="top"
                        src="https://www.hellokpop.com/wp-content/uploads/2020/03/2020030401000261100015281.jpg"></BootStrap.Card.Img>
                    </div>
                    <button class="custom-btn btn-16" onClick={() => Options("womens training")}>SHOP WOMEN</button>
                </div>

                <div className='bodysii'>
                    <div className='gradient-text'>JOIN THE TREND NOW WITH NIKE<BootStrap.Card.Img className='cardi' variant="top"
                        src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/89b65736-e63c-4c18-9d26-4baac0c89963/simple-fun-workouts-for-kids.jpg"></BootStrap.Card.Img>
                    </div>
                    <button class="custom-btn btn-16" onClick={() => Options("kids training")}>SHOP KIDS</button>
                </div>
            </div>

            <div>
                <div className='jordan'>
                    <br></br>
                    <div className='popi'>POPULAR RIGHT NOW</div>
                    <div className='popularbut'>
                        <BootStrap.Button variant="outline-secondary" onClick={() => Options("Slides And Sandals")}>SLIDES AND SANDALS</BootStrap.Button>
                        <BootStrap.Button variant="outline-secondary" onClick={() => Options("T Shirt")}>T-SHIRTS AND SHORTS</BootStrap.Button>
                        <BootStrap.Button variant="outline-secondary" onClick={() => Options("Football")}>FOOTBALL</BootStrap.Button>
                        <BootStrap.Button variant="outline-secondary" onClick={() => Options("Sneakers")}>WHITE SNEAKERS</BootStrap.Button>
                        <BootStrap.Button variant="outline-secondary" onClick={() => Options("Socks")}>Socks</BootStrap.Button>
                    </div>
                    <br></br>
                </div>
             </div>

            
            <div className='jordan'>
            <div className='ko'>WHO ARE YOU SHOPPING FOR?</div>
            <br/>
            <BootStrap.Carousel>
                <BootStrap.Carousel.Item className='caro'>
                    <img
                        
                        style={{width:"30%"}}
                        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/yjmjfgvca8w01dcyzokk/sportswear-t-shirt-zmMkxS.png"
                        alt="First slide"
                    />
                    <BootStrap.Carousel.Caption>
                        <div className='ko'>For Mens</div>
                        <p></p>
                        <BootStrap.Button onClick={() => AllSection("Men's")} class="btns">Shop Now</BootStrap.Button>
                    </BootStrap.Carousel.Caption>
                </BootStrap.Carousel.Item>
                <BootStrap.Carousel.Item>
                    <img
                        
                        style={{width:"30%"}}
                        src="https://i8.amplience.net/t/jpl/jdau_product_list?plu=jd_392502_al&qlt=85&qlt=92&w=320&h=320&v=1&fmt=auto"
                        alt="Second slide"
                    />

                    <BootStrap.Carousel.Caption>
                        <h3 className='ko'>For Womens</h3>
                        <p></p>
                        <BootStrap.Button onClick={() => AllSection("Women's")}>Shop Now</BootStrap.Button>
                    </BootStrap.Carousel.Caption>
                </BootStrap.Carousel.Item>
                <BootStrap.Carousel.Item>
                    <img
                        style={{width:"30%"}}
                        src="https://i.pinimg.com/736x/f6/b8/28/f6b82892e20bed0b6b7740b76e4a7e1a.jpg"
                        alt="Third slide"
                    />

                    <BootStrap.Carousel.Caption>
                        <h3 className='ko'>For Kids</h3>
                        <p></p>
                        <BootStrap.Button onClick={() => AllSection("Kid's")}>Shop Now</BootStrap.Button>
                    </BootStrap.Carousel.Caption>
                </BootStrap.Carousel.Item>
            </BootStrap.Carousel>
            <br/>
            </div> 




            




            




            <div className='jordan'>
            
            <div className='design'>
            <div className='jordantitle'>Jordan Collaboration</div>
            <br/>
                    <div class="cards">
                    
                        <div class="cards-content">
                            <h2 class="cards-title">AIR JORDAN XXXVI LOW</h2>
                            <p class="cards-desc">New Infrared ReImagines The Vibrant Colorway Of The Iconic Jordan VI To Celebrate The Invisible Light</p>
                            <p class="cards-desc">Radiating Within The Game's Greatest Players</p>
                            <a href='/AirJordanXXXVI' class="btns">Shop</a>
                        </div>
                    </div>
            <br/>
                    <div class="cardss">
                        <div class="cardss-content">
                            <h2 class="cardss-title">GRAPHIC TEES</h2>
                            <p class="cardss-desc">Fresh Graphic Tees For The Summer(For Mens).</p>
                            <a onClick={() => MostPopular("Men's")} class="btns">Shop</a>
                        </div>
                    </div>
            <br/>
                    <div class="cardsss">
                        <div class="cardsss-content">
                            <h2 class="cardsss-title">TANK TOP READY</h2>
                            <p class="cardsss-desc">Get Fresh In Our Lighweight Tops(For Womens).</p>
                            <a onClick={() => MostPopular("Women's")} class="btns">Shop</a>
                        </div>
                    </div>       
                
                </div>
            </div>


            <div className="jordan">
                <div ><br /></div>
                <div className="jordan"></div>


                <div><br /></div>
            </div>

            

            <div className="jordan">
            <br/><br/><br/>
            <Tees/>
            

            <br/><br/><br/><br/>

            <Tops/>

            <br/><br/><br/><br/>
            </div>

            
           <Footer/>




        </div>
    )
}

export default Dashboard