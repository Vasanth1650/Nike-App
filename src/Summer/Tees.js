import React from 'react'
import './Tees.scss'
import $ from 'jquery'

function Tees() {
    return (
        <div className='bodying'>
        <div className='title'>Trending</div>
            <div class="row">
                <div class="column">
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/eac3b5ce-8580-4ff9-985a-9d6ecf6ed07e/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />
                    <div className='bottom-text'>Tees to Rule Summer</div>
                    <button className='shope'>Shop</button>
                </div>
                <div class="column2">
                    <img src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/h_700,c_limit/7e81a4e9-5bac-453f-8d80-1f933bd1afcd/nike-just-do-it.png"
                        alt="Forest" style={{ width: "100%" }} />
                    <div className='bottom'>Shorts to Beat the Heat</div>
                    <button className='shope'>Shop</button>
                </div>

            </div>  
        </div>
    )
}

export default Tees