import React from 'react'
import '../Styles/DetailedPage.css';
import '../Styles/DetailedPage.scss';
import * as BootStrap from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import OptionPageService from '../Services/OptionPageService';
import { useState } from 'react';
import { fetchUserData } from '../../Api/AuthenticationService';
import Headers from '../../Common/Headers';
import Footer from '../../Common/Footer';






function DetailedPage() {
    const { option } = useParams()
    const [product, setProduct] = useState([])
    const [gentle,setGentle] = useState([])
    const [check,setCheck] = useState('')
    const [data,setData] = useState({})
    const [collection,setCollection] = useState([])


    

    const usenavigate = useNavigate()

    

    useEffect(() => {
        setCheck(data.username)
        getByCategory(option);
        getByGender(option);
        getByCollection(option);
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

    const getByCollection = (option) =>{
        OptionPageService.findByCollection(option).then((response)=>{
            setCollection(response.data);
            console.log(response.data)
        }).catch(error=>{
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

            <Headers/>
            



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
                                                    ({product.category3})
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
                                                    ({gentle.category3})
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                <div>
                                                    {gentle.category1}
                                                </div>
                                                <div>
                                                ₹{gentle.price}
                                                </div>
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


            <div>
            <div >
                <BootStrap.Row xs={1} md={4} >
                    {
                        collection.map(collection =>
                            <BootStrap.Col>
                                <div className='items'>
                                    <BootStrap.CardGroup>
                                        <BootStrap.Card >
                                            <BootStrap.Card.Img variant="top" src={collection.image1} />
                                            <BootStrap.Card.Body>
                                                <BootStrap.Card.Text style={{color:"red"}}>
                                                    {collection.gender}
                                                    ({collection.category3})
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Title>{gentle.productname}</BootStrap.Card.Title>
                                                <BootStrap.Card.Text>
                                                    {collection.category1}
                                                </BootStrap.Card.Text>
                                                <BootStrap.Card.Text>
                                                ₹{collection.price}
                                                </BootStrap.Card.Text>
                                            </BootStrap.Card.Body>
                                            <BootStrap.Button onClick={()=> Nextstep(collection.id)}>
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

export default DetailedPage