import React, { useEffect, useState } from 'react'
import * as BootStrap from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { SiNike } from "react-icons/si";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { fetchUserData } from '../Api/AuthenticationService';
import { BiLogOut } from "react-icons/bi";
import './Header.css';
import { SiJordan } from "react-icons/si";
import './Header.scss';
import $ from 'jquery';
import { BsSearch } from "react-icons/bs";





function Headers() {
    const usenavigate = useNavigate();
    const [query, setQuery] = useState('');
    const [data, setData] = useState({});

    const AllSection = (value) => {
        console.log(value)

        usenavigate('/section/' + value);
        window.location.reload(false);
    }



    function logout() {
        localStorage.clear();
        window.location.reload(false);
        usenavigate('/')

    }

    React.useEffect(() => {
        fetchUserData().then((response) => {

            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    function popupOpenClose(popup) {

        /* Add div inside popup for layout if one doesn't exist */
        if ($(".wrapper").length == 0) {
            $(popup).wrapInner("<div class='wrapper'></div>");
        }

        /* Open popup */
        $(popup).show();

        /* Close popup if user clicks on background */
        $(popup).click(function (e) {
            if (e.target == this) {
                if ($(popup).is(':visible')) {
                    $(popup).hide();
                }
            }
        });

        /* Close popup and remove errors if user clicks on cancel or close buttons */
        $(popup).find("button[name=close]").on("click", function () {
            if ($(".formElementError").is(':visible')) {
                $(".formElementError").remove();
            }
            $(popup).hide();
        });
    }

    $(document).ready(function () {
        $("[data-js=open]").on("click", function () {
            popupOpenClose($(".popup"));
        });
    });


    
    $(document).ready(function () {
        $('.popup-btn').click(function (e) {
            $('.popup-wrap').fadeIn(500);
            $('.popup-box').removeClass('transform-out').addClass('transform-in');

            e.preventDefault();
        });

        $('.popup-close').click(function (e) {
            $('.popup-wrap').fadeOut(500);
            $('.popup-box').removeClass('transform-in').addClass('transform-out');

            e.preventDefault();
        });
    });

    

    return (
        <div>
            <BootStrap.Navbar className='bg'>
                <BootStrap.Container className='cont'>
                    <BootStrap.Navbar.Brand href="#home"><SiJordan /></BootStrap.Navbar.Brand>
                    {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                        <BootStrap.Button href='dashboard/add' className='gradient-text'>ADD</BootStrap.Button>}
                    <BootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <div className='navtext'>
                            <BootStrap.Nav.Link data-js="open" class="container" className='navtext'>Help</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href='/subscription' className='navtext1'>JoinUs</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link className='navtext2' href='/login'>SignIn</BootStrap.Nav.Link>
                        </div>
                    </BootStrap.Navbar.Collapse>
                </BootStrap.Container>
            </BootStrap.Navbar>
            <BootStrap.Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <BootStrap.Container>
                    <BootStrap.Navbar.Brand href="/"><SiNike /></BootStrap.Navbar.Brand>
                    <BootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <BootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <BootStrap.Nav className="me-auto">
                            <BootStrap.Nav.Link onClick={() => AllSection("Men's")} >MEN</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link onClick={() => AllSection("Women's")} >WOMEN</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link onClick={() => AllSection("Kids's")} >KIDS</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link onClick={() => AllSection("Sport's")}>SPORTS</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link onClick={() => AllSection("Jordan")} >JORDAN</BootStrap.Nav.Link>
                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                <BootStrap.Button href="/allsection/mainadd" variant="warning" type="submit">ADD PRODUCTS</BootStrap.Button>}


                        </BootStrap.Nav>
                        <BootStrap.Nav.Link href="#pricing" className='dum'><AiOutlineUser/></BootStrap.Nav.Link>
                        <BootStrap.Nav.Link href="#pricing" className='dum'><AiOutlineHeart /></BootStrap.Nav.Link>
                        <BootStrap.Nav.Link href="/checkout" className='dum'><BsHandbag /></BootStrap.Nav.Link>
                        <BootStrap.Nav.Link onClick={() => logout()} className='dum'><BiLogOut /></BootStrap.Nav.Link>
                        <BootStrap.Nav.Link href='/search'><BsSearch /></BootStrap.Nav.Link>
                    </BootStrap.Navbar.Collapse>
                </BootStrap.Container>
            </BootStrap.Navbar>





            <div class="popup-wrap">
                <div class="popup-box">
                    <h2>Product Details</h2>
                    <div>*Color Shown</div>
                    <br />
                    <div>*Style</div>
                    <br />
                    <div>Product Specifications</div>
                    <div></div>
                    <br />
                    <div>hvh</div>
                    <br />

                    <a class="close-btn popup-close" href="#">x</a>
                </div>
            </div>



            <div className='popup'>
                <h6>Help</h6>
                <a href="/checking" className='dum'>Order Status</a>
                <br />
                <a href='/delivery' className='dum'>Dispatch And Delivery</a>
                <br />
                <a href='/' className='dum'>Returns</a>
                <br />
                <a href='/nikesupport' className='dum'>Guide Tour</a>
                <br />
                <a href='/' className='dum'>Privacy And Policy</a>
            </div>




        </div>
    )
}

export default Headers