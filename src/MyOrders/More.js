import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/More.scss';
import * as BootStrap from 'react-bootstrap';
import { SiNike } from "react-icons/si";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from 'react';
import { fetchUserData } from '../Api/AuthenticationService'
import { BiLogOut } from "react-icons/bi";
import Myorderservice from './Service/Myorderservice';
import RefundServicee from './Service/RefundServicee';
import Headers from '../Common/Headers';
import Footer from '../Common/Footer';

function More() {
    const usenavigate = useNavigate()
    const [data, setData] = useState({})
    const [userid, setUserid] = useState('')
    const [product, setProduct] = useState([])
    const [username, setUsername] = useState('')
    const [refund, setRefund] = useState([])
    const[check,setCheck] = useState('')

    useEffect(() => {
        if (!localStorage.getItem("USER_KEY")) {
            localStorage.clear();
            usenavigate('/login')
        }
    }, [])

    useEffect(() => {
        if (check === "undefined") {
            usenavigate('/login')
        }
    }, [])

    const m = localStorage.getItem("Userid")

    console.log(m)

    useEffect(() => {
        getByUserid()
        refundid()
    }, [m])

    console.log(product)

    const getByUserid = () => {
        Myorderservice.getting(m).then((response) => {
            setProduct(response.data);

        }).catch((error) => {
            console.log(error);
        })
    }

    const refundid = () => {
        RefundServicee.getDetails(m).then((response) => {
            setRefund(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    function OrderId(id) {
        usenavigate("/myorders/" + id);
    }

    function logout() {
        localStorage.clear();
        usenavigate('/')
    }

    function Refund(userid, username, productid, productname, paymentid, price, orderid, status4) {
        if (status4 === null) {
            if (productid) {
                const confirmBox = window.confirm(
                    "Do You Really Want To Cancel This Order?"
                )
                if (confirmBox === true) {
                    const confirmation = window.confirm("Press Yes To Cancel The Order")

                    if (confirmation === true) {

                        const details = { userid, username, productname, productid, paymentid, price, orderid }
                        fetch("http://localhost:8080/refund/refundcollector", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(details)
                        }).then(() => {
                            alert("Refund Request Has Been Requested")
                            Myorderservice.deleting(orderid)
                        })
                    }
                }
            }
        }else{
            alert("Your Package Is Out For Delivery To Cancel Or Replace Contact Further For Nike Support")
        }

    }

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
        })
    }, [])


    return (
        <div>
            


            <Headers/>





            <div class="table-users">
                <div class="header">MyOrders</div>
                {
                    product.map(product =>

                        <table cellspacing="0">
                            <tr >

                                <th>ProductName</th>
                                <th>Total Price</th>
                                <th >PaymentID</th>
                                <th width="230"></th>
                                <th width="230"></th>
                            </tr>

                            <tr>

                                <td>{product.productname}</td>
                                <td>{product.payment}</td>
                                <td>{product.paymentid}</td>

                                <td><BootStrap.Button onClick={() => OrderId(product.id)}>View Details</BootStrap.Button></td>

                                <td><BootStrap.Button variant="danger" onClick={() => Refund(data.id, data.username, product.id, product.productname, product.paymentid,
                                    product.payment, product.id, product.status4)}>Cancel Order</BootStrap.Button></td>
                            </tr>


                        </table>
                    )
                }
            </div>


            <div class="table-users">
                <div class="header">Refund Orders</div>
                {
                    refund.map(refund =>

                        <table cellspacing="0">
                            <tr >

                                <th>ProductName</th>
                                <th>Total Price</th>
                                <th >PaymentID</th>
                                <th width="230">Refund Status</th>
                                <th width="230">OrderId</th>
                            </tr>

                            <tr>

                                <td>{refund.productname}</td>
                                <td>{refund.price}</td>
                                <td>{refund.paymentid}</td>
                                <td>{refund.refundstatus}</td>
                                <td>{refund.orderid}</td>
                            </tr>


                        </table>
                    )
                }
            </div>












            <Footer/>

        </div>
    )
}

export default More