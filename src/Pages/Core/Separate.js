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






function Separate() {
    const { gender } = useParams()
    const [product, setProduct] = useState([])
    const [gentle,setGentle] = useState([])
    const [check,setCheck] = useState('')
    const [data,setData] = useState({})
    const [collection,setCollection] = useState([])

    console.log(gender)


    

    const usenavigate = useNavigate()

    

    useEffect(() => {
        setCheck(data.username)
        findByGender(gender)
    }, [])

    function logout(){
        localStorage.clear();
        usenavigate('/')
    }

    const findByGender = (gender) =>{
        DashboardService.getByGender(gender).then((response)=>{
            setGentle(response.data)
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })
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
                                                <BootStrap.Card.Text>
                                                    {gentle.category1}
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Text>
                                                ₹{gentle.productprice}
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

           
           <Footer/>



        </div>


    )
}

export default Separate