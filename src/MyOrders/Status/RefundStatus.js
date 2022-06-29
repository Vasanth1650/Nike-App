import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import RefundServicee from '../Service/RefundServicee'
import '../Styles/RefundStatus.scss'
import * as BootStrap from 'react-bootstrap';
import Headers from '../../Common/Headers';
import Footer from '../../Common/Footer';

function RefundStatus() {
    const { refundid } = useParams()
    const [userid, setUserid] = useState('')
    const [username, setUsername] = useState('')
    const [productname, setProductname] = useState('')
    const [paymentid, setPaymentid] = useState('')
    const [price, setPrice] = useState('')
    const [orderid, setOrderid] = useState('')
    const [refundstatus, setRefundstatus] = useState('')
    const usenavigate = useNavigate()




    const UpdateStatus = (e) => {
        e.preventDefault();
        const refund = { userid, username, productname, paymentid, price, orderid, refundstatus }
        if (refundid) {
            RefundServicee.updatestatus(refundid, refund).then((response) => {
                usenavigate(-1)
            }).catch((error) => {
                console.log(error)
            })
        } else {

        }
    }

    useEffect(() => {
        RefundServicee.getById(refundid).then((response) => {
            setUserid(response.data.userid)
            setUsername(response.data.username)
            setProductname(response.data.productname)
            setPaymentid(response.data.paymentid)
            setPrice(response.data.price)
            setOrderid(response.data.orderid)
            setRefundstatus(response.data.refundstatus)
        })
    }, [])


    return (
        <div className='body'>

        <Headers/>
            <div class="c-glitch" data-text="More Details">More Details</div>

            <div>

                <div class="o-main">

                    <div class="o-content">

                        <label className='status1'>CustomerName</label>
                        <div className='status' id="userid">{username}</div>
                        <br />
                        <label className='status1'>Cutomer Id</label>
                        <div className='status' id="userid">{userid}</div>
                        <br />
                        <label className='status1'>Customer Paid Amount</label>
                        <div className='status' id="userid">{price}</div>
                        <br />
                        <label className='status1'>Customer PaymentId</label>
                        <div className='status' id="userid">{paymentid}</div>
                        <br />
                        <label className='status1'>Customer Ordered Items</label>
                        <div className='status' id="userid">{productname}</div>
                        <br />
                        <label className='status1'>Refund Status</label>
                        <input className='status1' placeholder='Enter Refund Status' onChange={(e)=>setRefundstatus(e.target.value)} value={refundstatus}></input>
                        <BootStrap.Button className='butn' onClick={(e)=>UpdateStatus(e)}>Update Status</BootStrap.Button>
                        <svg class="c-drawing" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 221.098 94.484">
                            <defs><clipPath id="a" transform="translate(-2.959 8.316)"><path data-name="mask layer" d="M33.023 81.169q-8.76-.348-14.354-4.8a28.672 28.672 0 0 1-2.982-2.984 18.635 18.635 0 0 1-3.232-5.816c-2.114-6.332-1.026-14.641 3.112-23.76C19.11 36 24.577 28.261 34.115 17.537c1.405-1.578 5.589-6.193 5.616-6.193.01 0-.218.4-.505.876a56.212 56.212 0 0 0-5.758 13.28c-1.857 6.8-1.633 12.63.656 17.153a16.755 16.755 0 0 0 7.33 7.307c5.329 2.611 13.131 2.827 22.659.632.656-.152 33.162-8.781 72.236-19.176S207.4 12.524 207.4 12.531 116.623 51.39 69.492 71.545c-7.464 3.191-9.46 4-12.969 5.229-8.97 3.15-17.005 4.653-23.5 4.395z" fill="none" /></clipPath></defs><g clip-path="url(#a)"><path data-name="path layer" d="M40.086 15.905s-77.568 99.586 61.374 42.33l113.369-40.829" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="37" /></g></svg>
                        <div class="c-glitch" data-text="JUST DO IT">JUST DO IT</div>

                    </div>
                </div>




            </div>

            <Footer/>
        </div>
    )
}

export default RefundStatus