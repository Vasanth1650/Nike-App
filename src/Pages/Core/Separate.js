import React from 'react'
import '../Styles/DetailedPage.css';
import '../Styles/DetailedPage.scss';
import * as BootStrap from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import DashboardService from '../Services/DashboardService';
import { useState } from 'react';
import { fetchUserData } from '../../Api/AuthenticationService';
import Headers from '../../Common/Headers';
import Footer from '../../Common/Footer';
import $ from 'jquery'





function Separate() {
    const { gender } = useParams()
    const [gentle,setGentle] = useState([])
    const [check,setCheck] = useState('')
    const [data,setData] = useState({})    
    const usenavigate = useNavigate()
 

    useEffect(() => {
        setCheck(data.username)
        findByGender(gender)
    }, [])

    const deleteById = (productid) =>{
        if(productid){
            const confirmBox = window.confirm("Do Your Really Want To Delete This Product");
        
        if(confirmBox === true){
            const confirmation = window.confirm("Click Ok To Continue TO Delete");
        
        if(confirmation === true){
            DashboardService.deleteByProductId(productid).then((response)=>{
                findByGender();
                alert("Product Deleted SuccessFully");
            }).catch(error =>{
                console.log(error)
            })
        }
    }
    }
    }

    function UpdateDetails(id){
        usenavigate('/update/product/'+id)
    }

    const findByGender = (gender) =>{
        DashboardService.getByGender(gender).then((response)=>{
            setGentle(response.data)
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }

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

    const Nextstep=(id)=>{
      console.log(id);
      usenavigate('/most/'+id);
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
            



            <br/> 

            


            <div>
            <div >
                <BootStrap.Row xs={1} md={3} >
                    {
                        gentle.map(gentle =>
                            <BootStrap.Col>
                                <div className='items'>
                                    <BootStrap.CardGroup>
                                        <BootStrap.Card >
                                            <BootStrap.Card.Img style={{height:'30rem' }} variant="top" src={gentle.productimage1} />
                                            <BootStrap.Card.Body>
                                                <BootStrap.Card.Text style={{color:"red"}}>
                                                    {gentle.gender}
                                                    ({gentle.category3})
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                <div>
                                                    {gentle.category1}
                                                </div>
                                                <div>
                                                ₹{gentle.productprice}
                                                </div>
                                            </BootStrap.Card.Body>
                                            <BootStrap.Button onClick={()=> Nextstep(gentle.id)}>
                                                Buy Now
                                            </BootStrap.Button>
                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                            <BootStrap.NavLink onClick={()=>deleteById(gentle.id)}>Delete</BootStrap.NavLink>}
                                            {data && data.roles && data.roles.filter(value => value.roleCode === 'ADMIN').length > 0 &&
                                            <BootStrap.NavLink onClick={()=>UpdateDetails(gentle.id)}>Update</BootStrap.NavLink>}

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

           
           <Footer/>



        </div>


    )
}

export default Separate