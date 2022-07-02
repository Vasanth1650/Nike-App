import React from 'react'
import './Design.scss'
import $ from 'jquery'

function Test() {

    return (
        <div>
            <div class="containersss">
                <div class="top-bar">
                    <div class="left-side">
                        <img id="main-logo" src="https://cdn.boldfonts.com/wp-content/uploads/2020/08/Nike-Font-770x500.jpg"></img>
                        <input type="text" id="search-bar" placeholder="Search " />
                        <img id="mic" src="https://1.bp.blogspot.com/-lINg3E20_4Y/VebwdAy_MaI/AAAAAAAAFJU/8Jg2H-3-_cc/s1600/Microphone.png" />
                    </div>
                    <br />
                    <div class="right-side">
                        <ul>
                            <li id="nine-square"><a href="#"></a></li>
                            <li id="circle-bell"><a href="#"></a></li>
                            <li id="profile-pic"></li>
                        </ul>
                    </div>
                </div>
                <div class="scnd-bar">
                    <div class="scnd-left">
                        <ul class="nav-list">
                            <li><a id="active" href="#">All</a></li>
                            <li><a href="#">Product Name</a></li>
                            <li><a href="#">Category</a></li>
                            <li><a href="#">Gender</a></li>
                            <li><a href="#">Collections</a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>

        </div>

    )
}

export default Test