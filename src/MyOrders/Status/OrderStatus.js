import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Myorderservice from '../Service/Myorderservice';
import * as BootStrap from 'react-bootstrap';
import Headers from '../../Common/Headers';
import Footer from '../../Common/Footer';


function OrderStatus() {
    const { id } = useParams()
    const [username, setUsername] = useState('')
    const [address, setAddress] = useState('')
    const [userid, setUserid] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [payment, setPayment] = useState('')
    const [productname, setProductname] = useState('')
    const [status, setStatus] = useState('')
    const [paymentid, setPaymentid] = useState('')
    const [status1, setStatus1] = useState('')
    const [status2, setStatus2] = useState('')
    const [status3, setStatus3] = useState('')
    const [status4, setStatus4] = useState('')
    const [status5, setStatus5] = useState('')
    const usenavigate = useNavigate()





    const UpdateStatus = (e) => {
        e.preventDefault();
        const orderstatus = {
            username, userid, productname, paymentid, status, city, state, address, payment, status1, status2,
            status3, status4, status5
        }
        if (id) {
            Myorderservice.updatingStatus(id, orderstatus).then((response) => {
                usenavigate('/')
            }).catch((error) => {
                console.log(error)
            })
        } else {

        }
    }

    useEffect(() => {
        Myorderservice.finderById(id).then((response) => {
            setUserid(response.data.userid)
            setUsername(response.data.username)
            setProductname(response.data.productname)
            setPaymentid(response.data.paymentid)
            setPayment(response.data.payment)
            setAddress(response.data.address)
            setState(response.data.state)
            setCity(response.data.city)
            setStatus(response.data.status)
            setStatus1(response.data.status1)
            setStatus2(response.data.status2)
            setStatus3(response.data.status3)
            setStatus4(response.data.status4)
            setStatus5(response.data.status5)
        })
    }, [])

    return (
        <div className='body'>

        <Headers/>
            
                <div class="c-glitch" data-text="More Details">More Details</div>
                <label className='status1'>CustomerName</label>
                            <div className='status' id="userid">{username}</div>
                            <br />
                            <label className='status1'>Cutomer Id</label>
                            <div className='status' id="userid">{userid}</div>
                            <br />
                            <label className='status1'>Customer Paid Amount</label>
                            <div className='status' id="userid">{payment}</div>
                            <br />
                            <label className='status1'>Customer PaymentId</label>
                            <div className='status' id="userid">{paymentid}</div>
                <div>

                    <div class="o-main">

                        <div class="o-content">
                        <svg class="c-drawing" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221.098 94.484">
                                <defs><clipPath id="a" transform="translate(-2.959 8.316)"><path data-name="mask layer" d="M33.023 81.169q-8.76-.348-14.354-4.8a28.672 28.672 0 0 1-2.982-2.984 18.635 18.635 0 0 1-3.232-5.816c-2.114-6.332-1.026-14.641 3.112-23.76C19.11 36 24.577 28.261 34.115 17.537c1.405-1.578 5.589-6.193 5.616-6.193.01 0-.218.4-.505.876a56.212 56.212 0 0 0-5.758 13.28c-1.857 6.8-1.633 12.63.656 17.153a16.755 16.755 0 0 0 7.33 7.307c5.329 2.611 13.131 2.827 22.659.632.656-.152 33.162-8.781 72.236-19.176S207.4 12.524 207.4 12.531 116.623 51.39 69.492 71.545c-7.464 3.191-9.46 4-12.969 5.229-8.97 3.15-17.005 4.653-23.5 4.395z" fill="none" /></clipPath></defs><g clip-path="url(#a)"><path data-name="path layer" d="M40.086 15.905s-77.568 99.586 61.374 42.33l113.369-40.829" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="37" /></g></svg>
                            <div class="c-glitch" data-text="JUST DO IT">JUST DO IT</div>

                            
                            <br />
                            <label className='status1'>Customer Ordered Items</label>
                            <div className='status' id="userid">{productname}</div>
                            <br />
                            <label className='status1'>Customer State</label>
                            <div className='status' id="userid">{state}</div>
                            <br/>
                            <label className='status1'>Customer City</label>
                            <div className='status' id="userid">{city}</div>
                            <br/>
                            <label className='status1'>Customer Address</label>
                            <div className='status' id="userid">{address}</div>
                            <br/>
                            <label className='status1'>Initiate Status</label>
                            <input className='status1' placeholder='Enter Status' onChange={(e) => setStatus(e.target.value)} value={status}></input>
                            <br/>
                            <label className='status1'>Order Processing Status</label>
                            <input className='status1' placeholder='Enter Status' onChange={(e) => setStatus1(e.target.value)} value={status1}></input>
                            <br/>
                            <label className='status1'>Pick Up Status</label>
                            <input  className='status1' placeholder='Enter Status' onChange={(e) => setStatus2(e.target.value)} value={status2}></input>
                            <br/>
                            <label className='status1'>In Transit Status</label>
                            <input className='status1' placeholder='Enter Status' onChange={(e) => setStatus3(e.target.value)} value={status3}></input>
                            <br/>
                            <label className='status1'>Out For Delivery Status</label>
                            <input  className='status1' placeholder='Enter Status' onChange={(e) => setStatus4(e.target.value)} value={status4}></input>
                            <br/>
                            <label className='status1'>Delivered Status</label>
                            <input  className='status1' placeholder='Enter Status' onChange={(e) => setStatus5(e.target.value)} value={status5}></input>

                            <BootStrap.Button className='butn' onClick={(e)=>UpdateStatus(e)}>Update Status</BootStrap.Button>
                           
                        </div>
                    </div>




                </div>
            

        </div>
    )
}

export default OrderStatus