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
import OptionPage from '../Services/OptionPageService';
import { useState } from 'react';
import $ from 'jquery';
import { fetchUserData } from '../../Api/AuthenticationService';
import { BiLogOut } from "react-icons/bi";
import '../Styles/ViewPage.scss'
import Headers from '../../Common/Headers';
import Footer from '../../Common/Footer';






function ViewingPage() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [check, setCheck] = useState('')
    const [data, setData] = useState({})
    const [userid,setUserid] = useState('')
    const [username,setUsername] = useState('')
    const [productname,setProductname] = useState('')
    const [image1, setImage1] = useState('')
    const [price,setPrice] = useState('')
    const [size,setSize] = useState('')
    
    console.log("Hi",size)

   

    const handleClick = (e) =>{
        e.preventDefault()
        const checkouts = {userid,username,productname,image1,price,size}
        if(size){
        fetch("http://localhost:8080/charging/checkout",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(checkouts)
        }).then(()=>{
            console.log("Everything Went Perfect")
            usenavigate("/checkout")
        }).catch(error=>{
            console.log("something went wrong")
        })
    }else{
        alert("Please Select Size Of The Product")
    }

    }
    
    
    $(".size").on('click', function () {
        $(this).toggleClass('focus').siblings().removeClass('focus');
    })



    

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

    useEffect(()=>{
        setUserid(data.id);
        setUsername(data.email)
        setProductname(product.productname)
        setImage1(product.image1)
        setPrice(product.price)
    })

    useEffect(() => {
        setCheck(data.username)
        getById(id);
        
    }, [])

    function logout() {
        localStorage.clear();
        usenavigate('/')
    }

    const getById = (id) => {
        OptionPage.productbyID(id).then((response) => {
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
            


            <div class="containers">
                <div className='carding'>

                    <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image1} />

                    <BootStrap.Card.Img className='imgBx1' variant="top" src={product.image2} />
                    <div className='conenting'>
                        <div className="produ">{product.productname}</div>
                        <div>{product.category1}</div>
                        <div>₹{product.price}
                            <div>Includes All Taxes</div></div>
                        <br />
                        <br />
                        <br />
                        <div>Size</div>
                        <button className='bus' value={product.size1} onClick={(e)=>setSize(product.size1)} validate>{product.size1}</button>
                        <button className='bus' value={product.size2} onClick={(e)=>setSize(product.size2)}>{product.size2}</button>
                        <div>---------------------------------</div>
                        <button className='bus' value={product.size3} onClick={(e)=>setSize(product.size3)}>{product.size3}</button>
                        <button className='bus' value={product.size4} onClick={(e)=>setSize(product.size4)}>{product.size4}</button>
                        <div>---------------------------------</div>
                        <button className='bus' value={product.size5} onClick={(e)=>setSize(product.size5)}>{product.size5}</button>

                    </div>
                </div>
                <div className='carding'>

                    <BootStrap.Card.Img className='imgBxs' variant="top" src={product.image3} />
                    <BootStrap.Card.Img className='imgBx1' variant="top" src={product.image1} />
                    <div className='conenting'>
                    <BootStrap.Button className='bags' onClick={handleClick}><BsHandbag />Add to bag</BootStrap.Button>
                    <BootStrap.Button className='bags'><AiOutlineHeart/>Favourite</BootStrap.Button>
                    </div> 
                </div>
                            
            </div>
            <div className='desc'>Description</div>
            <div className='des'>{product.productdescription}</div>
            <br/>
            <div className='des'>★ Color Shown : {product.productspecification1}</div>
            <div className='des'>★ Color Shown : {product.productspecification2}</div>


            
            




            <br></br>
            

            <br />
            <br />




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









            <br />

            <Footer/>



        </div>


    )
}

export default ViewingPage