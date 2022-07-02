import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as BootStrap from 'react-bootstrap';
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import '../Styles/ViewPage.scss'
import Headers from '../../Common/Headers';
import Footer from '../../Common/Footer';
import $ from 'jquery'

function NikeCore() {
    const usenavigate = useNavigate()

    $(document).ready(function() {
        $('.popup-btn').click(function(e) {
          $('.popup-wrap').fadeIn(500);
          $('.popup-box').removeClass('transform-out').addClass('transform-in');
      
          e.preventDefault();
        });
      
        $('.popup-close').click(function(e) {
          $('.popup-wrap').fadeOut(500);
          $('.popup-box').removeClass('transform-in').addClass('transform-out');
      
          e.preventDefault();
        });
      });


    return (
        <div className='bodyd'>
           
            <Headers/>






            <div>

                <div class="containers">
                    <div className='carding'>

                        <BootStrap.Card.Img className='tre' variant="top" src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7b84ca99-a145-45ec-a521-79876978ea79/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png' />
                        <video className='tres' playsInline autoPlay muted>
                            <source src="https://static.nike.com/a/videos/q_90,vc_vp9/2b23be24-5222-468b-b871-1a7ab4180420/video.webm" type="video/mp4" />
                        </video>
                        <div className='conenting'>
                            <div className="produ">Air Jordan XXXVI PF</div>
                            <div>Basketball Shoes</div>
                            <div>₹20,267
                                <div>Includes All Taxes</div>

                            </div>
                            <img width="75" src='https://static.nike.com/a/images/t_PDP_144_v1/f_auto/ec6e3201-e235-4c25-ba5d-e8d0ef7e0478/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png'></img>
                            <img width="75" className='kutti' src='https://static.nike.com/a/images/t_PDP_144_v1/f_auto/97b06504-eec6-4670-a06d-6620982ee3c7/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png'></img>
                            <img width="75" src='https://static.nike.com/a/images/t_PDP_144_v1/f_auto/6be5ac0f-7994-4774-8845-6680199ff47d/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png'></img>
                            <br />
                            <br />
                            <br />
                            <div>Size</div>
                            <button className='bus'></button>
                            <button className='bus'></button>
                            <div>---------------------------------</div>
                            <button className='bus'></button>
                            <button className='bus'></button>
                            <div>---------------------------------</div>
                            <button className='bus'></button>

                        </div>
                    </div>
                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7fb41f3c-e74e-48b2-bc64-d435343907d6/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png' />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3dd04fa4-df33-46b1-9656-9ab10396909f/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png' />
                        <div className='conenting'>
                            <BootStrap.Button className='bags'><BsHandbag />Add to bag</BootStrap.Button>
                            <BootStrap.Button className='bags'><AiOutlineHeart />Favourite</BootStrap.Button>

                        </div>

                    </div>

                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b6b08b1b-8faf-4723-aaae-c02f4e400bf6/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png' />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f6d27805-235d-45c5-8ebe-5cc91306dba0/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png' />
                        <div className='conenting'>

                        </div>
                        <div>The Air Jordan XXXVI isn't just the next shoe up in the iconic franchise; it's an expression of the drive and energy that sparked a basketball revolution.It's one of the lightest Air Jordan game shoes to date, featuring a
                            minimal but durable leno-weave upper reinforced with a TPU ribbon and synthetic overlays.It also comes equipped with a full-length Zoom Air Strobel unit stitched directly to the upper, stacked with a Zoom Air unit underneath the
                            forefoot, providing a sensation of energy return and elite responsiveness.Step on the court with the confidence that whatever you do—it's light work.This PF version uses an extra-durable outsole that's designed for outdoor courts.</div>
                    </div>

                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5d1c9f62-fe2d-4a98-91a0-078c548c2fe9/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png' />
                        <BootStrap.Card.Img className='imgBx1' variant="top" src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/03b4efc2-313b-4de1-b61d-dbef0b94c6e6/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png' />
                        <div className='conenting'>

                        </div>
                        
                        <button class="btn popup-btn">Hlooooo</button>

            <div class="popup-wrap">
                            <div class="popup-box">
                                <h2>Product Details</h2>
                                <div>*Color Shown</div>
                                <br/>
                                <div>*Style</div>
                                <br/>
                                <div>Product Specifications</div>
                                <div></div>
                                <br/>
                                <div>hvh</div>
                                <br/>
                                
                                <a class="close-btn popup-close" href="#">x</a>
                            </div>
                        </div>
                    </div>

                    <div className='carding'>

                        <BootStrap.Card.Img className='imgBxs' variant="top" src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ffc19188-c8ae-43aa-834f-3e343c6e7116/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png' />

                        <div className='conenting'>
                           
                        </div>
                    </div>
                </div>
            </div>


            <div className='explore'>Explore the Air Jordan XXXVI PF Basketball Shoes</div>
            <br/><br/>
            <div className='explore'>
                <img width="1150" src='https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/5bec0444-9438-49a5-af08-3956f1983e04/image.jpg'/>
            </div>
            <br/><br/>
            <div className='explore'>Light Flex</div>
            <br/>
            <div className='asd'>A minimal but durable Jacquard leno-weave upper paired with a</div>
            <div className='asd'>dynamic flexible tongue provides a lightweight fit and plush</div>
            <div className='asd'>comfort.</div>
            <br/><br/><br/>
            <div className='explore'>
                <img width="1150" src='https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/c3037384-46d5-485a-ba7f-adce2e0c41f3/image.jpg'/>
            </div>
            <br/><br/><br/>
            <div className='explore'>Light Feel, Big Energy</div>
            <br/>
            <div className='asd'>A full-length Zoom Air Strobel unit is stitched directly to the</div>
            <div className='asd'>upper, sitting right under your foot to minimise weight. An</div>
            <div className='asd'>energy-returning Zoom Air unit is stacked underneath the</div>
            <div className='asd'>forefoot to add an extra burst of responsiveness off the dribble.</div>
            <br/><br/><br/><br/>
            <div className='explore'>
                <img width="1150" src='https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/da4495c6-fc6b-474e-9661-8ab1a3bd21cd/image.jpg'/>
            </div>
            <br/><br/><br/>
            <div className='explore'>Secure for Take-Off</div>
            <br/>
            <div className='asd'>A 2-loop band system paired with high sidewalls provides side-</div>
            <div className='asd'>to-side stability, whether you're cutting off the ball on defence or</div>
            <div className='asd'>taking off to finish on offence.</div>
            <br/><br/><br/><br/>



            <Footer/>

        </div>
    )
}

export default NikeCore