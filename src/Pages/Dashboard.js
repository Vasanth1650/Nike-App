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







function Dashboard() {
    const [product, setProduct] = useState([]);
    const usenavigate = useNavigate();
    const [query, setQuery] = useState('');
    const [data, setData] = useState({});
    const [check, setCheck] = useState('');

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        
    };



    useEffect(() => {
        if (!localStorage.getItem("USER_KEY")) {
            localStorage.clear();
            usenavigate('/')
        }
    }, [])

    useEffect(() => {
        if (check === "undefined") {
            usenavigate('/')
        }
    }, [])

    console.log(check)

    console.log(data.username)


    useEffect(() => {
        setCheck(data.username)
        getAllProduct();
    }, [])

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


    return (
        <div className='body'>


            <BootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <BootStrap.Container>
                    <BootStrap.Navbar.Brand href="/dashboard"><SiNike />NIKE</BootStrap.Navbar.Brand>
                    <BootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <BootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <BootStrap.Nav className="me-auto">
                            <BootStrap.Nav.Link href="#features">MEN</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href="#pricing">WOMEN</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href="#pricing">KIDS</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href="#pricing">SPORTS</BootStrap.Nav.Link>
                            <BootStrap.Nav.Link href="#pricing">BRANDS</BootStrap.Nav.Link>

                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                <BootStrap.Button href="/allsection/mainadd" variant="warning" type="submit">ADD PRODUCTS</BootStrap.Button>}


                        </BootStrap.Nav>
                        <BootStrap.Nav.Link href="#pricing" className='dum'><AiOutlineUser /></BootStrap.Nav.Link>
                        <BootStrap.Nav.Link href="#pricing" className='dum'><AiOutlineHeart /></BootStrap.Nav.Link>
                        <BootStrap.Nav.Link href="#pricing" className='dum'><BsHandbag /></BootStrap.Nav.Link>
                        <BootStrap.Nav.Link onClick={() => logout()} className='dum'><BiLogOut /></BootStrap.Nav.Link>
                        <BootStrap.Form className="d-flex">
                            <BootStrap.FormControl
                                onChange={e => setQuery(e.target.value)}
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





            <div className='nikes'>

                <span class="parallax-text" text="NIKE">
                    NIKE
                </span>

                <img className="given" src="https://i.imgur.com/6DWEblv.png" alt="Nike sneaker" />
            </div>


            <div>
                <h1 class="gradient-text">Happy Shopping!</h1>
            </div>


            <div>
                <div class="svg-container animated tada"> <svg viewBox="0 0 450 450">
                    <g fill="none" stroke="#F25A5B" stroke-width="3">
                        <path d="M44.2964543,295.636871 C37.5053101,293.334881 32,285.63886 32,278.462615 L32,258.443635 C32,251.260545 37.7159195,244.306539 44.7586777,242.913049 L111.606516,229.686434 C119.192302,228.185498 130.426989,223.308783 136.677853,218.746538 C136.677853,218.746538 131.861328,222.332031 140.970703,215.578125 C149.723149,209.088854 159.12635,208.741287 166.894531,205.804688 C174.241391,203.02736 179.526612,197.545039 183.900391,191.947266 C190.018375,184.117174 207.773987,190.049465 219.970703,184.919922 C231.385498,180.11923 237.047656,164 248.773437,164 C278.639974,164 316.158854,205.804688 346.025391,205.804688 C364.441406,205.804688 374.474609,191.736328 382.921875,171.287109 C387.933594,163.789062 400.43699,179.27337 400.43699,179.27337 C401.151359,180.103992 402.019186,181.623932 402.375317,182.680449 C402.375317,182.680449 415.192114,219.795166 417.208984,240.5 C418.347477,252.187561 417.208984,263.917969 412.689453,273.060547 C415,282.830078 417.208984,296.675781 410.542969,308.755859 C403.876953,320.835938 220.896484,313.873047 136.455078,313.873047 C93.2298177,313.873047 44.2964543,295.636871 44.2964543,295.636871 Z"
                            class="shoe-base" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M32.4765625,276.820312 C32.4765625,276.820312 40.1445312,287.298829 58.203125,287.298828 C121.838774,287.298825 191.84375,291.08789 278.189453,269.476562 C289.643072,267.129015 389.230646,265.448893 389.230646,265.448893 C390.329724,265.429657 391.907589,265.984007 392.7616,266.684582 C392.7616,266.684582 399.948727,272.728589 403.312738,274.385852 C406.454586,275.933667 411.738281,274.029297 411.738281,274.029297"
                            class="guy-chan" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M42.0625,244.501953 C42.0625,244.501953 42.0625,267.728514 123.769531,251.701172 C142.574219,251.701172 144.238281,267.728514 156.103516,267.728514 C167.96875,267.728514 166.583315,241.321088 182.373114,241.279319 C196.410156,241.242187 222.894531,264.554686 249.21875,261.259766 C249.21875,261.259766 355.375,240.15039 385.765625,233.849609 C416.15625,227.548828 417.15625,241.242188 417.15625,241.242188"
                            class="suede-1"></path>
                        <path d="M111.505859,230.691406 C111.505859,230.691406 105.041992,239.022461 127.886719,239.022461 C150.731445,239.022461 164.865234,259.009766 164.865234,259.009766 M136.505859,219 C136.505859,219 113.1875,243.048828 177.320311,228.698242 C215.647458,222.924805 245.279297,260.613281 245.279297,260.613281 M178.428711,228.777832 C178.428711,228.777832 185.566985,232.449704 188.050094,236.034911 C190.533203,239.620117 190.533203,242.044434 190.533203,242.044434"
                            class="sep-low" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M328.123047,244.140625 C328.123047,244.140625 333.53125,225.603516 358.001953,210.032227 C382.472656,194.460938 403.880859,191.923828 403.880859,191.923828" class="suede-2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M353.636719,211.802734 C353.636719,211.802734 311.208795,210.431822 290.273438,204.474609 C270.613743,198.88039 231.851562,177.148438 231.851562,177.148438 M275.027344,198.164062 C275.027344,198.164062 281.83589,197.077454 287.350562,193.908844 C292.865234,190.740234 296.716797,185.394531 296.716797,185.394531"
                            class="sep-top" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M234.939453,153.171875 L239.955078,160.966797 C239.955078,160.966797 256.325044,151.41492 264.510028,147.638982 C269.236503,145.45854 278.689453,143.097656 278.689453,143.097656 M143.716797,213.639651 L259.159832,135.995844 C263.743327,132.913111 270.554247,133.660081 274.362304,137.65361 L292.235352,156.397171 C296.04795,160.395463 296.928016,167.537319 294.209486,172.33404 L290.929688,178.121094"
                            class="tongue" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M259,184.05 C262.313708,184.05 265,181.576373 265,178.525 C265,175.473627 262.313708,173 259,173 C255.686292,173 253,175.473627 253,178.525 C253,181.576373 255.686292,184.05 259,184.05 L259,184.05 Z M271,190 C274.313708,190 277,187.526373 277,184.475 C277,181.423627 274.313708,178.95 271,178.95 C267.686292,178.95 265,181.423627 265,184.475 C265,187.526373 267.686292,190 271,190 L271,190 Z"
                            class="loop" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M336.134766,228.828125 C336.134766,228.828125 259,250.75 237.324219,240.771484 C201.792334,224.414267 254.109375,199.996094 254.109375,199.996094 C254.109375,199.996094 241.541019,222.03125 266.589843,225.210938 C281.938148,227.159245 350.945313,214.996094 350.945313,214.996094"
                            class="nike" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M204.902344,297.123047 L279.574219,299.619141 M372.56543,299.695312 C399.374023,299.695312 414.532589,295.695312 414.532589,295.695312 M234.003906,283.695312 C234.003906,283.695312 345.756836,285.695312 372.56543,285.695312 C399.374023,285.695312 414.532589,281.695312 414.532589,281.695312"
                            class="heel" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M284,299.5 C284,295.910149 286.915864,293 290.504017,293 L361.495983,293 C365.088052,293 368,295.917454 368,299.5 L368,299.5 C368,303.089851 365.084136,306 361.495983,306 L290.504017,306 C286.911948,306 284,303.082546 284,299.5 L284,299.5 L284,299.5 L284,299.5 Z M301.5,306 C305.089851,306 308,303.089851 308,299.5 C308,295.910149 305.089851,293 301.5,293 C297.910149,293 295,295.910149 295,299.5 C295,303.089851 297.910149,306 301.5,306 L301.5,306 L301.5,306 Z M325.5,306 C329.089851,306 332,303.089851 332,299.5 C332,295.910149 329.089851,293 325.5,293 C321.910149,293 319,295.910149 319,299.5 C319,303.089851 321.910149,306 325.5,306 L325.5,306 L325.5,306 Z M350.5,306 C354.089851,306 357,303.089851 357,299.5 C357,295.910149 354.089851,293 350.5,293 C346.910149,293 344,295.910149 344,299.5 C344,303.089851 346.910149,306 350.5,306 L350.5,306 L350.5,306 Z"
                            class="bubble" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M139.126284,209.468624 C138.017078,207.760597 139.00003,205.153691 141.311242,203.652772 C143.627167,202.148793 146.399692,202.307906 147.51299,204.022233 L155.535887,216.376412 C156.645093,218.084439 155.662141,220.691345 153.350929,222.192264 C151.035004,223.696243 148.262479,223.53713 147.149182,221.822802 L139.126284,209.468624 L139.126284,209.468624 L139.126284,209.468624 L139.126284,209.468624 L139.126284,209.468624 Z" class="lace-1" stroke-linecap="round" stroke-linejoin="round" fill="#FFFFFF"></path>
                        <path d="M157.577037,197.486565 C156.467831,195.778538 157.450782,193.171632 159.761995,191.670713 C162.07792,190.166734 164.850445,190.325847 165.963742,192.040174 L173.98664,204.394353 C175.095845,206.10238 174.112894,208.709286 171.801681,210.210205 C169.485757,211.714184 166.713231,211.555071 165.599934,209.840744 L157.577037,197.486565 L157.577037,197.486565 L157.577037,197.486565 L157.577037,197.486565 L157.577037,197.486565 Z" class="lace-2" stroke-linecap="round" stroke-linejoin="round" fill="#FFFFFF"></path>
                        <path d="M176.027789,185.504506 C174.918583,183.796479 175.901535,181.189573 178.212747,179.688655 C180.528672,178.184675 183.301197,178.343788 184.414495,180.058116 L192.437392,192.412295 C193.546598,194.120321 192.563646,196.727227 190.252434,198.228146 C187.936509,199.732125 185.163984,199.573012 184.050687,197.858685 L176.027789,185.504506 L176.027789,185.504506 L176.027789,185.504506 L176.027789,185.504506 L176.027789,185.504506 Z" class="lace-3" stroke-linecap="round" stroke-linejoin="round" fill="#FFFFFF"></path>
                        <path d="M194.478542,173.522447 C193.369336,171.81442 194.352287,169.207515 196.6635,167.706596 C198.979425,166.202617 201.75195,166.361729 202.865247,168.076057 L210.888145,180.430236 C211.99735,182.138263 211.014399,184.745168 208.703186,186.246087 C206.387262,187.750066 203.614736,187.590954 202.501439,185.876626 L194.478542,173.522447 L194.478542,173.522447 L194.478542,173.522447 L194.478542,173.522447 L194.478542,173.522447 Z" class="lace-4" stroke-linecap="round" stroke-linejoin="round" fill="#FFFFFF"></path>
                    </g>
                </svg>
                </div>
            </div>






            <div className='bodys'>
                <br />
                <div>WORK OUT IN STYLE<BootStrap.Card.Img className='cards' variant="top"
                    src="https://www.insidehook.com/wp-content/uploads/2021/12/Nike-Cover-St.jpg?resize=1200%2C630"></BootStrap.Card.Img>

                </div>
                <button class="custom-btn btn-16" onClick={() => Options("mens training")}>SHOP MEN</button>
                <br />

            </div>

            <div className='adding'>
                <div className='bodysi'>
                    <div>EXPLORE THE NEW COLLECTIONS<BootStrap.Card.Img className='cardii' variant="top"
                        src="https://www.hellokpop.com/wp-content/uploads/2020/03/2020030401000261100015281.jpg"></BootStrap.Card.Img>
                    </div>
                    <button class="custom-btn btn-16" onClick={() => Options("womens training")}>SHOP WOMEN</button>
                </div>

                <div className='bodysii'>
                    <div>JOIN THE TREND NOW WITH NIKE<BootStrap.Card.Img className='cardi' variant="top"
                        src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/89b65736-e63c-4c18-9d26-4baac0c89963/simple-fun-workouts-for-kids.jpg"></BootStrap.Card.Img>
                    </div>
                    <button class="custom-btn btn-16" onClick={() => Options("kids training")}>SHOP KIDS</button>
                </div>
            </div>

            <div className='adding'>
                <div >
                    <br></br>
                    <div className='headpop'>POPULAR RIGHT NOW</div>
                    <div className='popularbut'>
                        <BootStrap.Button variant="outline-secondary">SLIDES AND SANDALS</BootStrap.Button>
                        <BootStrap.Button variant="outline-secondary">T-SHIRTS AND SHORTS</BootStrap.Button>
                        <BootStrap.Button variant="outline-secondary">FOOTBALL</BootStrap.Button>
                        <BootStrap.Button variant="outline-secondary">WHITE SNEAKERS</BootStrap.Button>
                        <BootStrap.Button variant="outline-secondary">RUNNING</BootStrap.Button>
                    </div>
                    <br></br>
                </div>




                <div >
                    <div className='ko'>WHO ARE YOU SHOPPING FOR?</div>
                    <br /></div>
            </div>


            <div className='texting'>

                <BootStrap.CardGroup>
                    <BootStrap.Card onClick={() => AllSection("Men's")}>
                        <BootStrap.Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/yjmjfgvca8w01dcyzokk/sportswear-t-shirt-zmMkxS.png" />
                        <BootStrap.Card.Body>
                            <BootStrap.Card.Title>MEN</BootStrap.Card.Title>

                        </BootStrap.Card.Body>
                        <BootStrap.Button onClick={() => AllSection("Men's")}>
                            BE BOLD MEN
                        </BootStrap.Button>
                    </BootStrap.Card>

                    <BootStrap.Card onClick={() => AllSection("Women's")}>
                        <BootStrap.Card.Img variant="top" src="https://i8.amplience.net/t/jpl/jdau_product_list?plu=jd_392502_al&qlt=85&qlt=92&w=320&h=320&v=1&fmt=auto" />
                        <BootStrap.Card.Body>
                            <BootStrap.Card.Title>WOMEN</BootStrap.Card.Title>
                        </BootStrap.Card.Body>
                        <BootStrap.Button onClick={() => AllSection("Women's")}>
                            Get Set Go
                        </BootStrap.Button>
                    </BootStrap.Card>
                    <BootStrap.Card onClick={() => AllSection("Kid's")}>
                        <BootStrap.Card.Img variant="top" src="https://i.pinimg.com/736x/f6/b8/28/f6b82892e20bed0b6b7740b76e4a7e1a.jpg" />
                        <BootStrap.Card.Body>
                            <BootStrap.Card.Title>KIDS</BootStrap.Card.Title>
                        </BootStrap.Card.Body>
                        <BootStrap.Button onClick={() => AllSection("Kid's")}>
                            Dont Touch Me
                        </BootStrap.Button>
                    </BootStrap.Card>
                </BootStrap.CardGroup>
            </div>







            <div className="adding">
                <div ><br /></div>
                <div className="headpops">MOST SEARCHED ITEMS IN NIKE</div>

                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 && <BootStrap.Button href='/dashboard/add' type="submit">ADD :)</BootStrap.Button>}
                <div><br /></div>
            </div>









            <div className='scroll'>
                <Slider {...settings} >
                    {
                        product.filter(product => product.productname.toLowerCase().includes(query))
                            .map(product =>
                                    <div className='items'>
                                        <BootStrap.CardGroup className='carding'>
                                            <BootStrap.Card >
                                                <BootStrap.Card.Img onClick={() => Nextstep(product.id)} variant="top" src={product.productimage1} />
                                                <BootStrap.Card.Body>
                                                    <BootStrap.Card.Text style={{ color: "red" }}>
                                                        Just In
                                                    </BootStrap.Card.Text>
                                                    <BootStrap.Card.Title>{product.productname}</BootStrap.Card.Title>
                                                    <BootStrap.Card.Text>
                                                        {product.category}
                                                    </BootStrap.Card.Text>
                                                    <BootStrap.Card.Text>
                                                        {product.productprice}
                                                    </BootStrap.Card.Text>
                                                </BootStrap.Card.Body>
                                                <BootStrap.Button onClick={() => Nextstep(product.id)}>
                                                    Buy Now
                                                </BootStrap.Button>
                                                <br />
                                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                    <BootStrap.Button variant="warning" type="submit">UPDATE :)</BootStrap.Button>}
                                                <br />
                                                {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                                    <BootStrap.Button onClick={() => deleteProduct(product.id)} variant="danger" type="submit">DELETE :)</BootStrap.Button>}
                                            </BootStrap.Card>
                                        </BootStrap.CardGroup>
                                        <br />
                                    </div>

                            )
                    }
                </Slider>
                
            </div>

                    
            <div className="adding">
                <div ><br /></div>
                <div className="headpops"></div>

                
                <div><br /></div>
            </div>



            

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

export default Dashboard