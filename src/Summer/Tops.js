import React from 'react'
import { useNavigate } from 'react-router-dom';

function Tops() {
    const usenavigate = useNavigate()

    const AllSection = (value) => {
        console.log(value)
        usenavigate('/section/' + value);
    }

    
    return (
        <div className='bodying'>
            <div className='titles'>Dont Miss</div>
            <br/>
            <div class="row">
                <div class="columns">
                    <img  src="https://static.nike.com/a/images/f_auto/dpr_1.5,cs_srgb/w_1167,c_limit/1fabec86-d9dc-401e-9673-0cc7ff3ccb5e/nike-just-do-it.png"
                        alt="Snow" style={{ width: "100%" }} />
                    <div className='bottomss'>SUMMER TOPS</div>
                    <button className='shopse' onClick={() => AllSection("Tops")}>Shop</button>
                </div>
                

            </div>  
            

        </div>
    )
}

export default Tops