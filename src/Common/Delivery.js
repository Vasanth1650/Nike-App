import React from 'react'
import './Delivery.scss'
import Footer from './Footer'
import Headers from './Headers'
import './Delivery.css'

function Delivery() {
    return (
        <div>
            <Headers />
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />

            <title>Frontend Mentor | Four card feature section</title>
            <link rel="stylesheet" href="styles.css" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,400;0,600;1,200;1,400;1,600&display=swap"
                rel="stylesheet" />



            <div class="header">
                <h1>Reliable, efficient delivery</h1>
                <h1>Powered by Nike Corp</h1>

                <p>Our Nike Team works on multiple sectors to satisfy the consumer and to deliver the
                needs of the customers.</p>
            </div>

            <div class="row1-container">
                <div class="daba daba-down cyan">
                    <h2>Nike Packaging Team</h2>
                    <p>After The Order Confimation Received From The Nike Corp The Ordered Item Picked Up And Saftely Packed For Delivery</p>
                    <img className='delimg' src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
                </div>

                <div class="daba red">
                    <h2>Nike Transpoting Team</h2>
                    <p>Scans The Packed Order And Transmit The Package To The Given Address</p>
                    <img className='delimg' src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
                </div>

                <div class="daba daba-down blue">
                    <h2>Order Refunding And Status Updating Nike Team</h2>
                    <p>This Team Will Constantly Updates The Status Of The Product And Proceed For Any Refund Or Returning Of Product</p>
                    <img className='delimg' src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
                </div>
            </div>
            <div class="row2-container">
                <div class="daba orange">
                    <h2>Nike Corporation</h2>
                    <p>This Three Process Only Controlled By Nike Corporation No Other Third Party Involved</p>
                    <img className='delimg' src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
                </div>
            </div>
            <footer>
                <p class="attribution">
                    Challenge by <a href="https://www.nike.com/sg/" target="_blank">Nike Corporation Lead</a>.
                    Coded by <a href="#">Vasanth</a>.
                </p>
            </footer>
            <br />

            <Footer />
        </div>
    )
}

export default Delivery