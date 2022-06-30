import React, { useEffect, useState } from 'react'
import RefundServicee from './Service/RefundServicee'
import * as BootStrap from 'react-bootstrap';
import { fetchUserData } from '../Api/AuthenticationService'
import { useNavigate } from 'react-router-dom'
import Headers from '../Common/Headers';
import Footer from '../Common/Footer';

function RefundRequests() {
    const [refund, setRefund] = useState([])
    const usenavigate = useNavigate()


   

    useEffect(() => {
        gettingAllRequest()
    }, [])

    const gettingAllRequest = () => {
        RefundServicee.getAllRefund().then((response) => {
            setRefund(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    function statusrefund(refundid) {
        usenavigate("/refundstatus/" + refundid);
    }


    return (
        <div className='body'>

            <Headers />

            <div class="table-users">
                <div class="header">Refund Orders</div>

                <table cellspacing="0">
                    <tr className='trs'>

                        <th width="230">ProductName</th>
                        <th width="230">Total Price</th>
                        <th width="230">PaymentID</th>
                        <th width="230">Refund Status</th>
                        <th width="230">OrderId</th>
                        <th width="230">Refund</th>
                        <th width="230">Update Details</th>
                    </tr>
                    {
                        refund.map(refund =>
                            <tr>

                                <td>{refund.productname}</td>
                                <td>{refund.price}</td>
                                <td>{refund.paymentid}</td>
                                <td className='status1'>{refund.refundstatus}</td>
                                <td>{refund.orderid}</td>
                                <td><BootStrap.Button variant="warning" onClick={() => { navigator.clipboard.writeText(refund.paymentid) }} href='https://dashboard.razorpay.com/app/payments'>Proceed Request</BootStrap.Button></td>
                                <td><BootStrap.Button variant="warning" onClick={() => statusrefund(refund.id)}>Update Status</BootStrap.Button></td>
                            </tr>
                        )
                    }
                </table>

            </div>
            <Footer />
        </div>
    )
}

export default RefundRequests