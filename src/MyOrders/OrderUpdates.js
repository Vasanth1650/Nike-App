import React, { useEffect, useState } from 'react'
import * as BootStrap from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import Myorderservice from './Service/Myorderservice';
import Headers from '../Common/Headers';
import Footer from '../Common/Footer';

function OrderUpdates() {
    const usenavigate = useNavigate()
    const [orders, setOrders] = useState([])


    useEffect(() => {
        getOrderedDetails()
    }, [])

    const getOrderedDetails = () => {
        Myorderservice.getAllOrders().then((response) => {
            setOrders(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    function updateorderStatus(id) {
        usenavigate('/orderstatus/' + id)
    }

    function logout() {
        localStorage.clear();
        usenavigate('/')
    }

    return (
        <div className='body'>

            <Headers />


            <div class="table-users">
                <div class="header">Orders Received</div>

                <table cellspacing="0">
                    <tr >
                        <th>Order Id</th>
                        <th width="230">Username</th>
                        <th width="230">ProductName</th>
                        <th>Payment</th>
                        <th width="230">Status</th>

                        <th>City</th>
                        <th>Update Details</th>
                    </tr>
                    {
                        orders.map(orders =>
                            <tr>
                                <td>{orders.id}</td>
                                <td>{orders.username}</td>
                                <td>{orders.productname}</td>
                                <td>{orders.payment}</td>
                                <td className='status1'>{orders.status}</td>

                                <td>{orders.city}</td>
                                <td><BootStrap.Button variant="warning" onClick={() => updateorderStatus(orders.id)}>Update Status</BootStrap.Button></td>
                            </tr>
                        )
                    }
                </table>

            </div>

            <Footer />

        </div>
    )
}

export default OrderUpdates